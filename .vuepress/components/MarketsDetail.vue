<template>
    <div class="markets-main">

        <div ref="myLoading" class="eeui-loading" :class="'eeui-loading-' + loadIng"></div>

        <div class="markets-body markets-detail">

            <div class="market-breadcrumb">
                <div class="link" @click="goBack">插件市场</div>
                <div class="divide">/</div>
                <div>插件详情</div>
            </div>

            <div v-if="detail.name" class="market-overview">
                <div class="title">
                    <div class="name">
                        <span>{{detail.title}} | {{detail.name}}</span>
                        <div v-if="detail.android === 1" class="logo-android"></div>
                        <div v-if="detail.ios === 1" class="logo-apple"></div>
                    </div>
                </div>
                <div class="tags">
                    <div v-for="item in detail.types">{{tagTitle(item)}}</div>
                </div>
                <div class="desc">{{detail.desc}}</div>
                <div class="detail">
                    <div class="author">
                        <img v-if="detail.userimg" :src="detail.userimg">
                        <span>{{detail.username}}</span>
                        <div v-if="detail.userid === 1" class="volcano">官方</div>
                        <div v-else class="purple">开发者</div>
                    </div>
                    <div class="divide"></div>
                    <div class="installcount">
                        <div class="download-outline"></div>
                        <span>{{detail.install}}</span>
                    </div>
                    <div class="divide"></div>
                    <div class="score">
                        <div class="rate">
                            <em v-for="i in 5" :key="i"></em>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="marketmenu" class="market-menu" v-html="marketMenu" @click="clickMenu"></div>
            <div ref="marketdoc" class="market-doc" v-html="detail.content"></div>

        </div>
    </div>
</template>

<style lang="scss">
    .markets-body {
        .market-menu {
            padding-top: 10px;
            border-top: 1px solid #d2d5da;
            .menu-0,.menu-1,.menu-2,.menu-3,.menu-4 {
                position: relative;
                color: #3eb4ff;
                font-size: 16px;
                line-height: 1.7;
                cursor: pointer;
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
                &:hover {
                    text-decoration: underline;
                }
                > span {
                    display: inline-block;
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
    }
</style>
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
        &.eeui-loading-ready {
            width: 0;
        }
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
        font-family: PingFang SC, Helvetica Neue, Hiragino Sans GB, Segoe UI, Microsoft YaHei, 微软雅黑, sans-serif;
        color: #232f40;
        padding: 46px 0;
        box-sizing: border-box;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        line-height: 1.5;

        * {
            box-sizing: border-box;
        }
        .market-breadcrumb {
            display: flex;
            padding-bottom: 20px;
            font-size: 16px;
            .link {
                color: #3EB4FF;
                cursor: pointer;
            }
            .divide {
                padding: 0 6px;
            }
        }

        .market-overview {
            width: 100%;
            padding-bottom: 30px;

            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .name {
                font-size: 28px;
                font-weight: 500;
                display: flex;
                align-items: center;
                span {
                    display: inline-block;
                    margin-right: 12px;
                }
                .logo-android,
                .logo-apple {
                    display: inline-block;
                    width: 32px;
                    height: 32px;
                    background: url("./images/android.png") no-repeat right;
                    background-size: 22px;
                }

                .logo-apple {
                    background-image: url("./images/ios.png");
                }
            }
            .tags {
                padding: 6px 0 26px;
                color: #1f2b40;
                word-break: break-all;
                > div {
                    display: inline-block;
                    height: 22px;
                    line-height: 20px;
                    margin: 2px 4px 2px 0;
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
            .desc {
                padding: 0 0 26px;
                color: #1f2b40;
                word-break: break-all;
            }
            .detail {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                color: #5e6b82;
            }
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
            .divide {
                width: 1px;
                height: 20px;
                margin: 0 16px;
                background-color: #d9dee6;
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

        .market-doc {
            padding: 10px 0 50px;
        }
    }
    @media screen and (max-width: 1200px) {
        .markets-body {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media screen and (max-width: 800px) {
        .markets-body {
            .market-breadcrumb {
                font-size: 14px;
            }
            .market-overview {
                .name {
                    font-size: 22px;
                }
            }
        }
    }
</style>
<script>
    import axios from 'axios'
    import {each, count, leftExists, pluginsTypes} from "./js/common";

    import "./css/markets.code.scss"

    export default {
        data() {
            return {
                loadIng: '',

                name: '',
                detail: {},

                marketMenu: '',
            }
        },
        mounted() {
            let parent = this.$el.parentNode;
            parent.style.setProperty('max-width', 'none', 'important');
            parent.style.setProperty('padding', '0', 'important');
            parent.nextElementSibling.style.setProperty('display', 'none', 'important');
            //
            this.name = this.getName();
            this.marketMenu = '';
            this.detail = {};
            this.load();
        },
        methods: {
            loadFinish() {
                if (this.loadIng === 'start') {
                    this.$refs.myLoading.addEventListener("transitionend", (e) => {
                        setTimeout(() => { this.loadIng = 'finish'; }, 100);
                    }, false);
                    setTimeout(() => { this.loadIng = 'finish'; }, 1000);
                    this.loadIng = 'end';
                }
            },

            goBack() {
                if (window.sessionStorage['__FromPath__'] === '/markets/') {
                    window.history.go(-1);
                }else{
                    this.$router.push({path: '/markets'});
                }
            },

            getName() {
                let hash = this.$route.hash + "";
                if (hash.indexOf("#") === 0) {
                    hash = hash.substr(1)
                }
                return hash || this.$route.query.name;
            },

            load() {
                this.loadIng = 'ready';
                this.loadIng = 'start';
                //
                axios.get('https://console.eeui.app/api/plugin/' + this.name + '?__Access-Control-Allow-Origin=1', {
                    params : {
                        detail: 1
                    }
                }).then((response) => {
                    this.loadFinish();
                    if (response.status !== 200) {
                        return;
                    }
                    let res = response.data;
                    if (res.ret === 1) {
                        res.data.content = res.data.content || '暂无更多详细信息......';
                        this.detail = res.data;
                        this.codeColor();
                        this.createMenu();
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
                    let lists = $(this.$refs.marketdoc).find("h1,h2,h3");
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
                                html+= '<div class="menu-' + (size - min) + '" data-id="' + id + '">' + title + '</div>';
                                $(item).attr("id", id);
                            }
                        }
                    });
                    this.marketMenu = html;
                });
            },

            clickMenu(e) {
                let m = $(this.$refs.marketdoc).find("#" + $(e.target).attr("data-id"));
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
            }
        }
    }
</script>
