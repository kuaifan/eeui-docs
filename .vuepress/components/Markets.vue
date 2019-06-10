<template>
    <div class="eeui-markets">
        <iframe ref="myFrame" src="//console.eeui.app/#/markets" frameborder="0" scrolling="no" class="eeui-frame"></iframe>
    </div>
</template>

<style lang="stylus">
    .eeui-markets {
        width 100%;
        .eeui-frame {
            width 100%;
            height 580px
        }
    }
</style>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            let parent = this.$el.parentNode;
            parent.style.setProperty('max-width', 'none', 'important');
            parent.style.setProperty('padding', '0', 'important');
            parent.nextElementSibling.style.setProperty('display', 'none', 'important');
            window.addEventListener('message', (e) => {
                this.$refs.myFrame && (this.$refs.myFrame.style.height = e.data.height + 'px');
            }, false);
        }
    }
</script>
