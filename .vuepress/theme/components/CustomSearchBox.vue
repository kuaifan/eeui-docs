<template>
    <div class="custom-search-wrapper search-box" @click.stop="">
        <input
           class="search-query"
           v-model="search"
           @focus.stop="focused = true">
        <ul v-if="search !== '' && filterLists.length > 0" :class="['custom-search-result', focused ? 'custom-search-show': '']" :style="{maxHeight: maxHeight + 'px'}">
            <li v-for="(item, index) in filterLists" :key="index" v-if="index < 30">
                <div class="custom-search-title" @click.stop="go(item.url, item.hash, item.plugin === 1)" v-html="searchAccent(item.title, search)"></div>
                <ul class="custom-search-lists">
                    <li v-for="link in item.filterData">
                        <div class="custom-search-subtitle" @click.stop="go(link.url, link.hash, item.plugin === 1)" v-html="searchAccent(link.title, search)"></div>
                        <div class="custom-search-content" @click.stop="go(link.url, link.hash, item.plugin === 1)" v-html="searchAccent(link.content, search)"></div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CustomSearchBox',

        data() {
            return {
                search: '',
                loading: 0,
                focused: false,
                sreachData: [],
                maxHeight: 0,
            }
        },

        mounted() {
            document.addEventListener("click", () => {
                this.focused = false;
            });
            //
            this.maxHeight = Math.round(window.innerHeight * 0.8);
            setInterval(() => {
                this.maxHeight = Math.round(window.innerHeight * 0.8);
            }, 1000);
        },

        watch: {
            focused(val) {
                if (val && this.loading === 0) {
                    this.loading = 1;
                    Promise.all([
                        import('./sreach.json'),
                    ]).then(([data]) => {
                        this.loading = 2;
                        this.sreachData = data.default;
                    })
                }
            }
        },

        computed: {
            filterLists() {
                return this.sreachData.filter(item => {
                    let verifyData = null;
                    if (this.search === "" || item.title.indexOf(this.search) > -1) {
                        verifyData = item.data;
                    }
                    let filterData = [];
                    item.data.forEach((tmp) => {
                        if (tmp.title.indexOf(this.search) > -1 || tmp.content.indexOf(this.search) > -1) {
                            filterData.push(tmp);
                        }
                    });
                    if (filterData.length === 0 && verifyData !== null) {
                        filterData = verifyData;
                    }
                    item.filterData = filterData;
                    return filterData.length > 0;
                });
            },
        },

        methods: {
            searchAccent(content, search) {
                if (!search || content.indexOf(search) === -1) {
                    return this.html2Escape(content);
                }
                let rege = new RegExp(search, "gi");
                let newContent = this.html2Escape(content.replace(rege, "{customSearchAccent}" + search + "{/customSearchAccent}"));
                return newContent.replace(/{customSearchAccent}(.*?){\/customSearchAccent}/g, "<span class='custom-search-accent'>$1</span>");
            },

            html2Escape(sHtml) {
                return sHtml.replace(/[<>&"]/g, function (c) {
                    return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
                });
            },

            go(url, hash, isPlugin) {
                if (!url) {
                    return;
                }
                this.focused = false;
                if (isPlugin === true) {
                    if (hash) {
                        url+= "#" + hash;
                    }
                    this.$router.push(url);
                    return;
                }
                this.$router.push(url);
                if (hash) {
                    let interNum = 0;
                    let interVal = setInterval(() => {
                        if (interNum > 30 || this.$route.hash === hash || this.$route.hash === "#" + hash) {
                            clearInterval(interVal);
                            return;
                        }
                        this.$router.push({ hash: hash });
                        interNum++;
                    }, 100);
                }
            }
        },
    }
</script>

