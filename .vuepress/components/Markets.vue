<template>
    <div class="eeui-markets">
        <div ref="myLoading" class="eeui-loading" :class="'eeui-loading-' + loading"></div>
        <iframe v-if="frameUrl" ref="myFrame" class="eeui-frame" :src="frameUrl" frameborder="0" scrolling="no" @load="loadFinish" :style="{height:height + 'px'}"></iframe>
    </div>
</template>

<style lang="stylus">
    .eeui-markets {
        width 100%
        position relative
        .eeui-frame {
            width 100%
            border 0
        }
        .eeui-loading {
            position absolute
            top 0
            left 0
            width 0
            height 2px
            opacity 1
            background-color #3fcc25
            transition all 5s ease-in-out
            &.eeui-loading-start {
                width 90%
            }
            &.eeui-loading-end {
                width 100%
                transition all .3s ease-in-out
            }
            &.eeui-loading-finish {
                opacity 0
                width 100%
                transition all .1s ease-in-out
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                height: 580,
                loading: '',
                frameUrl: ''
            }
        },
        mounted() {
            let hash = this.storage("markets");
            if (this.leftExists(hash, "to:")) {
                this.storage("markets", "");
                this.frameUrl = '//console.eeui.app/#/markets/' + hash.substring(3);
            }else{
                this.frameUrl = '//console.eeui.app/#/markets';
            }
            //
            let parent = this.$el.parentNode;
            parent.style.setProperty('max-width', 'none', 'important');
            parent.style.setProperty('padding', '0', 'important');
            parent.nextElementSibling.style.setProperty('display', 'none', 'important');
            //
            setTimeout(() => {
                if (this.loading === '') {
                    this.loading = 'start';
                }
            }, 100);
            //
            window.addEventListener('message', (e) => {
                switch (e.data.status) {
                    case 'height':
                        this.height = e.data.height;
                        break;
                    case 'complete':
                        this.loadFinish();
                        break;
                    case 'scrollTop':
                        window.scrollTo(0, e.data.top);
                        break;
                }
            }, false);
        },
        methods: {
            loadFinish() {
                if (this.loading === 'start') {
                    this.$refs.myLoading.addEventListener("transitionend", (e) => {
                        setTimeout(() => { this.loading = 'finish'; }, 100);
                    }, false);
                    setTimeout(() => { this.loading = 'finish'; }, 1000);
                    this.loading = 'end';
                }
            },
            leftExists(string, find, lower) {
                string += "";
                find += "";
                if (lower !== true) {
                    string = string.toLowerCase();
                    find = find.toLowerCase();
                }
                return (string.substring(0, find.length) === find);
            },
            storage(key, value) {
                if (typeof value === 'undefined') {
                    return this.loadFromlLocal('__:proxy', key, '', '__storage__');
                }else{
                    this.savaToLocal('__:proxy', key, value, '__storage__');
                }
            },
            savaToLocal(id, key, value, keyName) {
                try {
                    if (typeof keyName === 'undefined') keyName = '__seller__';
                    let seller = window.localStorage[keyName];
                    if (!seller) {
                        seller = {};
                        seller[id] = {};
                    } else {
                        seller = JSON.parse(seller);
                        if (!seller[id]) {
                            seller[id] = {};
                        }
                    }
                    seller[id][key] = value;
                    window.localStorage[keyName] = JSON.stringify(seller);
                } catch(e) { }
            },
            loadFromlLocal(id, key, def, keyName) {
                if (typeof keyName === 'undefined') keyName = '__seller__';
                let seller = window.localStorage[keyName];
                if (!seller) {
                    return def;
                }
                seller = JSON.parse(seller)[id];
                if (!seller) {
                    return def;
                }
                let ret = seller[key];
                return ret || def;
            },
        }
    }
</script>
