<template>
    <div class="releases-main">

        <v-progress ref="myLoading" style="top:3.6rem"/>

        <div class="releases-body">
            <div v-for="(item, index) in gitReleasesNote">
                <h2>{{item.tag_name}} <Tag v-if="index == 0" value="Latest release" valueBgcolor="#3db4ff"></Tag></h2>
                <ul class="releases-body-ul">
                    <li>发布日期 {{published_at(item.published_at)}}</li>
                    <li>更新描述
                        <ul>
                            <li v-for="content in bodys(item.body)">
                                <markdown-preview :initialValue="content"></markdown-preview>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .releases-main {
        position: relative;
        background-color: #ffffff;
    }

    .releases-body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        margin: 0 auto;
        padding: 0;
        color: #232f40;
        font-size: 14px;
        line-height: 1.5;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;

        * {
            box-sizing: border-box;
        }

        .releases-body-ul {
            > li {
                margin: 0;
                padding: 2px 0;
                > ul > li {
                    list-style: none;
                    margin: 0;
                    padding: 2px 0;
                }
            }
        }
    }
</style>
<style lang="scss">
    .releases-body {
        .markdown-preview {
            padding: 0 !important;
            p {
                margin: 0
            }
        }
    }
</style>
<script>

    import VProgress from "./Progress";
    import MarkdownPreview from "./MDEditor/components/preview/index";
    export default {
        components: {MarkdownPreview, VProgress},
        data() {
            return {
                gitReleasesNote: [],
            }
        },
        mounted() {
            ;(()=>{
                const {repo} = this.$site.themeConfig;
                if (!repo) {
                    return;
                }
                let time = Math.round(new Date().getTime() / 1000);
                try {
                    let notes = JSON.parse(window.localStorage['__gitReleasesNote__']);
                    if (typeof notes === "object" && notes.exptime > time) {
                        this.gitReleasesNote = notes.data;
                        console.log("localStorageNote");
                        return;
                    }
                } catch (e) {

                }
                let timeOut = setTimeout(() => { this.$refs.myLoading.start(); }, 50);
                $.ajax({
                    url: "https://api.github.com/repos/" + repo + "/releases",
                    success: (result) => {
                        clearInterval(timeOut);
                        this.$refs.myLoading.end();
                        if (typeof result === "object") {
                            this.gitReleasesNote = result;
                            window.localStorage['__gitReleasesNote__'] = JSON.stringify({
                                exptime: time + 300,
                                data: this.gitReleasesNote
                            });
                        }
                    }
                });
            })();
        },
        methods: {
            published_at(at) {
                try {
                    let date = new Date(at);
                    let Y = date.getFullYear() + '-',
                        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
                        D = date.getDate() + ' ',
                        h = date.getHours() + ':',
                        m = date.getMinutes() + ':',
                        s = date.getSeconds();
                    return Y + M + D + h + m + s;
                }catch (e) {
                    return '-';
                }
            },
            bodys(content) {
                return content.split("\r\n");
            }
        },
    }
</script>
