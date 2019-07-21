<template>
    <router-link
        :class="['nav-link', isActive ? 'router-link-active' : '']"
        :to="link"
        v-if="!isExternal(link)"
        :exact="exact"
    >{{ item.text }}
    </router-link>
    <a
        v-else
        :href="link"
        class="nav-link external"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        {{ item.text }}
    </a>
    <!--<a
        v-else
        :href="link"
        class="nav-link external"
        :target="isMailto(link) || isTel(link) ? null : '_blank'"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        {{ item.text }}
        <OutboundLink/>
    </a>-->
</template>

<script>
    import {isExternal, isMailto, isTel, ensureExt} from '../util'

    export default {
        props: {
            item: {
                required: true
            }
        },

        computed: {
            link() {
                return ensureExt(this.item.link)
            },

            exact() {
                if (this.$site.locales) {
                    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
                }
                return this.link === '/'
            }
        },

        methods: {
            isExternal,
            isMailto,
            isTel,

            //eeui dev
            activePath(path) {
                if (typeof this.item.actives === "object" && typeof this.item.actives !== "undefined") {
                    let active = false;
                    this.item.actives.forEach((item) => {
                        if ((path).indexOf(item) === 0) {
                            active = true;
                            return true;
                        }
                    });
                    this.isActive = active;
                }
            }
        },

        //eeui dev
        data() {
            return {
                isActive: false,
            }
        },

        //eeui dev
        mounted() {
            this.activePath(this.$route.path);
        },

        //eeui dev
        watch: {
            '$route'(to) {
                this.activePath(to.path);
            }
        },
    }
</script>
