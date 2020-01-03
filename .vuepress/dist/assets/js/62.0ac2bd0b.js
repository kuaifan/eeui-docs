(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{390:function(t,e,r){"use strict";r.r(e);var v=r(0),a=Object(v.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"在-eeui-中使用-vue-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-eeui-中使用-vue-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 eeui 中使用 Vue.js")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#只含有运行时的构建版本"}},[t._v("只含有运行时的构建版本")])]),r("li",[r("a",{attrs:{href:"#平台的差异"}},[t._v("平台的差异")]),r("ul",[r("li",[r("a",{attrs:{href:"#执行环境"}},[t._v("执行环境")])]),r("li",[r("a",{attrs:{href:"#dom"}},[t._v("DOM")])]),r("li",[r("a",{attrs:{href:"#样式"}},[t._v("样式")])]),r("li",[r("a",{attrs:{href:"#事件"}},[t._v("事件")])])])]),r("li",[r("a",{attrs:{href:"#支持的功能"}},[t._v("支持的功能")]),r("ul",[r("li",[r("a",{attrs:{href:"#全局配置"}},[t._v("全局配置")])]),r("li",[r("a",{attrs:{href:"#全局-api"}},[t._v("全局 API")])]),r("li",[r("a",{attrs:{href:"#选项"}},[t._v("选项")])]),r("li",[r("a",{attrs:{href:"#生命周期钩子"}},[t._v("生命周期钩子")])]),r("li",[r("a",{attrs:{href:"#实例属性"}},[t._v("实例属性")])]),r("li",[r("a",{attrs:{href:"#实例方法"}},[t._v("实例方法")])]),r("li",[r("a",{attrs:{href:"#模板指令"}},[t._v("模板指令")])]),r("li",[r("a",{attrs:{href:"#特殊属性"}},[t._v("特殊属性")])]),r("li",[r("a",{attrs:{href:"#内置组件"}},[t._v("内置组件")])])])])])]),r("p"),t._v(" "),r("blockquote",[r("p",[t._v('如果没有特别指示，文章中的 "Vue.js" 或者 "Vue" 都指的是 v2 版本的 Vue。')])]),t._v(" "),r("h2",{attrs:{id:"只含有运行时的构建版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#只含有运行时的构建版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 只含有运行时的构建版本")]),t._v(" "),r("p",[t._v("如果你熟悉 Vue.js，你应该知道 Vue.js 有两种构建版本: "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("运行时 + 编译器")]),t._v(" 与 "),r("strong",[t._v("只包含运行时")]),r("OutboundLink")],1),t._v("。它们之间的区别在于编译器是否需要能够在运行时编译 "),r("code",[t._v("template")]),t._v(" 选项。由于运行时构建版本比完整版本的构建版本轻约 30%（Vue 官方估算），为了更好的性能和更小的代码体积，eeui 集成的是运行时版本的 Vue。")]),t._v(" "),r("p",[t._v("具体来说，差异如下：")]),t._v(" "),r("ul",[r("li",[t._v("定义组件时不支持 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#template",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("template")]),r("OutboundLink")],1),t._v(" 选项。")]),t._v(" "),r("li",[t._v("不支持使用 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#X-Templates",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("x-templates")]),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("不支持使用 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-compile",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Vue.compile")]),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("h2",{attrs:{id:"平台的差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平台的差异","aria-hidden":"true"}},[t._v("#")]),t._v(" 平台的差异")]),t._v(" "),r("p",[t._v("Vue.js 最初是为 Web 平台设计的。虽然可以基于eeui开发原生应用程序，但是仍然存在许多"),r("router-link",{attrs:{to:"/guide/difference.html"}},[t._v("eeui 与 Web 平台的差异")]),t._v("。")],1),t._v(" "),r("p",[t._v("与 Web 平台的主要差异是: 执行环境、DOM、样式和事件。")]),t._v(" "),r("h3",{attrs:{id:"执行环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行环境")]),t._v(" "),r("p",[t._v("eeui 主要用于编写多页的应用程序，每个页面都对应了原生开发中的 "),r("em",[t._v("View")]),t._v(" 或者 "),r("em",[t._v("Activity")]),t._v("，并且保持自己的上下文。即使 eeui 的所有页面都使用的都是同一个 Javascript 引擎的实例(virtual machine)，每个页面是执行环境也是互相隔离的（基于 Sandbox 技术）。")]),t._v(" "),r("p",[t._v("具体来讲，每个页面的 Vue 变量都是不同的实例，即使是写在 Vue 上的“全局”配置（"),r("code",[t._v("Vue.config.xxx")]),t._v("）也只会影响 eeui 上的单个页面。")]),t._v(" "),r("h3",{attrs:{id:"dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),r("p",[t._v("因为在 Android 和 iOS 上没有 DOM（Document Object Model），如果你要手动操作和生成 DOM 元素的话可能会遇到一些兼容性问题。在你使用现代前端框架的情况下，操作数据与组件而不是生成的元素是一个比较好的做法。")]),t._v(" "),r("p",[t._v("一些与 DOM 相关的特性，比如 "),r("code",[t._v("v-html")]),t._v("，"),r("code",[t._v("vm.$el")]),t._v("，"),r("code",[t._v("template")]),t._v(" 选项，在不同的平台上可能无法获得相同的反应。")]),t._v(" "),r("p",[t._v("准确来说，"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-el",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("vm.$el")]),r("OutboundLink")],1),t._v("属性类型在web环境下是"),r("code",[t._v("HTMLElement")]),t._v("，但是在移动端并没有这个类型。实际上，它是一个由 "),r("em",[t._v("eeui 文档对象模型")]),t._v(" 定义的特殊数据结构。")]),t._v(" "),r("h3",{attrs:{id:"样式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),r("p",[t._v("样式表和 CSS 规则是由 eeui js 框架和原生渲染引擎管理的。要实现完整的 CSS 对象模型（CSSOM：CSS Object Model）并支持所有的 CSS 规则是非常困难的，而且没有这个必要。")]),t._v(" "),r("p",[t._v("出现性能考虑，"),r("strong",[t._v("eeui 目前只支持单个类选择器，并且只支持 CSS 规则的子集")]),t._v("。详情请参阅 "),r("em",[r("router-link",{attrs:{to:"/weex/styles/common-styles.html"}},[t._v("通用样式")])],1),t._v(" 与 "),r("em",[r("router-link",{attrs:{to:"/weex/styles/text-styles.html"}},[t._v("文本样式")])],1),t._v("。")]),t._v(" "),r("p",[t._v("在 eeui 里， 每一个 Vue 组件的样式都是 "),r("em",[r("a",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped"),r("OutboundLink")],1)]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),r("p",[t._v("目前在 eeui 里不支持事件冒泡和捕获，因此 eeui 原生组件不支持"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件修饰符"),r("OutboundLink")],1),t._v("，例如"),r("code",[t._v(".prevent")]),t._v("，"),r("code",[t._v(".capture")]),t._v("，"),r("code",[t._v(".stop")]),t._v("，"),r("code",[t._v(".self")]),t._v(" 。")]),t._v(" "),r("p",[t._v("此外，"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("按键修饰符"),r("OutboundLink")],1),t._v("以及"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统修饰键"),r("OutboundLink")],1),t._v(" 例如 "),r("code",[t._v(".enter")]),t._v("，"),r("code",[t._v(".tab")]),t._v("，"),r("code",[t._v(".ctrl")]),t._v("，"),r("code",[t._v(".shift")]),t._v(" 在移动端基本没有意义，在 eeui 中也不支持。")]),t._v(" "),r("h2",{attrs:{id:"支持的功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 支持的功能")]),t._v(" "),r("h3",{attrs:{id:"全局配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),r("blockquote",[r("p",[t._v("Vue “全局”配置只会影响 eeui 上的单一页面，配置不会在不同的 eeui 页面之间共享。")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 全局配置")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#silent",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.silent"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#optionMergeStrategies",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.optionMergeStrategies"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.devtools"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#errorHandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.errorHandler"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#warnHandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.warnHandler"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#ignoredElements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.ignoredElements"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#keyCodes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.keyCodes"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.performance"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#productionTip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.config.productionTip"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"全局-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局 API")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 全局 API")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-extend",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.extend"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-nextTick",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.nextTick"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.set"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.delete"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-directive",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.directive"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.filter"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.component"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-use",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.use"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-mixin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.mixin"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.version"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-compile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.compile"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("eeui 用的是 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("只包含运行时构建"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 选项")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#data",target:"_blank",rel:"noopener noreferrer"}},[t._v("data"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#props",target:"_blank",rel:"noopener noreferrer"}},[t._v("props"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#propsData",target:"_blank",rel:"noopener noreferrer"}},[t._v("propsData"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#computed",target:"_blank",rel:"noopener noreferrer"}},[t._v("computed"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("methods"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#watch",target:"_blank",rel:"noopener noreferrer"}},[t._v("watch"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#el",target:"_blank",rel:"noopener noreferrer"}},[t._v("el"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("template"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("eeui 用的是 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("只包含运行时构建"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#render",target:"_blank",rel:"noopener noreferrer"}},[t._v("render"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#renderError",target:"_blank",rel:"noopener noreferrer"}},[t._v("renderError"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#directives",target:"_blank",rel:"noopener noreferrer"}},[t._v("directives"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#filters",target:"_blank",rel:"noopener noreferrer"}},[t._v("filters"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#components",target:"_blank",rel:"noopener noreferrer"}},[t._v("components"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#parent",target:"_blank",rel:"noopener noreferrer"}},[t._v("parent"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#mixins",target:"_blank",rel:"noopener noreferrer"}},[t._v("mixins"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#extends",target:"_blank",rel:"noopener noreferrer"}},[t._v("extends"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#provide-inject",target:"_blank",rel:"noopener noreferrer"}},[t._v("provide/inject"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#name",target:"_blank",rel:"noopener noreferrer"}},[t._v("name"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#delimiters",target:"_blank",rel:"noopener noreferrer"}},[t._v("delimiters"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#functional",target:"_blank",rel:"noopener noreferrer"}},[t._v("functional"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#model",target:"_blank",rel:"noopener noreferrer"}},[t._v("model"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#inheritAttrs",target:"_blank",rel:"noopener noreferrer"}},[t._v("inheritAttrs"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("comments"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"生命周期钩子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),r("p",[t._v("Vue 组件的实例生命周期钩子将在特定的阶段发出，详情请参考 Vue 组件的"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期图示"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 生命周期钩子")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#beforeCreate",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeCreate"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#created",target:"_blank",rel:"noopener noreferrer"}},[t._v("created"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#beforeMount",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeMount"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#mounted",target:"_blank",rel:"noopener noreferrer"}},[t._v("mounted"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("详见下文解释")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#beforeUpdate",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeUpdate"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#updated",target:"_blank",rel:"noopener noreferrer"}},[t._v("updated"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#activated",target:"_blank",rel:"noopener noreferrer"}},[t._v("activated"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("不支持"),r("code",[t._v("<keep-alive>")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#deactivated",target:"_blank",rel:"noopener noreferrer"}},[t._v("deactivated"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("不支持"),r("code",[t._v("<keep-alive>")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#beforeDestroy",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeDestroy"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#destroyed",target:"_blank",rel:"noopener noreferrer"}},[t._v("destroyed"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#errorCaptured",target:"_blank",rel:"noopener noreferrer"}},[t._v("errorCaptured"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("具体详见"),r("router-link",{attrs:{to:"/guide/lifecycle.html"}},[t._v("生命周期")]),t._v("篇。")],1)]),t._v(" "),r("h3",{attrs:{id:"实例属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例属性")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 实例属性")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$data"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-props",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$props"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-el",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$el"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$options"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-parent",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$parent"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-root",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$root"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-children",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$children"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$slots"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-scopedSlots",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$scopedSlots"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-refs",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$refs"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-isServer",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$isServer"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("永远是"),r("code",[t._v("false")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-attrs",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$attrs"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-listeners",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$listeners"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"实例方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 实例方法")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-watch",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$watch()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$set()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$delete()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$on()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-once",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$once()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-off",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$off()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-emit",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$emit()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$mount()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-forceUpdate",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$forceUpdate()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-nextTick",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$nextTick()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-destroy",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$destroy()"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"模板指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模板指令","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板指令")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 指令")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-text",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-text"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-html"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-show",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-show"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("不支持 "),r("code",[t._v("display: none;")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-if",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-if"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-else",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-else"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-else-if",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-else-if"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-for",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-for"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-on"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不支持"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件修饰符"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-bind",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-bind"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-model"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-pre",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-pre"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-cloak",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-cloak"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("只支持单类名选择器")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#v-once",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-once"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"特殊属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特殊属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 特殊属性")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 特殊属性")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#key",target:"_blank",rel:"noopener noreferrer"}},[t._v("key"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#ref",target:"_blank",rel:"noopener noreferrer"}},[t._v("ref"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#slot",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#slot-scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot-scope"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("scope"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("不推荐")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#is",target:"_blank",rel:"noopener noreferrer"}},[t._v("is"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])]),t._v(" "),r("h3",{attrs:{id:"内置组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内置组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置组件")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Vue 内置组件")]),t._v(" "),r("th",[t._v("是否支持")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#component",target:"_blank",rel:"noopener noreferrer"}},[t._v("component"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("transition"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("在移动端 "),r("em",[t._v("enter")]),t._v(" 与 "),r("em",[t._v("leave")]),t._v(" 的概念可能有点不同， 并且 eeui 不支持"),r("code",[t._v("display: none;")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition-group",target:"_blank",rel:"noopener noreferrer"}},[t._v("transition-group"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("跟 "),r("em",[t._v("transition")]),t._v(" 一样")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"}},[t._v("keep-alive"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-no"},[t._v("不支持")])]),t._v(" "),r("td",[t._v("移动端的原生组件不能被前端缓存")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#slot",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("b",{staticClass:"tag-yes"},[t._v("支持")])]),t._v(" "),r("td",[t._v("-")])])])])])},[],!1,null,null,null);e.default=a.exports}}]);