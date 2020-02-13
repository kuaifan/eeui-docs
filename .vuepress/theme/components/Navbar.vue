<template>
    <header class="navbar">
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

        <router-link
            :to="$localePath"
            class="home-link"
        >
            <img
                class="logo"
                v-if="$site.themeConfig.logo"
                :src="$withBase($site.themeConfig.logo)"
                :alt="$siteTitle"
            >
            <span
                ref="siteName"
                class="site-name"
                v-if="$siteTitle"
                :class="{ 'can-hide': $site.themeConfig.logo }"
            >{{ $siteTitle }}</span>
            <span
                v-if="gitVersion"
                :class="{ 'version': true, 'can-hide': $site.themeConfig.logo }">
                <a :href="this.repoLink" target="_blank" class="version-bg">
                    <img src="./version-bg.svg" :alt="gitVersion">
                    <span class="version-no">{{gitVersion}}</span>
                </a>
            </span>
        </router-link>

        <div
            class="links"
            :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
        >
            <AlgoliaSearchBox
                v-if="isAlgoliaSearch"
                :options="algolia"
            />
            <CustomSearchBox v-else-if="isCustomSearch"/>
            <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
            <NavLinks class="can-hide"/>
        </div>
    </header>
</template>

<script>
    import AlgoliaSearchBox from '@AlgoliaSearchBox'
    import SearchBox from '@SearchBox'
    import SidebarButton from '@theme/components/SidebarButton.vue'
    import NavLinks from '@theme/components/NavLinks.vue'
    import CustomSearchBox from "./CustomSearchBox";

    export default {
        components: {CustomSearchBox, SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox},

        data() {
            return {
                isCustomSearch: true,

                linksWrapMaxWidth: null,

                gitVersion: '',
            }
        },

        mounted() {
            const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
            const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
            const handleLinksWrapWidth = () => {
                if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
                    this.linksWrapMaxWidth = null
                } else {
                    this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
                        - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
                }
            }
            handleLinksWrapWidth()
            window.addEventListener('resize', handleLinksWrapWidth, false)
            //
            ;(()=>{
                if (!this.repoLink) {
                    return;
                }
                if (typeof window.sessionStorage['__gitVersion__'] === "string") {
                    this.gitVersion = window.sessionStorage['__gitVersion__'];
                    return;
                }
                const {repo} = this.$site.themeConfig;
                $.ajax({
                    url: "https://api.github.com/repos/" + repo + "/releases/latest",
                    success: (result) => {
                        if (typeof result === "object" && typeof result.tag_name === 'string') {
                            this.gitVersion = result.tag_name;
                            window.sessionStorage['__gitVersion__'] = this.gitVersion;
                        }
                    }
                });
            })();
        },

        computed: {
            repoLink() {
                const {repo} = this.$site.themeConfig
                if (repo) {
                    return /^https?:/.test(repo)
                        ? repo
                        : `https://github.com/${repo}`
                }
            },

            algolia() {
                return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },

            isAlgoliaSearch() {
                return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
        }
    }

    function css(el, property) {
        // NOTE: Known bug, will return 'auto' if style value is 'auto'
        const win = el.ownerDocument.defaultView
        // null means not to return pseudo styles
        return win.getComputedStyle(el, null)[property]
    }
</script>

<style lang="stylus">
    $navbar-vertical-padding = 0.7rem
    $navbar-horizontal-padding = 1.5rem
    .navbar
        padding $navbar-vertical-padding $navbar-horizontal-padding
        line-height $navbarHeight - 1.4rem
        a, span, img
            display inline-block
        .logo
            height $navbarHeight - 1.4rem
            min-width $navbarHeight - 1.4rem
            margin-right 0.2rem
            vertical-align top
        .site-name
            font-size 1.3rem
            font-weight 600
            color $textColor
            position relative
            @media (max-width: 860px)
                display none
        .version
            position: relative;
            @media (max-width: 860px)
                display none
            .version-bg
                position: absolute;
                line-height: 0;
                top: -14px;
                left: -1px;
                .version-no
                    position: absolute;
                    top: -2px;
                    left: 1px;
                    font-size: 12px;
                    transform: scale(0.84);
                    color: #fff;
                    width: 40px;
                    text-align: center;
                    line-height: 18px;
                    letter-spacing: -0.01rem;
        .links
            padding-left 1.5rem
            box-sizing border-box
            background-color white
            white-space nowrap
            font-size 0.9rem
            position absolute
            right $navbar-horizontal-padding
            top $navbar-vertical-padding
            display flex
            .search-box
                flex: 0 0 auto
                vertical-align top
    @media (max-width: $MQMobile)
        .navbar
            padding-left 4rem
            .can-hide
                display none
            .links
                padding-left 1.5rem
</style>