<style lang="stylus">
    .custom-search-result {
        display none
        background #fff
        width 36rem
        position absolute
        top 1.5rem
        border 1px solid darken($borderColor, 10%)
        border-radius 6px
        padding 0.4rem
        list-style-type none
        box-sizing border-box
        overflow auto
        .custom-search-accent {
            display inline-block
            font-style normal
            font-weight 600
            color $accentColor
            background rgba(143, 187, 237, .1)
            padding 0.1em .05em
            box-sizing border-box
        }
        > li {
            list-style-type none
            padding 0
            margin 0

            .custom-search-title {
                display block
                background $accentColor
                color #ffffff
                font-weight bold
                font-size 1rem
                padding 0.4rem
                line-height normal
                opacity 1
                cursor pointer
                .custom-search-accent {
                    color #ffffff
                    background #AEE2FF
                }
            }
            .custom-search-title:hover {
                opacity 0.9
            }

            ul.custom-search-lists {
                list-style-type none
                padding 0
                margin 0 0 5px 0

                > li {
                    list-style-type none
                    padding 0
                    margin 0
                    display table
                    width 100%
                    border-bottom 1px solid #e4e4e4

                    > div {
                        display table-cell
                        padding 0.32rem 0.4rem
                        color $textColor
                        word-wrap break-word
                        word-break break-all
                        white-space normal
                        cursor pointer
                    }

                    > div:hover {
                        background rgba(143, 187, 237, .1)
                    }

                    .custom-search-subtitle {
                        width 10rem
                        background #f1f3f5;
                        text-align right
                        border-right 1px solid #e4e4e4
                    }

                    .custom-search-content {
                        word-wrap break-word
                        word-break break-all
                        white-space normal
                    }
                }

                > li:last-child {
                    border-bottom-width 0
                    margin-bottom -5px
                }
            }
        }
    }
    .custom-search-result.custom-search-show {
        display block
    }

    .custom-search-wrapper
        & > span
            vertical-align middle

        .custom-autocomplete
            line-height normal

            .ds-dropdown-menu
                background-color #fff
                border 1px solid #999
                border-radius 4px
                font-size 16px
                margin 6px 0 0
                padding 4px
                text-align left

                &:before
                    border-color #999

                [class*=ds-dataset-]
                    border none
                    padding 0

                .ds-suggestions
                    margin-top 0

                .ds-suggestion
                    border-bottom 1px solid $borderColor

            .custom-docsearch-suggestion--highlight
                color #2c815b

            .custom-docsearch-suggestion
                border-color $borderColor
                padding 0

                .custom-docsearch-suggestion--category-header
                    padding 5px 10px
                    margin-top 0
                    background $accentColor
                    color #fff
                    font-weight 600

                    .custom-docsearch-suggestion--highlight
                        background rgba(255, 255, 255, 0.6)

                .custom-docsearch-suggestion--wrapper
                    padding 0

                .custom-docsearch-suggestion--title
                    font-weight 600
                    margin-bottom 0
                    color $textColor

                .custom-docsearch-suggestion--subcategory-column
                    vertical-align top
                    padding 5px 7px 5px 5px
                    border-color $borderColor
                    background #f1f3f5

                    &:after
                        display none

                .custom-docsearch-suggestion--subcategory-column-text
                    color #555

            .custom-docsearch-footer
                border-color $borderColor

            .ds-cursor .custom-docsearch-suggestion--content
                background-color #e7edf3 !important
                color $textColor

    @media (min-width: $MQMobile)
        .custom-search-wrapper
            .custom-autocomplete
                .custom-docsearch-suggestion
                    .custom-docsearch-suggestion--subcategory-column
                        float none
                        width 150px
                        min-width 150px
                        display table-cell

                    .custom-docsearch-suggestion--content
                        float none
                        display table-cell
                        width 100%
                        vertical-align top

                    .ds-dropdown-menu
                        min-width 515px !important

    @media (max-width: $MQMobile)
        .custom-search-result {
            position: fixed;
            left: 3%;
            top: 3.6rem;
            width: 94%;
            margin: -6px 0 0 0;
            z-index: 999;
        }
        .custom-search-wrapper
            .ds-dropdown-menu
                min-width calc(100vw - 4rem) !important
                max-width calc(100vw - 4rem) !important

            .custom-docsearch-suggestion--wrapper
                padding 5px 7px 5px 5px !important

            .custom-docsearch-suggestion--subcategory-column
                padding 0 !important
                background white !important

            .custom-docsearch-suggestion--subcategory-column-text:after
                content " > "
                font-size 10px
                line-height 14.4px
                display inline-block
                width 5px
                margin -3px 3px 0
                vertical-align middle

</style>
