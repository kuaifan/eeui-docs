(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{444:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置相关","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置相关")]),t._v(" "),s("blockquote",[s("p",[t._v("整个项目中，只有一个主要配置文件，就放在项目根目录下。")])]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("eeui.config.js")]),t._v(" 为客户端配置文件")])]),t._v(" "),s("ul",[s("li",[t._v("注意:  "),s("strong",[s("code",[t._v("eeui.config.js")]),t._v(" 每次变动，都需要重新执行命令 "),s("code",[t._v("npm run dev")]),t._v(" 并在IDE重新编译运行你的 app。")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    serviceUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务端网址（可选）")]),t._v("\n    \n    homePage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主页的JS地址（可选）")]),t._v("\n    homePageParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主页其他参数（可选）")]),t._v("\n\n    navigationBarStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局配置导航栏默认样式（可选）")]),t._v("\n     \n    appKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于云平台管理（可选）")]),t._v("\n    \n    android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        imageEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//安卓图片适配器（可选）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    wxpay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        appid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx..."')]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//微信支付appid（可选）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    rongim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//融云模块配置（可选）")]),t._v("\n        andorid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    umeng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//友盟模块配置（可选）")]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            appKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            messageSecret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    socketHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//WiFi真机同步服务器 ip 地址（可选，dev自动生成）")]),t._v("\n    socketPort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//WiFi真机同步服务器端口（可选，dev自动生成）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),s("h6",{attrs:{id:"serviceurl-服务端网址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceurl-服务端网址","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("serviceUrl")])]),t._v(": 服务端网址 "),s("Tag",{attrs:{value:"1.0.17+"}})],1),t._v(" "),s("ul",[s("li",[t._v("默认留空，留空默认为：eeui自带 "),s("a",{attrs:{href:"https://console.eeui.app",target:"_blank",rel:"noopener noreferrer"}},[t._v("EEUI云平台"),s("OutboundLink")],1),t._v(" 服务。")]),t._v(" "),s("li",[t._v("如果 "),s("a",{attrs:{href:"https://github.com/kuaifan/eeui-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("自搭建服务端"),s("OutboundLink")],1),t._v("（热更新、动态设置启动图等）请填写自搭建网址。")])]),t._v(" "),s("h6",{attrs:{id:"homepage-主页的js地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homepage-主页的js地址","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("homePage")])]),t._v(": 主页的JS地址")]),t._v(" "),s("ul",[s("li",[t._v("一般情况下留空，默认为：index.js（可自定义，比如填写：login.js时默认首页将是login.js）。")]),t._v(" "),s("li",[t._v("也可以把JS资源放到服务器上然后把JS地址填写到这里。")]),t._v(" "),s("li",[t._v("还可以通过 "),s("a",{attrs:{href:"../module/newPage.html#eeui-setcustomconfig"}},[t._v("eeui.setCustomConfig")]),t._v(" 动态设置主页。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例:")]),t._v("\neeui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'homePage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行后下次启动App默认首页将是login.js；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意1：通过系统级清理app缓存后将失效。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意2：wifi同步模式下此设置将无效，开发者可直接修改配置参数homePage达到效果（wifi同步模式的首页采用的是发出wifi同步端的数据也就是电脑，但是eeui.setCustomConfig('homePage', 'xxxx')是保存在APP本地，所以wifi同步模式下无效）。")]),t._v("\n")])])]),s("h6",{attrs:{id:"homepageparams-主页的其他参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homepageparams-主页的其他参数","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("homePageParams")])]),t._v(": 主页的其他参数")]),t._v(" "),s("ul",[s("li",[t._v("比如导航栏颜色等。")]),t._v(" "),s("li",[t._v("详细设置请查阅 "),s("RouterLink",{attrs:{to:"/module/newPage.html#eeui-openpage"}},[t._v("eeui.openPage")]),t._v(" params参数说明。")],1)]),t._v(" "),s("h6",{attrs:{id:"navigationbarstyle-全局配置导航栏默认样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigationbarstyle-全局配置导航栏默认样式","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("navigationBarStyle")])]),t._v(": 全局配置导航栏默认样式")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/guide/config-navigationBarStyle.html"}},[t._v("配置示例")]),t._v("。")],1)]),t._v(" "),s("h6",{attrs:{id:"appkey-用于云平台管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appkey-用于云平台管理","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("appKey")])]),t._v(": 用于云平台管理")]),t._v(" "),s("ul",[s("li",[t._v("建议填写16-32位随机字符串。")]),t._v(" "),s("li",[t._v("主要用于 "),s("a",{attrs:{href:"https://console.eeui.app",target:"_blank",rel:"noopener noreferrer"}},[t._v("EEUI云平台"),s("OutboundLink")],1),t._v("（热更新、动态设置启动图等）。")])]),t._v(" "),s("h6",{attrs:{id:"android-安卓端相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-安卓端相关配置","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("android")])]),t._v(": 安卓端相关配置 "),s("Tag",{attrs:{date:"20191205",value:["1.0.33+"]}})],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("imageEngine")]),t._v(": 图片适配器ImageAdapter（可选："),s("code",[t._v("picasso")]),t._v("、"),s("code",[t._v("glide")]),t._v("），留空默认："),s("code",[t._v("glide")])])]),t._v(" "),s("h6",{attrs:{id:"wxpay-微信支付相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxpay-微信支付相关配置","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("wxpay")])]),t._v(": 微信支付相关配置")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("appid")]),t._v(": 微信支付商户appid。")])]),t._v(" "),s("h6",{attrs:{id:"rongim-融云相关配置（即时通讯模块）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rongim-融云相关配置（即时通讯模块）","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("rongim")])]),t._v(": 融云相关配置（即时通讯模块）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("enabled")]),t._v(": 是否启用融云服务。")]),t._v(" "),s("li",[s("code",[t._v("appKey")]),t._v("、"),s("code",[t._v("appSecret")]),t._v(": 在融云平台申请。")])]),t._v(" "),s("h6",{attrs:{id:"umeng-友盟相关配置（推送、统计模块）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umeng-友盟相关配置（推送、统计模块）","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("umeng")])]),t._v(": 友盟相关配置（推送、统计模块）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("enabled")]),t._v(": 是否启用友盟服务。")]),t._v(" "),s("li",[s("code",[t._v("appKey")]),t._v("、"),s("code",[t._v("messageSecret")]),t._v(": 在友盟平台申请。")]),t._v(" "),s("li",[s("code",[t._v("channel")]),t._v(": 友盟统计渠道。")])]),t._v(" "),s("h6",{attrs:{id:"sockethost、socketport-wifi真机调试配置，dev模式自动生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sockethost、socketport-wifi真机调试配置，dev模式自动生成","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("socketHost、socketPort")])]),t._v(": WiFi真机调试配置，dev模式自动生成")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("socketHost")]),t._v(": WiFi真机调试服务器 ip 地址")]),t._v(" "),s("li",[s("code",[t._v("socketPort")]),t._v(": WiFi真机调试服务器端口")])])])},[],!1,null,null,null);a.default=e.exports}}]);