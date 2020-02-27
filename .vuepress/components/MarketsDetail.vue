<template>
    <div class="markets-main">

        <v-progress ref="myLoading" style="top:3.6rem"/>

        <div class="markets-body markets-detail">

            <div class="market-breadcrumb">
                <div class="link" @click="goBack">插件市场</div>
                <div class="divide">/</div>
                <div>插件详情</div>
            </div>

            <div v-if="detail.name" class="market-overview">
                <div class="market-overview-left">
                    <div class="card-name">
                        <div class="name">
                            <span>{{detail.username}}/{{detail.name}}</span>
                        </div>
                    </div>
                    <div class="desc">{{detail.desc}}</div>
                    <div class="tags">
                        <div v-for="item in detail.types">{{tagTitle(item)}}</div>
                    </div>
                    <div class="detail">
                        <div class="author">
                            <img v-if="detail.userimg" :src="detail.userimg">
                            <span>{{detail.username}}</span>
                            <div v-if="detail.userid === 1" class="official">官方</div>
                        </div>
                        <template v-if="detail.android === 1">
                            <div class="divide"></div>
                            <div class="android">Android</div>
                        </template>
                        <template v-if="detail.ios === 1">
                            <div class="divide"></div>
                            <div class="ios">iOS</div>
                        </template>
                        <template v-if="detail.install > 5">
                            <div class="divide"></div>
                            <div class="installcount">
                                <div class="download-outline"></div>
                                <span>{{detail.install}}</span>
                            </div>
                        </template>
                        <div class="divide"></div>
                        <div class="score">
                            <div class="rate">
                                <em v-for="i in 5" :key="i"></em>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="market-overview-right">
                    <Poptip v-if="installContent" placement="bottom-end">
                        <Button type="info">安装到项目</Button>
                        <div slot="content">
                            <markdown-preview class="install-code" :initialValue="installContent" theme="oneDark"></markdown-preview>
                        </div>
                    </Poptip>
                </div>
            </div>

            <ul v-if="fileinfo.length > 1" class="fileinfo">
                <li v-for="item in fileinfo">
                    <div class="fileinfo-date">{{fileinfoDate(item.date)}}</div><div class="fileinfo-desc">：{{item.desc && item.desc != item.date ? item.desc : '-'}}</div>
                </li>
            </ul>

            <div ref="marketmenu" class="market-menu" v-html="marketMenu" @click="clickMenu"></div>
            <div ref="marketview" class="market-view">
                <markdown-preview :initialValue="detail.content" theme="oneDark"></markdown-preview>
            </div>

        </div>

        <div v-if="marketSideMenuShow" ref="marketsidemenu" class="market-side-menu" v-html="marketMenu" @click="clickMenu"></div>
    </div>
</template>

