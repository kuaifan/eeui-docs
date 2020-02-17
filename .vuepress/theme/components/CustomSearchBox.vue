<template>
    <div class="custom-search-wrapper search-box" @click.stop="">
        <input
           class="search-query"
           v-model="search"
           @focus.stop="focused = true">
        <div v-if="search !== ''" :class="['custom-search-result', focused ? 'custom-search-show': '']">
            <Tabs v-model="tabActive" :animated="false">
                <TabPane label="搜索文档" name="docs">
                    <ul v-if="filterLists.length > 0" class="custom-search-docs" :style="{maxHeight: maxHeight + 'px'}">
                        <li v-for="(item, index) in filterLists" :key="index" v-if="index < 30">
                            <div class="custom-search-title" @click.stop="go(item.url, item.hash)" v-html="searchAccent(item.title, search)"></div>
                            <ul class="custom-search-lists">
                                <li v-for="link in item.filterData">
                                    <div class="custom-search-subtitle" @click.stop="go(link.url, link.hash)" v-html="searchAccent(link.title, search)"></div>
                                    <div class="custom-search-content" @click.stop="go(link.url, link.hash)" v-html="searchAccent(link.content, search)"></div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div v-else class="custom-search-tis">未搜索到任何与“{{search}}”相关的文档！</div>
                </TabPane>
                <TabPane label="搜索插件" name="markets">
                    <ul v-if="marketsData.length > 0" class="custom-markets-ul" :style="{maxHeight: maxHeight + 'px'}">
                        <li v-for="(item, index) in marketsData" :key="index">
                            <div class="plugin-name">
                                <div class="name">
                                    <span @click="goMarkets(item)" v-html="`${item.username}/${searchAccent(item.name, marketsSearch)}`"></span>
                                    <div v-if="item.userid === 1" class="official">官方</div>
                                </div>
                            </div>
                            <div class="plugin-desc"><span v-html="searchAccent(item.desc, marketsSearch)"></span></div>
                            <div class="plugin-bottom">
                                <div class="rate">
                                    <em v-for="i in 5" :key="i"><svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></em>
                                </div>
                                <div v-if="item.install > 5" class="install">{{item.install}}</div>
                                <div v-if="item.android === 1" class="android">Android</div>
                                <div v-if="item.ios === 1" class="ios">iOS</div>
                                <div class="tags">
                                    <div v-for="tag in item.types">{{tagTitle(tag)}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-else-if="marketsLoading" class="custom-search-tis">正在搜索，请稍候....</div>
                    <div v-else-if="marketsError" class="custom-search-tis">{{marketsError}}</div>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    import { Tabs, TabPane } from 'iview';
    import "../../components/css/ivu-tabs.scss";
    import {each, pluginsTypes} from "../../components/js/common";

    export default {
        name: 'CustomSearchBox',
        components: {Tabs, TabPane},

        data() {
            return {
                loading: 0,
                focused: false,
                maxHeight: 0,

                tabActive: 'docs',

                search: '',
                sreachData: [],

                marketsLoading: false,
                marketsSearch: '',
                marketsError: '',
                marketsHistory: {},
                marketsData: []
            }
        },

        mounted() {
            document.addEventListener("click", () => {
                this.focused = false;
            });
            //
            this.maxHeight = Math.round(window.innerHeight * 0.8) - 30;
            setInterval(() => {
                if (this.focused) {
                    this.maxHeight = Math.round(window.innerHeight * 0.8) - 30;
                }
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
                    });
                }
            },
            search(val) {
                this.search = val.replace(/\s+/g,"");
                this.searchMarkets();
            },
            tabActive() {
                this.searchMarkets();
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
            searchMarkets() {
                if (this.tabActive !== 'markets') {
                    return;
                }
                if (this.marketsSearch !== this.search) {
                    this.marketsLoading = true;
                    this.marketsData = [];
                    this.marketsError = '';
                    this.marketsSearch = this.search;
                    if (typeof this.marketsHistory[this.marketsSearch] === 'object') {
                        this.marketsLoading = false;
                        let result = this.marketsHistory[this.marketsSearch];
                        if (result.ret === 1) {
                            this.marketsData = result.data.lists;
                        } else {
                            this.marketsError = result.msg;
                        }
                        return;
                    }
                    //
                    let tempKey = this.marketsSearch;
                    setTimeout(() => {
                        if (tempKey !== this.marketsSearch) {
                            return;
                        }
                        $.ajax({
                            url: "https://console.eeui.app/api/plugins/client?__Access-Control-Allow-Origin=1",
                            data: {
                                where: {
                                    name: tempKey
                                },
                                page: 1,
                                pagesize: 30,
                            },
                            success: (result) => {
                                this.marketsLoading = false;
                                this.marketsHistory[this.marketsSearch] = result;
                                if (tempKey !== this.marketsSearch) {
                                    return;
                                }
                                if (result.ret === 1) {
                                    this.marketsData = result.data.lists;
                                } else {
                                    this.marketsError = result.msg;
                                }
                            }
                        });
                    }, 600);
                }
            },

            searchAccent(content, search) {
                if (!content || !search) {
                    return this.html2Escape(content);
                }
                let rege = new RegExp(search, "gi");
                let newContent = this.html2Escape(content.replace(rege, (word) => {
                    return "{customSearchAccent}" + word + "{/customSearchAccent}";
                }));
                return newContent.replace(/{customSearchAccent}(.*?){\/customSearchAccent}/g, "<span class='custom-search-accent'>$1</span>");
            },

            html2Escape(sHtml) {
                return sHtml.replace(/[<>&"]/g, function (c) {
                    return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
                });
            },

            tagTitle(name) {
                let lists = pluginsTypes();
                let title = '';
                each(lists, (key, info) => {
                    if (info.name === name) {
                        title = info.title;
                    }
                });
                return title;
            },

            go(url, hash) {
                if (!url) {
                    return;
                }
                this.focused = false;
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
            },

            goMarkets(item) {
                this.focused = false;
                this.$router.push({path: this.$localePath + "markets/" + item.username + "/" + item.name})
            }
        },
    }
