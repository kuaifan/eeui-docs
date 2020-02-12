<template>
    <div ref="myLoading" class="eeui-loading" :class="'eeui-loading-' + loadIng"></div>
</template>

<style lang="scss" scoped>
    .eeui-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        z-index: 99;
        opacity: 1;
        background-color: #3fcc25;
        transition: all 5s ease-in-out;
        &.eeui-loading-start {
            width: 90%;
        }
        &.eeui-loading-end {
            width: 100%;
            transition: all .3s ease-in-out;
        }
        &.eeui-loading-finish {
            width: 0;
            transition: none;
        }
    }
</style>
<script>
    export default {
        name: "VProgress",
        data() {
            return {
                rand: '',
                loadIng: '',
            }
        },
        methods: {
            start() {
                let temp = Math.random();
                this.rand = temp;
                setTimeout(() => {
                    if (this.rand === temp) {
                        this.loadIng = 'start';
                    }
                }, 10);
            },

            finish() {
                setTimeout(() => {
                    if (this.loadIng === 'start') {
                        this.loadIng = 'end';
                        setTimeout(() => {
                            if (this.loadIng === 'end') {
                                this.loadIng = 'finish';
                            }
                        }, 300);
                    }
                }, 10);
            },

            end() {
                this.finish();
            },
        }
    }
</script>