<template>
    <div>

    </div>

</template>

<script>
    export default {
        mounted() {
            let hash = this.$route.hash;
            if (this.leftExists(hash, "#/markets/")) {
                this.$router.push("markets/detail.html#" + hash.substring(10))
            }
            setTimeout(_ => {
                $(".footer").html("MIT Licensed | Copyright © 2019-present eeui.app | <a href=\"http://beian.miit.gov.cn/\">桂ICP备2021003642号-3</a>")
            }, 300)
        },
        methods: {
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