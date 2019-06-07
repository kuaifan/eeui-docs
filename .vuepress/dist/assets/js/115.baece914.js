(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{415:function(t,e,a){"use strict";a.r(e);var v=a(0),_=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[t._v("#")]),t._v(" storage")]),t._v(" "),a("p",[a("code",[t._v("storage")]),t._v(" 是一个在前端比较常用的模块，可以对本地数据进行存储、修改、删除，并且该数据是永久保存的，除非手动清除或者代码清除。但是，"),a("code",[t._v("storage")]),t._v(" 模块有一个限制就是浏览器端（H5）只能存储小于5M的数据，因为在 H5/Web 端的实现是采用 "),a("code",[t._v("HTML5 LocalStorage API")]),t._v("。而 Android 和 iOS 这块是没什么限制的。\nstorage 常用在一些被用户经常查询，但是又不频繁更新的数据，比如搜索历史、用户的订单列表等。搜索历史一般情况都是作为本地数据存储的，因此使用 storage 比较合适。而用户订单列表是需要本地存储和服务端器检索配合的场景。当一个用户下单后，会经常查阅个人的订单列表。但是，订单的列表数据不是频繁更新的，往往只有在收到货品时，才更新“已签收”，其余平时的状态是“已发货”。因此，可以使用 "),a("code",[t._v("storage")]),t._v(" 存储订单列表，可以减少服务器的压力，例如减少 SQL 查询或者缓存的压力。当用户查看订单详情的时候，再更新数据状态。")]),t._v(" "),a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h2",{attrs:{id:"setitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem","aria-hidden":"true"}},[t._v("#")]),t._v(" setItem")]),t._v(" "),a("p",[t._v("该方法可以通过键值对的形式将数据存储到本地。同时可以通过该方法，更新已有的数据。")]),t._v(" "),a("h4",{attrs:{id:"setitem-key-value-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setitem-key-value-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" setItem(key, value, callback)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("要存储的键，不允许是 "),a("code",[t._v('""')]),t._v(" 或 "),a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("要存储的值，不允许是 "),a("code",[t._v('""')]),t._v(" 或 "),a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("执行操作成功后的回调"),a("br"),a("code",[t._v("e.result")]),t._v("：表示设置是否成功，如果成功返回 "),a("code",[t._v('"success"')]),a("br"),a("code",[t._v("e.data")]),t._v("："),a("code",[t._v("undefined")]),t._v(" 表示设置成功，"),a("code",[t._v("invalid_param")]),t._v(" 表示 key/value 为 "),a("code",[t._v('""')]),t._v(" 或者 "),a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("function(e)")])])])]),t._v(" "),a("h2",{attrs:{id:"getitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem","aria-hidden":"true"}},[t._v("#")]),t._v(" getItem")]),t._v(" "),a("p",[t._v("传入键名返回对应的键值。")]),t._v(" "),a("h4",{attrs:{id:"getitem-key-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getitem-key-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" getItem(key, callback)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("要获取的值的名称，不允许是 "),a("code",[t._v('""')]),t._v(" 或 "),a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("执行操作成功后的回调"),a("br"),a("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),a("code",[t._v('"success"')]),a("br"),a("code",[t._v("e.data")]),t._v("：获取对应的键值字符串，如果没有找到则返回 "),a("code",[t._v("undefined")])]),t._v(" "),a("td",[t._v("function(e)")])])])]),t._v(" "),a("h2",{attrs:{id:"removeitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeitem","aria-hidden":"true"}},[t._v("#")]),t._v(" removeItem")]),t._v(" "),a("p",[t._v("传入一个键名将会删除本地存储中对应的键值。")]),t._v(" "),a("h4",{attrs:{id:"removeitem-key-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeitem-key-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" removeItem(key, callback)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("要删除的值的名称，不允许是 "),a("code",[t._v('""')]),t._v(" 或 "),a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("执行操作成功后的回调"),a("br"),a("code",[t._v("e.result")]),t._v("：表示删除是否成功，如果成功返回 "),a("code",[t._v('"success"')]),a("br"),a("code",[t._v("e.data")]),t._v("："),a("code",[t._v("undefined")]),t._v(" 表示删除成功")]),t._v(" "),a("td",[t._v("function(e)")])])])]),t._v(" "),a("h2",{attrs:{id:"length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length","aria-hidden":"true"}},[t._v("#")]),t._v(" length")]),t._v(" "),a("p",[t._v("返回本地存储的数据中所有存储项数量的整数。")]),t._v(" "),a("h4",{attrs:{id:"length-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" length(callback)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("执行操作成功后的回调"),a("br"),a("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),a("code",[t._v('"success"')]),a("br"),a("code",[t._v("e.data")]),t._v("：当前已存储项的数量")]),t._v(" "),a("td",[t._v("function(e)")])])])]),t._v(" "),a("h2",{attrs:{id:"getallkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys","aria-hidden":"true"}},[t._v("#")]),t._v(" getAllKeys")]),t._v(" "),a("p",[t._v("返回一个包含全部已存储项键名的数组。")]),t._v(" "),a("h4",{attrs:{id:"getallkeys-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" getAllKeys(callback)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("执行操作成功后的回调"),a("br"),a("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),a("code",[t._v('"success"')]),a("br"),a("code",[t._v("e.data")]),t._v("：所有键名组成的数组")]),t._v(" "),a("td",[t._v("function(e)")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/71d1dff37c54fa9bafab4d8cbe3d21e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=_.exports}}]);