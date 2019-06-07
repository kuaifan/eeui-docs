<template>
    <div :class="['md-badge-new', show ? 'md-badge-show' : '']">新</div>
</template>

<style lang="stylus">
    .md-badge-new {
        display:inline-block;
        font-size:12px;
        height:16px;
        line-height:16px;
        border-radius:3px;
        padding:0 3px;
        color:#ffffff;
        margin:0 5px 0 0;
        font-style: normal;
        transform: scale(0.92, 0.92);
        background-color:#73C33B;
        vertical-align:middle
    }
</style>
<script>
    export default {
        props: ['date'],
        data() {
            return {
                show: false,
            }
        },
        mounted() {
            let reg = /^(\d{4})(\d{2})(\d{2})*/g;
            let exc = reg.exec(this.date);
            if (new Date(exc[1] + "-" + exc[2] + "-" + exc[3]).getTime() > new Date().getTime() - 86400000 * 30) {
                this.show = true;
            }
        }
    }
</script>