<style lang="scss">
    .markets-main {
        .market-menu,
        .market-side-menu {
            padding-top: 16px;
            border-top: 2px solid #f1f3f4;
            .menu-0,.menu-1,.menu-2,.menu-3,.menu-4 {
                position: relative;
                color: #3eb4ff;
                font-size: 16px;
                line-height: 1.7;
                font-weight: 500;
                text-decoration: none;
                padding-left: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:before {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 50%;
                    border: 1px solid #333333;
                    background-color: #ffffff;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    transform: translateY(-50%);
                }
                > span {
                    display: inline-block;
                    cursor: pointer;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .menu-0 {
                &:before {
                    background-color: #333333;
                }
            }
            .menu-1 {
                margin-left: 36px;
            }
            .menu-2 {
                margin-left: 54px;
            }
            .menu-3 {
                margin-left: 72px;
            }
            .menu-4 {
                margin-left: 90px;
            }
        }
        .market-side-menu {
            position: fixed;
            top: 96px;
            left: 50%;
            right: 22px;
            z-index: 1;
            border: 0;
            padding-top: 0;
            margin-left: 496px;
            .menu-0,.menu-1,.menu-2,.menu-3,.menu-4 {
                font-size: 14px;
                padding-left: 12px;
                overflow: unset;
                text-overflow: unset;
                white-space: unset;
                &:before {
                    top: 12px;
                    width: 5px;
                    height: 5px;
                }
            }
            .menu-1 {
                margin-left: 21px;
            }
            .menu-2 {
                margin-left: 39px;
            }
            .menu-3 {
                margin-left: 57px;
            }
            .menu-4 {
                margin-left: 75px;
            }
            @media (max-width: 1398px) {
                display: none;
            }
        }
        .market-view {
            padding: 0 0 50px;
            .markdown-preview {
                padding: 12px !important;
                h2, h3, h4, h5, h6 {
                    border-bottom: 0;
                }
                table {
                    border: 0;
                }
            }
        }
        .install-code {
            .markdown-preview {
                padding: 6px 6px 12px !important;
                .code-block {
                    pre {
                        padding: 12px 10px!important;
                        margin: 4px 0 !important;
                    }
                    .copy-code {
                        top: 0 !important;
                    }
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .markets-main {
        position: relative;
        background-color: #ffffff;
    }
    .markets-body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        margin: 0 auto;
        color: #232f40;
        padding: 0;
        box-sizing: border-box;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        line-height: 1.5;
        transform: rotateZ(0deg);
        z-index: 2;

        * {
            box-sizing: border-box;
        }

        .market-breadcrumb {
            display: flex;
            padding-bottom: 20px;
            font-size: 14px;
            font-weight: 500;
            color: #5f6368;
            .link {
                color: #3EB4FF;
                cursor: pointer;
            }
            .divide {
                padding: 0 6px;
            }
        }

        .market-overview {
            display: flex;
            width: 100%;
            padding-bottom: 22px;
            .market-overview-left {
                flex: 1;
                .card-name {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .name {
                        font-size: 28px;
                        font-weight: 500;
                        display: flex;
                        align-items: center;
                        span {
                            display: inline-block;
                            margin-right: 12px;
                        }
                        @media screen and (max-width: 800px) {
                            font-size: 22px;
                        }
                    }
                }
                .desc {
                    padding: 6px 0 0;
                    color: #777777;
                    word-break: break-all;
                }
                .tags {
                    padding: 16px 0 0;
                    color: #1f2b40;
                    word-break: break-all;
                    > div {
                        display: inline-block;
                        height: 24px;
                        line-height: 22px;
                        margin: 2px 6px 2px 0;
                        padding: 0 8px;
                        border: 1px solid #e8eaec;
                        border-radius: 3px;
                        background: #f7f7f7;
                        font-size: 12px;
                        vertical-align: middle;
                        opacity: 1;
                        overflow: hidden;
                        color: #515a6e;
                    }
                }
                .detail {
                    padding: 16px 0 0;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    color: #5e6b82;
                    .author {
                        display: flex;
                        align-items: center;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        img {
                            width: 20px;
                            height: 20px;
                            margin-right: 6px;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                        span {
                            margin-right: 8px;
                            line-height: normal;
                        }
                        .repo {
                            color: #5e6b82;
                            transition: opacity .2s ease;
                            &:hover {
                                opacity: .8;
                            }
                        }
                        .official {
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
                    }
                    .divide {
                        width: 1px;
                        height: 20px;
                        margin: 0 16px;
                        background-color: #d9dee6;
                    }
                    .android,
                    .ios {
                        padding-left: 22px;
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
                    .score {
                        display: flex;
                        align-items: center;
                        margin-right: 17px;
                        .rate {
                            display: flex;
                            align-items: center;
                            em {
                                width: 18px;
                                height: 18px;
                                margin-right: 8px;
                                background-repeat: no-repeat;
                                background-size: contain;
                                background-position: center;
                                background-image: url("./images/star.png");
                            }
                        }
                    }
                }
            }
            .market-overview-right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 22px;
            }
        }

        .market-view {
            padding: 10px 0 50px;
        }

        .fileinfo {
            font-size: 14px;
            border-top: 2px solid #f1f3f4;
            padding: 16px 28px;
            margin: 0;
            color: rgba(39,40,44,.7);
            li {
                padding: 0;
                margin: 0;
                line-height: 24px;
                .fileinfo-date {
                    display: inline-block;
                    font-family: arial,sans-serif;
                }
                .fileinfo-desc {
                    padding-left: 2px;
                    display: inline-block;
                }
            }
        }
    }
</style>
<script>
    import axios from 'axios'
    import { each, count, leftExists, pluginsTypes } from "./js/common";
    import { Poptip, Button } from 'iview';
    import VProgress from "./Progress";
    import MarkdownPreview from './MDEditor/preview';
    import "./css/ivu-poptip.scss"
    import "./css/ivu-button.scss"

    export default {
        components: {VProgress, MarkdownPreview, Poptip, Button},
        data() {
            return {
                name: '',
                detail: {},

                fileinfo: [],

                marketMenu: '',
                installContent: '',

                marketSideMenuShow: false,
            }
        },
        mounted() {
            this.load();
            $(window).scroll(this.sideMenuScroll);
        },
        watch: {
            '$route' () {
                this.load();
            }
        },
        methods: {
            sideMenuScroll() {
                if (this.$refs.marketview == null) {
                    $(window).unbind('scroll', this.sideMenuScroll);
                    return;
                }
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.marketSideMenuShow = scrollTop > this.$refs.marketview.offsetTop;
            },

            fileinfoDate(date) {
                date += "";
                if (date.indexOf(" ") !== -1) {
                    return date.substring(0,date.indexOf(" "));
                }
                return date;
            },

            goBack() {
                if (window.sessionStorage['__FromPath__'] === '/markets/') {
                    window.history.go(-1);
                } else {
                    this.$router.push({path: '/markets'});
                }
            },

            getName() {
                let match = (this.$route.path + "").match(/^\/markets\/(([^/]+)\/([^/]+))\/*$/);
                if (match) {
                    this.setTile("插件详情 - 插件市场");
                    return this.delRHtml(match[1]);
                }
                let name = $.trim(this.$route.query.name);
                name = this.delRHtml(count(name) > 0 ? name : this.getHash());
                //
                let newName = null;
                if ([
                    'websocket',
                    'screenshots',
                    'citypicker',
                    'picture',
                    'rongim',
                    'umeng',
                    'pay',
                    'audio',
                    'deviceInfo',
                    'communication',
                    'geolocation',
                    'recorder',
                    'accelerometer',
                    'compass',
                    'amap',
                    'seekbar',
                    'network',
                ].indexOf(name) !== -1) {
                    newName = 'eeui/' + name;
                }
                if (name === 'networkTransfer') newName = 'eeui/network';
                if (name === 'videoView') newName = 'eeui/video';
                if (newName !== null) {
                    name = null;
                    this.$router.push({path: newName});
                }
                //
                return name;
            },

            getHash() {
                let temp = this.$route.hash + "";
                if (temp.indexOf("#") === 0) {
                    temp = temp.substr(1)
                }
                return temp;
            },

            delRHtml(name) {
                name = this.rightDelete(name, ".html");
                name = this.rightDelete(name, ".htm");
                return name;
            },

            rightExists(string, find) {
                string += "";
                find += "";
                string = string.toLowerCase();
                find = find.toLowerCase();
                return (string.substring(string.length - find.length) === find);
            },

            rightDelete(string, find) {
                string += "";
                find += "";
                if (this.rightExists(string, find)) {
                    string = string.substring(0, string.length - find.length)
                }
                return string ? string : '';
            },

            load() {
                this.name = this.getName();
                if (this.name === null) {
                    return;
                }
                this.marketMenu = '';
                this.detail = {};
                //
                let timeOut = setTimeout(() => { this.$refs.myLoading.start(); }, 1000);
                axios.get('https://console.eeui.app/api/plugins/client/' + this.name + '?__Access-Control-Allow-Origin=1', {
                    params : {
                        detail: 1
                    }
                }).then((response) => {
                    clearInterval(timeOut);
                    this.$refs.myLoading.end();
                    //
                    if (response.status !== 200) {
                        return;
                    }
                    let res = response.data;
                    if (res.ret === 1) {
                        res.data.content = res.data.content || '暂无更多详细信息......';
                        this.detail = res.data;
                        this.fileinfo = $.isArray(res.data.fileinfo) ? res.data.fileinfo : [];
                        this.codeColor();
                        this.createMenu();
                        //
                        this.installContent = "##### 安装插件到项目" +
                            "\n\n\n\n" +
                            "```\neeui plugin install " + this.detail.username + "/" + this.detail.name + "\n```" +
                            "\n\n\n\n" +
                            "##### 从项目中移除此插件" +
                            "\n\n\n\n" +
                            "```\neeui plugin uninstall " + this.detail.username + "/" + this.detail.name + "\n```";
                    }
                })
            },

            codeColor() {
                this.$nextTick(() => {
                    var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,t){var r,a,i=C.util.type(e);switch(t=t||{},i){case"Object":if(a=C.util.objId(e),t[a])return t[a];for(var l in r={},t[a]=r,e)e.hasOwnProperty(l)&&(r[l]=n(e[l],t));return r;case"Array":return a=C.util.objId(e),t[a]?t[a]:(r=[],t[a]=r,e.forEach(function(e,a){r[a]=n(e,t)}),r);default:return e}}},languages:{extend:function(e,a){var n=C.util.clone(C.languages[e]);for(var t in a)n[t]=a[t];return n},insertBefore:function(n,e,a,t){var r=(t=t||C.languages)[n],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var s=t[n];return t[n]=i,C.languages.DFS(C.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,t,r){r=r||{};var i=C.util.objId;for(var l in a)if(a.hasOwnProperty(l)){n.call(a,l,a[l],t||l);var o=a[l],s=C.util.type(o);"Object"!==s||r[i(o)]?"Array"!==s||r[i(o)]||(r[i(o)]=!0,e(o,n,l,r)):(r[i(o)]=!0,e(o,n,null,r))}}},plugins:{},highlightAll:function(e,a){C.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t);for(var r,i=t.elements||e.querySelectorAll(t.selector),l=0;r=i[l++];)C.highlightElement(r,!0===a,t.callback)},highlightElement:function(e,a,n){for(var t,r="none",i=e;i&&!c.test(i.className);)i=i.parentNode;i&&(r=(i.className.match(c)||[,"none"])[1].toLowerCase(),t=C.languages[r]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r));var l={element:e,language:r,grammar:t,code:e.textContent},o=function(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),n&&n.call(l.element)};if(C.hooks.run("before-sanity-check",l),l.code)if(C.hooks.run("before-highlight",l),l.grammar)if(a&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(C.highlight(l.code,l.grammar,l.language));else o(C.util.encode(l.code));else C.hooks.run("complete",l)},highlight:function(e,a,n){var t={code:e,grammar:a,language:n};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),M.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,a,n,t,r,i,l){for(var o in n)if(n.hasOwnProperty(o)&&n[o]){if(o==l)return;var s=n[o];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],u=c.inside,h=!!c.lookbehind,f=!!c.greedy,d=0,m=c.alias;if(f&&!c.pattern.global){var p=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=r;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof M)){if(f&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(o,u?C.tokenize(x,u):x,m,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(a,E),1!=N&&C.matchGrammar(e,a,n,y,v,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],t=a.rest;if(t){for(var r in t)a[r]=t[r];delete a.rest}return C.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=C.hooks.all[e];if(n&&n.length)for(var t,r=0;t=n[r++];)t(a)}},Token:M};function M(e,a,n,t,r){this.type=e,this.content=a,this.alias=n,this.length=0|(t||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return M.stringify(e,a)}).join("");var n={type:e.type,content:M.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,t)}C.hooks.run("wrap",n);var r=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,t=a.code,r=a.immediateClose;g.postMessage(C.highlight(t,C.languages[n],n)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
                    Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
                    !function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
                    Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
                    Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
                });
            },

            createMenu() {
                this.$nextTick(() => {
                    let min = 9;
                    let lists = $(this.$refs.marketview).find("h1,h2,h3");
                    let html = '';
                    lists.each((index, item) => {
                        let size = parseInt(item.tagName.replace(/\h/gi, ''));
                        if (!isNaN(size)) {
                            let title = $(item).text();
                            if (leftExists(title, "#")) title = title.substring(1);
                            if (count($.trim(title)) > 0) {
                                min = Math.min(min, size);
                            }
                        }
                    });
                    lists.each((index, item) => {
                        let id = "menu-" + Math.round(Math.random() * 10000);
                        let size = parseInt(item.tagName.replace(/\h/gi, ''));
                        if (!isNaN(size)) {
                            let title = $(item).text();
                            if (leftExists(title, "#")) title = title.substring(1);
                            if (count($.trim(title)) > 0) {
                                html+= '<div class="menu-' + (size - min) + '"><span data-id="' + id + '" data-title="' + title + '">' + title + '</span></div>';
                                $(item).attr("id", id);
                            }
                        }
                    });
                    this.marketMenu = html;
                    this.$nextTick(() => {
                        if (this.getHash() !== this.getName()) {
                            let m = $(this.$refs.marketmenu).find("span[data-title='" + decodeURIComponent(this.getHash()) + "']");
                            if (count(m) > 0) {
                                this.clickMenu(m.attr("data-id"));
                            }
                        }
                    });
                });
            },

            clickMenu(e) {
                let m = $(this.$refs.marketview).find("#" + (typeof e === 'string' ? e : $(e.target).attr("data-id")));
                if (count(m) > 0) {
                    $('html, body').scrollTop(m.offset().top - $("header").outerHeight());
                }
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

            setTile(title) {
                document.title = title;
                let mobile = navigator.userAgent.toLowerCase();
                if (/iphone|ipad|ipod/.test(mobile)) {
                    let iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.setAttribute('src', '/favicon.ico');
                    let iframeCallback = function () {
                        setTimeout(function () {
                            iframe.removeEventListener('load', iframeCallback);
                            document.body.removeChild(iframe)
                        }, 0)
                    };
                    iframe.addEventListener('load', iframeCallback);
                    document.body.appendChild(iframe)
                }
            }
        }
    }
</script>
