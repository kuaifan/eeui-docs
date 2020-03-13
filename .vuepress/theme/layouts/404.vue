<template>
    <div>
        <Layout v-if="isMarketsDetail"></Layout>
        <div v-else class="theme-default-content">
            <div v-if="show" class="theme-default-content">
                <h1>404</h1>
                <blockquote>{{ getMsg() }}</blockquote>
                <router-link to="/">Take me home.</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import redirect from './redirect'

    const msgs = [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`
    ];

    export default {
        data() {
            return {
                show: false,
                isMarketsDetail: false,
            }
        },

        mounted() {
            if ((this.$route.path + "").match(/^\/markets\/(([^/]+)\/([^/]+))\/*$/)) {
                this.isMarketsDetail = true;
                return;
            }
            let newUrl = redirect[this.$route.path];
            if (typeof newUrl === "string" && newUrl) {
                if (newUrl.substring(0, 7) === "http://"
                    || newUrl.substring(0, 8) === "https://") {
                    window.location.href = newUrl;
                } else {
                    this.$router.replace(newUrl);
                }
                return;
            }
            this.show = true;
        },

        methods: {
            getMsg() {
                return msgs[Math.floor(Math.random() * msgs.length)]
            },
        }
    }
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
