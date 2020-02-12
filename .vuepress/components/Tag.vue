<template>
    <div v-if="show" class="md-badge-new-main"><div v-if="tags" v-for="tag in tags" class="md-badge-value" :style="{backgroundColor:valueBgcolor||'#e7c000'}">{{tag}}</div><div v-if="title" class="md-badge-new" :title="title">新</div></div>
</template>

<style lang="scss" scoped>
    .md-badge-new-main {
        display: inline-block;
        .md-badge-new,
        .md-badge-value {
            display:inline-block;
            font-size:12px;
            height:16px;
            line-height:16px;
            border-radius:3px;
            padding:0 3px;
            color:#ffffff;
            margin:0 3px 0 0;
            font-style: normal;
            transform: scale(0.92, 0.92);
            background-color:#73C33B;
            vertical-align:middle
        }
        .md-badge-value {
            background-color:#e7c000
        }
    }
</style>
<script>
    export default {
        props: ['date','value','valueBgcolor'],
        data() {
            return {
                show: false,
                title: '',
                tags: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                if (this.date) {
                    let reg = /^(\d{4})(\d{2})(\d{2})*/g;
                    let exc = reg.exec(this.date);
                    if (new Date(exc[1] + "/" + exc[2] + "/" + exc[3]).getTime() > new Date().getTime() - 86400000 * 30) {
                        this.show = true;
                        this.title = "更新日期: " + this.date;
                    }
                }
                if (this.value) {
                    if (this.value instanceof Array) {
                        this.tags = this.value;
                    }else{
                        this.tags = [this.value];
                    }
                    this.show = true;
                }
            }
        }
    }
</script>