</script>

<style lang="stylus">
    .custom-search-result
        display none
        background #fff
        width 36rem
        position absolute
        top 2.5rem
        border 1px solid darken($borderColor, 10%)
        border-radius 6px
        padding 0.4rem 0.6rem 0.6rem
        list-style-type none
        box-sizing border-box
        z-index 1
        .custom-search-accent
            display inline-block
            font-style normal
            font-weight 600
            color $accentColor
            background rgba(143, 187, 237, .1)
            padding 0.1em .05em
            box-sizing border-box
        .ivu-tabs-bar
            margin-bottom 0
            .ivu-tabs-nav-prev,
            .ivu-tabs-nav-next
                display none
            .ivu-tabs-nav
                .ivu-tabs-tab
                    font-size 15px
                    padding 5px 16px 11px
                .ivu-tabs-tab-active
                    color #3eb4ff
                    font-weight 500
                .ivu-tabs-ink-bar
                    background-color #3eb4ff
        .custom-search-docs
            padding 0
            margin 0
            overflow auto
            transform rotateZ(0deg)
            > li
                list-style-type none
                padding 0
                margin 0
                &:first-child
                    margin-top 0.6rem
                .custom-search-title
                    display block
                    background $accentColor
                    color #ffffff
                    font-weight bold
                    font-size 1rem
                    padding 0.4rem
                    line-height normal
                    opacity 1
                    cursor pointer
                    .custom-search-accent
                        color #ffffff
                        background #AEE2FF
                .custom-search-title:hover
                    opacity 0.9
                ul.custom-search-lists
                    list-style-type none
                    padding 0
                    margin 0 0 5px 0
                    > li
                        list-style-type none
                        padding 0
                        margin 0
                        display table
                        width 100%
                        border-bottom 1px solid #e4e4e4
                        > div
                            display table-cell
                            padding 0.32rem 0.4rem
                            color $textColor
                            word-wrap break-word
                            word-break break-all
                            white-space normal
                            cursor pointer
                        > div:hover
                            background rgba(143, 187, 237, .1)
                        .custom-search-subtitle
                            width 10rem
                            background #f1f3f5;
                            text-align right
                            border-right 1px solid #e4e4e4
                        .custom-search-content
                            word-wrap break-word
                            word-break break-all
                            white-space normal
                    > li:last-child
                        border-bottom-width 0
                        margin-bottom -5px
        .custom-markets-ul
            display block
            margin 0
            padding 12px 0 0 0
            overflow auto
            transform rotateZ(0deg)
            > li
                display flex
                flex-wrap wrap
                align-content space-between
                width 100%
                margin 26px 0 0
                padding-bottom 22px
                border-bottom 1px solid #f0f0f0
                background-color #fff
                text-align left
                transition all .2s ease-in-out
                &:first-child
                    margin-top 4px
                .custom-search-accent
                    display inline-block !important
                    font-style normal !important
                    font-weight 600 !important
                    color #3eb4ff !important
                    background rgba(143,187,237,0.1) !important
                    padding 0 !important
                    margin 0 !important
                    box-sizing border-box !important
                    white-space normal !important
                    overflow initial !important
                    text-overflow initial !important
                    cursor inherit !important
                .plugin-name
                    display flex
                    align-items center
                    width 100%
                    margin-bottom 0.75rem
                    .custom-search-accent
                        color #fff  !important
                        background rgba(62, 180, 255, 0.8) !important
                    .name
                        display flex
                        align-items center
                        color #666
                        font-size 18px
                        font-weight 500
                        width 100%
                        span
                            margin-right 6px
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                            cursor pointer
                            color #3eb4ff
                            &:hover
                                text-decoration underline
                        .official
                            font-weight 400
                            color #586069
                            background-color initial
                            border 1px solid rgba(27,31,35,.15)
                            box-shadow none
                            height 20px
                            line-height 18px
                            margin 2px 2px 2px 0
                            padding 0 5px
                            border-radius 3px
                            font-size 12px
                            overflow hidden
                .plugin-desc
                    color #3c4043
                    width 100%
                    max-height 66px
                    line-height 22px
                    word-break break-all
                    overflow hidden
                    position relative
                    margin-bottom 10px
                    &:after
                        content ''
                        width 60px
                        height 20px
                        background linear-gradient(to right, rgba(255, 255, 255, 0), #fff)
                        background -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0),#fff)
                        position absolute
                        bottom 0
                        right 0
                .plugin-bottom
                    display flex
                    justify-content space-between
                    align-items center
                    width 100%
                    color #5f6368
                    .rate
                        display flex
                        align-items center
                        em
                            width 16px
                            height 16px
                            svg
                                fill #5f6368
                    .install
                        margin-left 5px
                        line-height normal
                    .android,
                    .ios
                        margin-left 14px
                        padding-left 14px
                        position relative
                        line-height normal
                        font-size 13px
                        color #666
                        &:before
                            position absolute
                            content " "
                            top 50%
                            left 0
                            transform translate(0, -50%)
                            width 12px
                            height 12px
                            border-radius 50%
                            background #AFBF5B
                    .ios
                        &:before
                            background #818694
                    .tags
                        margin-left 14px
                        flex 1
                        height 23px
                        overflow hidden
                        div
                            margin 0
                            padding 2px 12px 0 0
                            display inline-block
                            position relative
                            vertical-align top
                            line-height normal
                            font-size 13px
                            color #666
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                            &:after
                                position absolute
                                content "、"
                                top 0
                                right 0
                                width 12px
                                overflow hidden
                            &:last-child
                                padding-right 0
                                &:after
                                    content ''
        .custom-search-tis
            text-align center
            color #666
            padding 24px
    .custom-search-result.custom-search-show
        display block
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
        .custom-search-result
            position fixed
            left 3%
            top 4.6rem
            width 94%
            margin -6px 0 0 0
            z-index 999
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
    @media (max-width: 1012px)
        .search-box
            input
                cursor pointer
                width 0
                border-color transparent
                position relative
</style>
