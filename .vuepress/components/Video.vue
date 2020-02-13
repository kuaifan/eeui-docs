<template>
    <div v-if="isHide > -1" :class="['welcome_video', isHide===2?'welcome_hide':(isHide===0?'welcome_status':'')]">
        <video class="welcome_videoi" :src="src" autoplay loop muted></video>
        <div class="welcome_bg"></div>
        <div class="welcome_body">
            <div class="welcome_title">EEUI</div>
            <div class="welcome_desc">一次撰写，多端运行。</div>
            <div class="welcome_button">
                <a class="welcome_buttoni" href="javascript:;" @click="isHide=2">开始使用</a>
                <a v-if="repoLink" class="welcome_buttoni github" :href="repoLink" target="_blank">GitHub</a>
            </div>
        </div>
        <a class="welcome_link" target="_blank" :href="src">[<span>查看原视频</span>]</a>
    </div>

</template>

<style lang="stylus" scoped>
    .welcome_video {
        position fixed
        width 100%
        height 100%
        top 0
        left 0
        z-index 99
        background #000000
        opacity 1
        transform translate(0, 0)
        transition all .3s ease

        .welcome_videoi {
            height 100%
            width 100%
            object-fit fill
        }

        .welcome_bg {
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background-color rgba(78, 78, 78, .48)
            z-index 1
        }

        .welcome_body {
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            z-index 2
            text-align center

            .welcome_title {
                color #ffffff
                font-size 2.5rem
                margin .625rem 0 2.5rem
            }

            .welcome_desc {
                color #ffffff
                font-size 1.3rem
            }

            .welcome_button {
                margin-top 1rem
            }

            .welcome_buttoni {
                display inline-block
                border 1px solid #3EB4FF
                border-radius 2rem
                box-sizing border-box
                font-size 1.05rem
                letter-spacing .1rem
                margin .5rem 1rem
                padding .75em 2rem
                text-decoration none
                transition all .15s ease
                color #fff
                background-color #3EB4FF
                font-weight normal
            }

            .welcome_buttoni.github {
                color #3EB4FF
                background-color transparent

            }
        }
    }

    .welcome_status {
        opacity 0
    }

    .welcome_hide {
        transform translate(0, -100%)
    }

    .welcome_link {
        position absolute
        bottom 10px
        right 10px
        z-index 2
        color #fff
        text-decoration none
        font-size 13px
        span {
            padding 0 3px
            color #3EB4FF
            text-decoration underline
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                isHide: 0,
                src: 'https://eeui.oss-cn-beijing.aliyuncs.com/eeui_preview.mp4'
            }
        },
        mounted() {
            if (typeof this.$route.query['_'] === 'string') {
                this.isHide = -1;
            }else{
                setTimeout(() => { this.isHide = 1; }, 100);
            }
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
        }
    }
</script>