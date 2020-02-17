<template>
    <div class="markets-main">

        <v-progress ref="myLoading" style="top:3.6rem"/>

        <div class="markets-body">

            <div class="markets-menu">

                <div class="markets-menu-box">
                    <div class="markets-search">
                        <div class="markets-search-box">
                            <input type="text" v-model="key" placeholder="搜索插件" @keydown.enter="search"/>
                            <em v-if="key" @click="delKey"><svg t="1581495858176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3362" width="18" height="18"><path d="M265.28 310.72a32 32 0 0 1 45.44-45.44l448 448a32 32 0 0 1-45.44 45.44z" p-id="3363" fill="#777777"></path><path d="M713.28 265.28a32 32 0 0 1 45.44 45.44l-448 448a32 32 0 0 1-45.44-45.44z" p-id="3364" fill="#777777"></path></svg></em>
                        </div>
                    </div>

                    <div class="markets-type">
                        <div :class="[type === 'all' ? 'active' : '', 'markets-type-all']" @click="setType('all')">全部</div>
                        <div :class="[type === 'official' ? 'active' : '', 'markets-type-official']" @click="setType('official')">官方发布</div>
                        <div v-for="(item, index) in pluginsTypes" :key="index" :class="[type===item.name ? 'active' : '', 'markets-type-' + item.name]" @click="setType(item.name)">{{item.title}}</div>
                    </div>
                </div>

            </div>

            <div class="markets-list">

                <div class="markets-title">
                    <h2>EEUI.APP 插件市场</h2>&nbsp;
                    <Tag class="tag" value="2.x"/>
                    <div class="empty"></div>
                    <div class="tlink" @click="oldmarkets">1.x 插件市场</div>
                    <div class="tlink" @click="opendoc">开发文档</div>
                </div>

                <ul class="markets-ul">
                    <li v-for="(item, index) in lists" :key="index">
                        <div class="plugin-name">
                            <div class="name">
                                <span @click="detail(item)">{{item.username}}/{{item.name}}</span>
                                <div v-if="item.userid === 1" class="official">官方</div>
                            </div>
                        </div>
                        <div class="plugin-desc"><span>{{item.desc}}</span></div>
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
                <div class="error" v-if="loadError">{{loadError}}</div>
                <div class="page" v-else-if="lists.length > 0 && listTotal > 10"><Page :current="listPage" :total="listTotal" @on-change="setPage"></Page></div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .markets-main {
        position: relative;
        background-color: #ffffff;
    }

    .markets-body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        display: flex;
        margin: 0 auto;
        padding: 0;
        color: #232f40;
        font-size: 14px;
        line-height: 1.5;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;

        * {
            box-sizing: border-box;
        }

        .markets-menu {
            width: 260px;

            .markets-menu-box {
                padding-right: 32px;

                .markets-search {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    .markets-search-box {
                        position: relative;
                        width: 100%;
                        input {
                            appearance: none;
                            -webkit-appearance: none;
                            width: 100%;
                            font-size: 14px;
                            padding: 2px 32px;
                            height: 38px;
                            line-height: 38px;
                            border: 1px solid #dcdee2;
                            border-radius: 4px;
                            color: #515a6e;
                            background-color: #fff;
                            background-image: none;
                            position: relative;
                            cursor: text;
                            outline: none;
                        }
                        &:before {
                            content: ' ';
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 36px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: url("./images/sreach.png") no-repeat center;
                            background-size: 16px;
                            cursor: pointer;
                            z-index: 1;
                        }
                        em {
                            position: absolute;
                            top: 0;
                            right: 0;
                            height: 100%;
                            width: 36px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            z-index: 1;
                        }
                    }
                }

                .markets-type {
                    display: block;
                    align-items: center;
                    justify-content: center;
                    margin: 28px auto;
                    > div {
                        display: block;
                        transition: all .2s ease-in-out;
                        cursor: pointer;
                        border-top: 1px solid #e8e8e8;
                        border-right: 1px solid #e8e8e8;
                        border-left: 1px solid #e8e8e8;
                        color: #555;
                        background: #fff;
                        position: relative;
                        margin: 0;
                        padding: 0 15px;
                        height: 38px;
                        line-height: 36px;
                        font-size: 14px;
                        white-space: nowrap;
                        &.markets-type-official {
                            font-weight: 500;
                        }
                        &:first-child {
                            border-radius: 3px 3px 0 0;
                        }
                        &:last-child {
                            border-radius: 0 0 3px 3px;
                            border-bottom: 1px solid #e8e8e8;
                        }
                        &:hover {
                            color: #5FB4F9;
                        }
                        &.active {
                            color: #5FB4F9;
                            border-left-color: #5FB4F9;
                            font-weight: 500;
                        }
                    }
                }
            }
        }

        .markets-list {
            flex: 1;

            .markets-title {
                position: relative;
                display: flex;
                align-items: center;
                padding-bottom: 16px;
                border-bottom: 1px solid #e1e4e8;
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    border: 0;
                    margin: 0;
                    padding: 0;
                }
                .tag {
                    margin-left: 6px;
                }
                .empty {
                    flex: 1;
                }
                .tlink {
                    margin-left: 12px;
                    padding-right: 6px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 500;
                    color: #3eb4ff;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }


            ul.markets-ul {
                display: block;
                margin: 0;
                padding: 6px 0 0 0;
                > li {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;
                    width: 100%;
                    margin: 26px 0 0;
                    padding-bottom: 22px;
                    border-bottom: 1px solid #f0f0f0;
                    background-color: #fff;
                    text-align: left;
                    transition: all .2s ease-in-out;
                    .plugin-name {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 0.75rem;
                        .name {
                            display: flex;
                            align-items: center;
                            color: #666;
                            font-size: 18px;
                            font-weight: 500;
                            width: 100%;
                            span {
                                margin-right: 6px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                cursor: pointer;
                                color: #3eb4ff;
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                            .official{
                                font-weight: 400;
                                color: #586069;
                                background-color: initial;
                                border: 1px solid rgba(27,31,35,.15);
                                box-shadow: none;

                                height: 20px;
                                line-height: 18px;
                                margin: 2px 2px 2px 0;
                                padding: 0 5px;
                                border-radius: 3px;
                                font-size: 12px;
                                overflow: hidden;
                            }
                        }
                    }
                    .plugin-desc {
                        color: #3c4043;
                        width: 100%;
                        max-height: 66px;
                        line-height: 22px;
                        word-break: break-all;
                        overflow: hidden;
                        position: relative;
                        margin-bottom: 10px;
                        &:after {
                            content: '';
                            width: 60px;
                            height: 20px;
                            background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
                            background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0),#fff);
                            position: absolute;
                            bottom: 0;
                            right: 0;
                        }
                    }
                    .plugin-bottom {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        color: #5f6368;
                        .rate {
                            display: flex;
                            align-items: center;
                            em {
                                width: 16px;
                                height: 16px;
                                svg {
                                    fill: #5f6368;
                                }
                            }
                        }
                        .install {
                            margin-left: 5px;
                            line-height: normal;
                        }
                        .android,
                        .ios {
                            margin-left: 14px;
                            padding-left: 14px;
                            position: relative;
                            line-height: normal;
                            font-size: 13px;
                            color: #666;
                            &:before {
                                position: absolute;
                                content: " ";
                                top: 50%;
                                left: 0;
                                transform: translate(0, -50%);
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #AFBF5B;
                            }
                        }
                        .ios {
                            &:before {
                                background: #818694;
                            }
                        }
                        .tags {
                            margin-left: 14px;
                            flex: 1;
                            height: 23px;
                            overflow: hidden;
                            div {
                                margin: 0;
                                padding: 2px 12px 0 0;
                                display: inline-block;
                                position: relative;
                                vertical-align: top;
                                line-height: normal;
                                font-size: 13px;
                                color: #666;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                &:after {
                                    position: absolute;
                                    content: "、";
                                    top: 0;
                                    right: 0;
                                    width: 12px;
                                    overflow: hidden;
                                }
                                &:last-child {
                                    padding-right: 0;
                                    &:after {
                                        content: '';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .error {
            color: #777;
            padding: 18px 0 0;
        }

        .page {
            margin-top: 24px;
            .ivu-page {
                padding-left: 0;
            }
        }
    }
</style>
<script>
    import { each, pluginsTypes } from "./js/common";
    import { Page } from 'iview';
    import axios from 'axios'
    import VProgress from "./Progress";
    import Tag from "./Tag";
    import "./css/ivu-icon.scss"
    import "./css/ivu-page.scss"

    export default {
        components: {Tag, VProgress, Page},
        data() {
            return {
                pluginsTypes: pluginsTypes(),

                key: '',
                type: 'all',

                loadIng: 0,
                loadError: '',
                lists: [],
                listPage: 1,
                listTotal: 0,
            }
        },
        mounted() {
            this.load();
        },
        watch: {
            '$route' () {
                this.load();
            }
        },
        methods: {
            delKey() {
                this.key = "";
                //
                let query = this.$route.query || {};
                let key = query.key || '';
                if (key !== '') {
                    this.search();
                }
            },
            search() {
                this.listPage = 1;
                this.type = 'all';
                this.loadQuery();
            },
            setType(type) {
                this.listPage = 1;
                this.type = type;
                this.key = '';
                this.loadQuery();
            },
            setPage(page) {
                this.listPage = page;
                this.loadQuery();
            },
            loadQuery() {
                let query = {
                    page: this.listPage
                };
                if (this.key) {
                    query.key = this.key;
                }
                if (this.type) {
                    query.type = this.type;
                }
                this.$router.push({ query: query });
            },
            load() {
                let query = this.$route.query || {};
                this.key = query.key || '';
                this.type = query.type || 'all';
                this.listPage = Math.max(parseInt(query.page) || 1, 1);
                //
                this.loadError = '';
                let timeOut = setTimeout(() => { this.$refs.myLoading.start(); }, 50);
                //
                this.loadIng++;
                axios.get('https://console.eeui.app/api/plugins/client?__Access-Control-Allow-Origin=1', {
                    params : {
                        where: {
                            name: this.key,
                            type: this.type
                        },
                        page: Math.max(this.listPage, 1),
                        pagesize: 10,
                    }
                }).then((response) => {
                    clearInterval(timeOut);
                    this.$refs.myLoading.end();
                    this.loadIng--;
                    //
                    if (response.status !== 200) {
                        this.lists = [];
                        this.listPage = 1;
                        this.loadError = "网络繁忙，请稍后再试......";
                        return;
                    }
                    let res = response.data;
                    if (res.ret === 1) {
                        this.lists = res.data.lists;
                        this.listTotal = res.data.total;
                    } else {
                        this.lists = [];
                        this.listTotal = 0;
                        this.loadError = res.msg;
                    }
                })
            },
            detail(item) {
                this.$router.push({path: item.username + "/" + item.name})
            },
            oldmarkets() {
                this.$router.push({path: '1x'})
            },
            opendoc() {
                this.$router.push({path: '../plugin/dev/create.html'})
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
        }
    }
</script>
