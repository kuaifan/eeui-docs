(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{363:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"友盟模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#友盟模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 友盟模块")]),t._v(" "),a("ul",[a("li",[t._v("这里主要说的是友盟的推送模块，统计模块已包含在里面无需另外配置。")])]),t._v(" "),a("blockquote",[a("p",[t._v("首次使用请执行")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("eeui plugin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" umeng\n")])])]),a("blockquote",[a("p",[t._v("需要加载的模块")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" umeng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umeng'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),a("p",[t._v("请查阅"),a("router-link",{attrs:{to:"/guide/config.html"}},[t._v("配置相关")])],1),t._v(" "),a("h2",{attrs:{id:"获取token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取token","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取token")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("umeng.getToken")]),t._v(" 获取友盟token")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n* @返回 {"status":"success", "msg":"", "token":"友盟token"}\n */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" umeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"点击通知事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击通知事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 点击通知事件")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("umeng.setNotificationClickHandler")]),t._v(" 自定义通知打开动作（点击通知事件）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param callback  回调事件\n */")]),t._v("\numeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNotificationClickHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"callback-回调result说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#callback-回调result说明","aria-hidden":"true"}},[t._v("#")]),t._v(" callback 回调"),a("code",[t._v("result")]),t._v("说明")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为 “click” 时就是点击通知的动作了")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msgid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uuze1vb155496745348510"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息ID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试标题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息标题")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subtitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12345678"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息副标题")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息内容")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extra"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//额外参数")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rawData"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息原始数据")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"简单示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("umeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNotificationClickHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//......")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);