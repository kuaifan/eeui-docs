<template>
    <div class="markets-main">

        <div ref="myLoading" class="eeui-loading" :class="'eeui-loading-' + loadIng"></div>

        <div class="markets-body">

            <div class="title">EEUI.APP 插件市场</div>

            <div class="search">
                <input type="text" v-model="key" placeholder="搜索插件" @keydown.enter="search"/>
                <em @click="search"></em>
            </div>

            <div class="type">
                <div :class="[type==='all' ? 'active' : '']" @click="type='all'">　全部　</div>
                <div v-for="(item, index) in pluginsTypes" :key="index" :class="[type===item.name ? 'active' : '']" @click="type=item.name">{{item.title}}</div>
            </div>

            <div class="lists">
                <div v-for="(item, index) in lists" class="item" :key="index" @click="detail(item.name)">
                    <div class="card-title">
                        <div class="name">
                            <span>{{item.title}} | {{item.name}}</span>
                            <div v-if="item.android === 1" class="logo-android"></div>
                            <div v-if="item.ios === 1" class="logo-apple"></div>
                        </div>
                    </div>
                    <div class="up">
                        <div class="author">
                            <img :src="item.userimg"/>
                            <span>{{item.username}}</span>
                            <div v-if="item.userid === 1" class="volcano">官方</div>
                            <div v-else class="purple">开发者</div>
                        </div>
                        <!--<div class="installcount">
                            <div class="download-outline"></div><span>{{item.install}}</span>
                        </div>-->
                    </div>
                    <div class="desc"><span>{{item.desc}}</span></div>
                    <div class="low">
                        <div class="rate">
                            <em v-for="i in 5" :key="i"></em>
                        </div>
                        <button class="install">安装</button>
                    </div>
                </div>
            </div>
            <button v-if="nextPage > 1" @click="load" class="more">点击加载更多...</button>
            <div class="error" v-else-if="loadError">{{loadError}}</div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .markets-main {
        position: relative;
        background-color: #ffffff;
    }

    .eeui-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
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
            opacity: 0;
            width: 100%;
            transition: all .1s ease-in-out;
        }
    }

    .markets-body {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        font-family: PingFang SC, Helvetica Neue, Hiragino Sans GB, Segoe UI, Microsoft YaHei, 微软雅黑, sans-serif;
        color: #232f40;
        padding: 50px 0;
        box-sizing: border-box;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        line-height: 1.5;

        * {
            box-sizing: border-box;
        }

        .title {
            text-align: center;
            font-size: 38px;
            font-weight: 500;
        }

        .search {
            position: relative;
            margin: 32px auto 0;
            width: 380px;
            input {
                appearance: none;
                -webkit-appearance: none;
                width: 100%;
                font-size: 14px;
                padding: 6px 36px 6px 7px;
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
            em {
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-size: 16px;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACAhpWAhZWAhpSAhZSAgI+AhpWAh5eAhZWAhZWAhpWAhpSAhpSAh5OAhZWAhpaAhpVgr1AcAAAAEHRSTlMAwGCg8BCAILAw4NBwQJBQa7gVNwAAAT9JREFUSMftVUuWxCAIRPzG+Lv/aWeM4/RTxHR63bWMFFUIGJgQjUnCmHDAG9Doyj+UzHfxQZURHnfh2RcKwTszfxEh6mouprMZQ8Z9M580vGDbN7MkiHrk7Hxjl0oCisSk0rIeUFc4fCap1DHnqdcZYI2q4RffJNvMk6jbqqqBgyUSkhawP/fEJJVw8MIxXDXXpGkm4n4ofyMy5e89mYEgYI+RoN4gDCF816gJSqfoJp7W4AaC38frWvTYebsl4DgbmZltNqW+rVpNpt3NbOC8vkgk6D5aMo2ZJRja2UgWfdJXVWCu4lwv6dEfCLro50ojqnrC5FF5tToVuGTQtzKKUnhGe6wl9lJsaOFCMgzd0wmRTBIXv3WMY0D2zP+EZQCeQ7jrA8MzwKK7rCkhc6+GMHh8GZ8yFDxkeHiEIO0P26AbJrtO6I4AAAAASUVORK5CYII=");
                cursor: pointer;
            }
        }

        .type {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 38px auto;
            > div {
                transition: all .2s ease-in-out;
                cursor: pointer;
                border: 1px solid #dcdee2;
                border-left: 0;
                background: #fff;
                position: relative;
                margin: 0;
                padding: 0 15px;
                height: 36px;
                line-height: 33px;
                font-size: 14px;
                white-space: nowrap;
                &:first-child {
                    border-left: 1px solid #dcdee2;
                    border-radius: 3px 0 0 3px;
                    &.active {
                        box-shadow: none;
                    }
                }
                &:last-child {
                    border-radius: 0 3px 3px 0;
                }
                &:hover {
                    color: #2d8cf0;
                }
                &.active {
                    color: #2d8cf0;
                    border-color: #2d8cf0;
                    box-shadow: -1px 0 0 0 #2d8cf0;
                }
            }
        }

        .lists {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -20px;
            .item {
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                width: calc(33.33% - 40px);
                padding: 20px;
                margin: 0 20px 40px;
                border: 1px solid #f0f0f0;
                border-radius: 3px;
                background-color: #fff;
                text-align: left;
                transition: all .2s ease-in-out;
                &:hover{
                    box-shadow: 0 4px 10px rgba(3, 65, 157, .1);
                }
                .card-title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 0.75rem;
                }
                .name {
                    display: flex;
                    align-items: center;
                    color: #666;
                    font-size: 18px;
                    font-weight: 500;
                    width: 100%;
                    span {
                        flex: 1;
                        margin-right: 6px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        cursor: pointer;
                    }
                    .logo-android,
                    .logo-apple {
                        display: inline-block;
                        width: 28px;
                        height: 28px;
                        background: url("./images/android.png") no-repeat right;
                        background-size: 16px;
                    }

                    .logo-apple {
                        background-image: url("./images/ios.png");
                    }
                }
                .card-title{
                    .tag {
                        flex-shrink: 0;
                        padding: 4px 2px;
                        margin-left: 5px;
                        border: 1px solid #717b8e;
                        font-size: 10px;
                        color: #717b8e;
                    }
                }
                .up {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    color: #6f7b8e;
                    padding-bottom: 10px;
                }
                .author {
                    display: flex;
                    align-items: center;
                    img {
                        width: 22px;
                        height: 22px;
                        margin-right: 6px;
                        border-radius: 50%;
                    }
                    span {
                        margin-right: 8px;
                        line-height: normal;
                    }
                    .volcano,
                    .purple {
                        display: inline-block;
                        height: 20px;
                        line-height: 18px;
                        margin: 2px 4px 2px 0;
                        padding: 0 8px;
                        border: 1px solid #ffbb96;
                        border-radius: 3px;
                        color: #fa541c;
                        background: #fff2e8;
                        font-size: 12px;
                        vertical-align: middle;
                        opacity: 1;
                        overflow: hidden;
                        cursor: pointer;
                    }
                    .purple {
                        background: #f9f0ff;
                        border-color: #d3adf7;
                        color: #722ed1;
                    }
                }
                .installcount {
                    display: flex;
                    align-items: center;
                    .download-outline {
                        display: inline-block;
                        width: 28px;
                        height: 28px;
                        background: url("./images/down.png") no-repeat center;
                        background-size: 16px;
                    }
                    span {
                        padding-left: 6px;
                    }
                }
                .desc {
                    width: 100%;
                    height: 60px;
                    word-break: break-all;
                    overflow: hidden;
                    position: relative;
                    color: #777;
                    padding-bottom: 10px;
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
                .low {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    .rate {
                        display: flex;
                        align-items: center;
                        em {
                            width: 14px;
                            height: 14px;
                            margin-right: 4px;
                            background-repeat: no-repeat;
                            background-size: contain;
                            background-position: left;
                            background-image: url("./images/star.png");
                        }
                    }
                    button {
                        padding: 2px 14px;
                        border: 1px solid;
                        font-size: 14px;
                        outline: none;
                        cursor: pointer;
                        border-radius: 2px;
                        transition: color .2s ease, background-color .2s ease;
                        &.install {
                            border-color: #3EB4FF;
                            color: #3EB4FF;
                            background-color: #fff;
                            &:hover {
                                color: #fff;
                                background-color: #3EB4FF;
                            }
                        }
                        &.uninstall {
                            border-color:#5f6c81;
                            color: #5f6c81;
                            background-color: #fff;
                            &:hover {
                                color: #fff;
                                background-color: #5f6c81;
                            }
                        }
                    }
                }
            }
        }

        .error {
            color: #777;
        }

        .more {
            display: inline-block;
            border: 1px solid #dcdee2;
            white-space: nowrap;
            padding: 8px 22px;
            font-size: 12px;
            border-radius: 3px;
            transition: all .2s linear;
            color: #515a6e;
            background-color: #fff;
            cursor: pointer;
            outline: none;
            &:hover {
                color: #57a3f3;
                background-color: #fff;
                border-color: #57a3f3;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .markets-body {
            padding-left: 15px;
            padding-right: 15px;
            .lists {
                margin: 0;
                .item {
                    width: calc(50% - 40px);
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .markets-body {
            padding-top: 42px;
            padding-bottom: 42px;
            .title {
                font-size: 28px;
            }
            .search {
                width: 85%;
                height: 46px;
            }
            .lists {
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 20px;
                .item {
                    width: 100%;
                    margin-left: 0;
                    margin-right: 0;
                    margin-bottom: 15px;
                }
            }
        }
    }
</style>
<script>
    import {each, pluginsTypes} from "./js/common";
    import axios from 'axios'

    export default {
        data() {
            return {
                loadIng: '',

                pluginsTypes: pluginsTypes(),

                key: '',
                type: 'all',

                loadError: '',
                lists: [],
                nextPage: 1,
            }
        },
        mounted() {
            let parent = this.$el.parentNode;
            parent.style.setProperty('max-width', 'none', 'important');
            parent.style.setProperty('padding', '0', 'important');
            parent.nextElementSibling.style.setProperty('display', 'none', 'important');
            //
            this.initTypeOrKey();
            this.load();
        },
        watch: {
            type(val) {
                if (val) {
                    window.location.replace("#" + (val === 'all' ? '' : val));
                    this.key = '';
                    this.nextPage = 1;
                    this.lists = [];
                    this.load();
                }
            }
        },
        methods: {
            loadFinish(timeOut) {
                if (typeof timeOut !== 'undefined') {
                    clearInterval(timeOut);
                }
                if (this.loadIng === 'start') {
                    this.$refs.myLoading.addEventListener("transitionend", (e) => {
                        setTimeout(() => { this.loadIng = 'finish'; }, 100);
                    }, false);
                    setTimeout(() => { this.loadIng = 'finish'; }, 1000);
                    this.loadIng = 'end';
                }
            },
            initTypeOrKey() {
                let hash = this.$route.hash + "";
                if (hash.indexOf("#") === 0) {
                    hash = hash.substr(1)
                }
                if (hash) {
                    let isType = false;
                    each(this.pluginsTypes, (index, item) => {
                        if (hash === item.name) {
                            this.key = '';
                            this.type = hash;
                            return isType = true;
                        }
                    });
                    if (!isType) {
                        this.key = decodeURIComponent(hash);
                        this.type = '';
                    }
                }
            },
            search() {
                window.location.replace("#" + this.key);
                this.type = '';
                this.nextPage = 1;
                this.lists = [];
                this.load();
            },
            load() {
                this.loadError = '';
                let timeOut = setTimeout(() => { this.loadIng = 'start' }, 1000);
                //
                axios.get('https://console.eeui.app/api/plugin?__Access-Control-Allow-Origin=1', {
                    params : {
                        where: {
                            name: this.key,
                            type: this.type
                        },
                        page: this.nextPage,
                        pagesize: 30,
                    }
                }).then((response) => {
                    this.loadFinish(timeOut);
                    if (response.status !== 200) {
                        this.nextPage = 0;
                        this.loadError = "网络繁忙，请稍后再试......";
                        return;
                    }
                    let res = response.data;
                    if (res.ret === 1) {
                        if (res.data.currentPage === 1) {
                            this.lists = [];
                        }
                        res.data.lists.forEach((item) => {
                            this.lists.push(item);
                        });
                        this.nextPage = res.data.hasMorePages ? res.data.currentPage + 1 : 0;
                    }else{
                        this.nextPage = 0;
                        this.loadError = res.msg;
                    }
                })
            },
            detail(name) {
                this.$router.push({path: 'detail.html', hash: name})
            }
        }
    }
</script>
