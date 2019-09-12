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
        class="nav-link external nav-link-custom"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        {{ item.text }}
        <div v-if="item.important" class="importantDot"></div>
        <div v-if="item.isUnreadNotificationCount && unreadNotificationCount > 0" class="unreadNotificationCount">{{unreadNotificationCount}}</div>
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

<style lang="scss" scoped>
    .nav-link-custom {
        position: relative;
        .importantDot {
            position: absolute;
            top: -4px;
            right: -6px;
            width: 8px;
            height: 8px;
            background: #ff0000;
            border-radius: 50%;
        }
        .unreadNotificationCount {
            position: absolute;
            top: -6px;
            right: 0;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            padding: 2px 4px 3px;
            line-height: 12px;
            border-radius: 10px;
            box-shadow: 0 0 0 1px #fff;
            min-width: 16px;
            height: 16px;
            text-align: center;
            background: #ff0000;
            box-sizing: border-box;
            font-family: inherit;
            transform: translate(80%, 0) scale(.92);
        }
    }
</style>
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
                    this.item.actives.some((item) => {
                        if ((path).indexOf(item) === 0) {
                            active = true;
                            return true;
                        }
                    });
                    this.isActive = active;
                }
            },

            //eeui dev
            getNotification() {
                if (this.item.isUnreadNotificationCount === true) {
                    if (typeof window.__unreadNotificationId === "undefined" || window.__unreadNotificationId === this.randId) {
                        window.__unreadNotificationId = this.randId;
                        $.ajax({
                            url: "https://bbs.eeui.app/api/custom/unreadNotificationCount",
                            dataType: 'jsonp',
                            success: (result) => {
                                if (result.unreadNotificationCount > 0) {
                                    this.unreadNotificationCount = result.unreadNotificationCount;
                                } else {
                                    this.unreadNotificationCount = 0;
                                }
                                if (typeof window.__unreadNotificationCall === 'function') {
                                    window.__unreadNotificationCall(this.unreadNotificationCount);
                                }
                            }
                        });
                    } else {
                        window.__unreadNotificationCall = (count) => {
                            this.unreadNotificationCount = count;
                        };
                    }
                }
            }
        },

        //eeui dev
        data() {
            return {
                randId: Math.random(),
                isActive: false,
                unreadNotificationCount: 0
            }
        },

        //eeui dev
        mounted() {
            this.activePath(this.$route.path);
            this.getNotification();
        },

        //eeui dev
        watch: {
            '$route'(to) {
                this.activePath(to.path);
                this.getNotification();
            }
        },
    }
</script>
