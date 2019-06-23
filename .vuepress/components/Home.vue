<template>
    <div>

    </div>

</template>

<script>
    export default {
        mounted() {
            let hash = this.$route.hash;
            if (this.leftExists(hash, "#/markets/")) {
                this.$router.push('markets/#/' + hash.substring(10))
            }
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
        }
    }
</script>