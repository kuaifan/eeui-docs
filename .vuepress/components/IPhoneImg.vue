<template>
    <div class="iPhone-wrapper">
        <div class="iPhone-img">
            <img class="iPhone-imga" src="./images/iPhone.svg" />
            <img class="iPhone-imgb" :src="imgSrc">
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .iPhone-wrapper {
        position: relative;
        height: 640px;
        .iPhone-img {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width 312px;
            height 640px;
            .iPhone-imga {
                width 100%;
                height 100%;
            }
            .iPhone-imgb {
                position: absolute;
                top: 68px;
                left: 14px;
                width: 282px;
            }
        }
    }
</style>
<script>
    export default {
        props: {
            imgSrc: {
                type: String,
            },
        },
    }
</script>