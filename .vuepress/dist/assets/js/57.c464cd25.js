(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{412:function(t,o,r){"use strict";r.r(o);var e={mounted:function(){var t=this.$route.hash;this.leftExists(t,"#/markets/")&&this.$router.push("markets/detail.html#"+t.substring(10))},methods:{leftExists:function(t,o,r){return t+="",o+="",!0!==r&&(t=t.toLowerCase(),o=o.toLowerCase()),t.substring(0,o.length)===o},storage:function(t,o){if(void 0===o)return this.loadFromlLocal("__:proxy",t,"","__storage__");this.savaToLocal("__:proxy",t,o,"__storage__")},savaToLocal:function(t,o,r,e){try{void 0===e&&(e="__seller__");var s=window.localStorage[e];s?(s=JSON.parse(s))[t]||(s[t]={}):(s={})[t]={},s[t][o]=r,window.localStorage[e]=JSON.stringify(s)}catch(t){}},loadFromlLocal:function(t,o,r,e){void 0===e&&(e="__seller__");var s=window.localStorage[e];return s&&(s=JSON.parse(s)[t])&&s[o]||r}}},s=r(1),a=Object(s.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);o.default=a.exports}}]);