(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{134:function(e,t,n){"use strict";var i=n(11),s=n(135);i(i.P+i.F*n(136)("includes"),"String",{includes:function(e){return!!~s(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},135:function(e,t,n){var i=n(72),s=n(21);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(e))}},136:function(e,t,n){var i=n(15)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(e){}}return!0}},224:function(e,t,n){},226:function(e,t,n){"use strict";n(94),n(134);var i=n(83);n(109);var s={strong:!0,italic:!0,overline:!0,h1:!0,h2:!0,h3:!0,h4:!1,h5:!1,h6:!1,hr:!0,quote:!0,ul:!0,ol:!0,code:!0,link:!0,image:!0,uploadImage:!1,custom_image:!1,custom_uploadImage:!1,table:!0,checked:!0,notChecked:!0,split:!0,preview:!0,fullscreen:!0,theme:!0,exportmd:!0,importmd:!0,save:!1,clear:!1};t.a={name:"markdown",props:{value:{type:[String,Number],default:""},theme:{type:String,default:"light"},width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:600},toolbars:{type:Object,default:function(){return{}}},bordered:{type:Boolean,default:!0},autoSave:{type:Boolean,default:!1},interval:{type:Number,default:1e4},exportFileName:{type:String,default:"unnamed"},markedOptions:{type:Object,default:function(){return{}}},copyCode:{type:Boolean,default:!0},copyBtnText:{type:String,default:"复制代码"},isPreview:{type:Boolean,default:!1},isCustomFullscreen:{type:Boolean,default:!1}},data:function(){return{currentValue:"",timeoutId:null,indexLenth:1,html:"",preview:!1,split:!0,fullscreen:!1,scrollSide:"",lastInsert:"",timerId:null,themeName:"",themeSlideDown:!1,imgSlideDown:!1,imgs:[],scrolling:!0,editorScrollHeight:0,previewImgModal:!1,previewImgSrc:"",previewImgMode:""}},computed:{tools:function(){var e=this.toolbars,t=void 0===e?{}:e;return Object(i.a)({},s,t)}},methods:{insertLink:function(){this.insertContent("\n[link](href)")},insertImage:function(){this.insertContent("\n![image](imgUrl)")},insertTable:function(){this.insertContent("\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2\n\n")},handleSave:function(){var e=this.currentValue,t=this.themeName,n=this.html;this.$emit("on-save",{theme:t,value:e,html:n})},toggleSlideDown:function(){this.slideDown=!this.slideDown},setThemes:function(e){this.themeName=e,this.themeSlideDown=!1,this.$emit("on-theme-change",e)},exportFile:function(){!function(e,t){var n=document.createElement("a");if(n.setAttribute("href","data:text/plain;charset=UTF-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.createEvent){var i=document.createEvent("MouseEvents");i.initEvent("click",!0,!0),n.dispatchEvent(i)}else n.click()}(this.currentValue,this.exportFileName+".md")},importFile:function(e){var t=this,n=e.target.files[0];if(n){var i=n.type;if(["text/markdown","text/src"].includes(i)){var s=new FileReader;s.readAsText(n,{encoding:"utf-8"}),s.onload=function(){t.currentValue=s.result,e.target.value="",t.pro&&t.editor.setOption("value",t.currentValue)},s.onerror=function(e){console.error(e)}}}},handlePaste:function(e,t){for(var n=t.clipboardData,i=void 0===n?{}:n,s=i.types,o=void 0===s?[]:s,r=i.items,a=null,l=0;l<o.length;l++)if("Files"===o[l]){a=r[l];break}if(a){var c=a.getAsFile();/image/gi.test(c.type)&&(this.$emit("on-upload-image",c),t.preventDefault())}},mousescrollSide:function(e){this.scrollSide=e},addImageClickListener:function(){var e=this,t=this.imgs,n=void 0===t?[]:t;if(n.length>0)for(var i=0,s=n.length;i<s;i++)n[i].onclick=null;setTimeout(function(){e.imgs=e.$refs.preview.querySelectorAll("img");for(var t=function(t,n){e.imgs[t].onclick=function(){var n=e.imgs[t].getAttribute("src");e.previewImage(n)}},n=0,i=e.imgs.length;n<i;n++)t(n)},600)},previewImage:function(e){var t=this,n=new Image;n.src=e,n.onload=function(){var i=n.naturalWidth,s=n.naturalHeight;t.previewImgMode=s/i>1.4?"horizontal":"vertical",t.previewImgSrc=e,t.previewImgModal=!0}},chooseImage:function(){var e=this,t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=function(){var n=t.files;n[0]&&(e.$emit("on-upload-image",n[0]),t.value="")},t.click()},addCopyListener:function(){var e=this;setTimeout(function(){var t=document.querySelectorAll(".code-block .copy-code");e.btns=t;for(var n=function(n,i){t[n].onclick=function(){var i=t[n].parentNode.querySelectorAll("pre")[0].innerText,s=document.createElement("input");s.setAttribute("value",i),document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),e.$emit("on-copy",i)}},i=0,s=t.length;i<s;i++)n(i)},600)},onCustom:function(e){this.$emit("on-custom",e)}},destroyed:function(){clearInterval(this.timerId)}}},398:function(e,t,n){"use strict";var i=n(224);n.n(i).a},411:function(e,t,n){"use strict";n.r(t);var i=n(83),s=(n(20),n(48),n(94),n(82)),o={name:"markdown-simple",mixins:[n(226).a],data:function(){return{textareaHeight:this.height}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.currentValue=this.value,this.themeName=this.theme,this.preview=this.isPreview,this.isPreview||setTimeout(function(){var t=e.$refs.textarea;t.focus(),t.addEventListener("keydown",function(t){83===t.keyCode&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),e.handleSave())}),t.addEventListener("paste",e.handlePaste),e.autoSave&&(e.timerId=setInterval(function(){e.handleSave()},e.interval)),e.$emit("on-ready",{vm:e,insertContent:e.insertContent})},20)},insertContent:function(e){this.lastInsert=e;var t=this.getCursortPosition(),n=this.currentValue.substring(t-1,t),i=this.currentValue.substring(t-4,t);if("\n"!==n&&""!==this.currentValue&&"    "!==i){var s="\n"+e;this.insertAfterText(s)}else this.insertAfterText(e)},getCursortPosition:function(){var e=this.$refs.textarea,t=0;if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-this.currentValue.length),t=n.text.length}else(e.selectionStart||0===parseInt(e.selectionStart,0))&&(t=e.selectionStart);return t},insertAfterText:function(e){var t=this.$refs.textarea;if(document.selection)t.focus(),document.selection.createRange().text=e,t.focus();else if(t.selectionStart||0===parseInt(t.selectionStart,0)){var n=t.selectionStart,i=t.selectionEnd,s=t.scrollTop;t.value=t.value.substring(0,n)+e+t.value.substring(i,t.value.length),t.focus(),t.selectionStart=n+e.length,t.selectionEnd=n+e.length,t.scrollTop=s}else t.value+=e,t.focus();this.$set(this,"currentValue",t.value)},setCaretPosition:function(e){var t=this.$refs.textarea;if(t.setSelectionRange)t.focus(),t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}},insertQuote:function(){this.insertContent("\n>  ")},insertUl:function(){this.insertContent("-  ")},insertOl:function(){this.insertContent("1. ")},insertFinished:function(){this.insertContent("- [x]  ")},insertNotFinished:function(){this.insertContent("- [ ]  ")},insertCode:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("\n```\n\n```"),"\n"!==t&&this.currentValue,this.setCaretPosition(e+5)},insertStrong:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("****"),"\n"!==t&&this.currentValue,this.setCaretPosition(e+2)},insertItalic:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("**"),"\n"!==t&&this.currentValue,this.setCaretPosition(e+1)},insertBg:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("===="),"\n"!==t&&this.currentValue,this.setCaretPosition(e+5)},insertUnderline:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("<u></u>"),"\n"!==t&&""!==this.currentValue?this.setCaretPosition(e+3):this.setCaretPosition(e+5)},insertOverline:function(){var e=this.getCursortPosition(),t=this.currentValue.substring(e-1,e);this.insertContent("~~~~"),"\n"!==t&&this.currentValue,this.setCaretPosition(e+2)},insertTitle:function(e){this.insertContent({1:"#  ",2:"##  ",3:"###  ",4:"####  ",5:"#####  ",6:"######  "}[e])},tab:function(e){this.insertContent("    ",this),e.preventDefault?e.preventDefault():e.returnValue=!1},insertLine:function(){this.insertContent("\n----\n")},enter:function(){var e=this.lastInsert;["-  ","1. ","- [ ]  ","- [x]  "].includes(e)&&this.insertContent(e)},onDelete:function(){var e=this.currentValue.split("\n");""===e[e.length-1]&&(this.lastInsert="")},handlePaste:function(e){for(var t=e.clipboardData,n=void 0===t?{}:t,i=n.types,s=void 0===i?[]:i,o=n.items,r=null,a=0;a<s.length;a++)if("Files"===s[a]){r=o[a];break}if(r){var l=r.getAsFile();/image/gi.test(l.type)&&(this.$emit("on-paste-image",l),e.preventDefault())}},markdownScroll:function(){if(this.scrolling&&"left"===this.scroll){var e=this.$refs.markdownEditor,t=this.$refs.preview,n=t.offsetHeight,i=e.scrollHeight,s=e.scrollTop,o=t.scrollHeight;t.scrollTop=parseInt(s/(i-n)*(o-n),0)}},previewScroll:function(){if(this.scrolling&&"right"===this.scroll){var e=this.$refs.markdownEditor,t=this.$refs.preview,n=t.offsetHeight,i=e.scrollHeight,s=t.scrollHeight,o=t.scrollTop;e.scrollTop=parseInt(o/(s-n)*(i-n),0)}},mousescrollSide:function(e){this.scroll=e}},watch:{currentValue:function(){var e=this;clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){var t=e.currentValue,n=Object(s.a)(t,Object(i.a)({sanitize:!1},e.markedOptions)).replace(/href="/gi,'target="_blank" href="');e.copyCode&&""!==n&&(n=n.replace(/<pre>/g,'<div class="code-block"><span class="copy-code">'+e.copyBtnText+"</span><pre>").replace(/<\/pre>/g,"</pre></div>")),e.html=n,e.indexLenth=e.currentValue.split("\n").length,e.textareaHeight=22*e.indexLenth,e.addImageClickListener(),e.addCopyListener(),e.$emit("input",t)},30)},value:function(){this.currentValue!==this.value&&(this.currentValue=this.value)}}},r=(n(398),n(1)),a=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"markdown",class:"markdown "+(e.fullscreen?"fullscreen":"")+" "+(e.bordered?"border":""),style:{width:e.width+("string"==typeof e.width?"":"px"),height:e.height+("string"==typeof e.height?"":"px")}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}],staticClass:"markdown-toolbars"},[n("li",[e._t("title")],2),e._v(" "),e.tools.strong?n("li",{attrs:{name:"粗体"}},[n("span",{staticClass:"iconfont icon-bold",on:{click:e.insertStrong}})]):e._e(),e._v(" "),e.tools.italic?n("li",{attrs:{name:"斜体"}},[n("span",{staticClass:"iconfont icon-italic",on:{click:e.insertItalic}})]):e._e(),e._v(" "),e.tools.overline?n("li",{attrs:{name:"删除线"}},[n("span",{staticClass:"iconfont icon-overline",on:{click:e.insertOverline}})]):e._e(),e._v(" "),e.tools.overline?n("li",{attrs:{name:"下划线"}},[n("span",{staticClass:"iconfont icon-under-line",on:{click:e.insertUnderline}})]):e._e(),e._v(" "),e.tools.h1?n("li",{attrs:{name:"标题1"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(1)}}},[e._v("h1")])]):e._e(),e._v(" "),e.tools.h2?n("li",{attrs:{name:"标题2"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(2)}}},[e._v("h2")])]):e._e(),e._v(" "),e.tools.h3?n("li",{attrs:{name:"标题3"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(3)}}},[e._v("h3")])]):e._e(),e._v(" "),e.tools.h4?n("li",{attrs:{name:"标题4"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(4)}}},[e._v("h4")])]):e._e(),e._v(" "),e.tools.h5?n("li",{attrs:{name:"标题5"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(5)}}},[e._v("h5")])]):e._e(),e._v(" "),e.tools.h6?n("li",{attrs:{name:"标题6"}},[n("span",{staticStyle:{"font-size":"16px"},on:{click:function(t){return e.insertTitle(6)}}},[e._v("h6")])]):e._e(),e._v(" "),e.tools.hr?n("li",{attrs:{name:"分割线"}},[n("span",{staticClass:"iconfont icon-horizontal",on:{click:e.insertLine}})]):e._e(),e._v(" "),e.tools.quote?n("li",{attrs:{name:"引用"}},[n("span",{staticClass:"iconfont icon-quote",staticStyle:{"font-size":"16px"},on:{click:e.insertQuote}})]):e._e(),e._v(" "),e.tools.ul?n("li",{attrs:{name:"无序列表"}},[n("span",{staticClass:"iconfont icon-ul",on:{click:e.insertUl}})]):e._e(),e._v(" "),e.tools.ol?n("li",{attrs:{name:"有序列表"}},[n("span",{staticClass:"iconfont icon-ol",on:{click:e.insertOl}})]):e._e(),e._v(" "),e.tools.code?n("li",{attrs:{name:"代码块"}},[n("span",{staticClass:"iconfont icon-code",on:{click:e.insertCode}})]):e._e(),e._v(" "),e.tools.notChecked?n("li",{attrs:{name:"未完成列表"}},[n("span",{staticClass:"iconfont icon-checked-false",on:{click:e.insertNotFinished}})]):e._e(),e._v(" "),e.tools.checked?n("li",{attrs:{name:"已完成列表"}},[n("span",{staticClass:"iconfont icon-checked",on:{click:e.insertFinished}})]):e._e(),e._v(" "),e.tools.link?n("li",{attrs:{name:"链接"}},[n("span",{staticClass:"iconfont icon-link",on:{click:e.insertLink}})]):e._e(),e._v(" "),e.tools.image?n("li",{attrs:{name:"图片"}},[n("span",{staticClass:"iconfont icon-img",on:{click:e.insertImage}})]):e._e(),e._v(" "),e.tools.uploadImage?n("li",{attrs:{name:"本地图片"}},[n("span",{staticClass:"iconfont icon-upload-img",on:{click:e.chooseImage}})]):e._e(),e._v(" "),e.tools.custom_image?n("li",{attrs:{name:"浏览图片"}},[n("span",{staticClass:"iconfont icon-img",on:{click:e.custom_insertImage}})]):e._e(),e._v(" "),e.tools.custom_uploadImage?n("li",{attrs:{name:"上传图片"}},[n("span",{staticClass:"iconfont icon-upload-img",on:{click:e.custom_chooseImage}})]):e._e(),e._v(" "),e.tools.table?n("li",{attrs:{name:"表格"}},[n("span",{staticClass:"iconfont icon-table",on:{click:e.insertTable}})]):e._e(),e._v(" "),e.tools.theme?n("li",{staticClass:"shift-theme",attrs:{name:"代码块主题"}},[n("div",[n("span",{staticClass:"iconfont icon-theme",on:{click:function(t){e.themeSlideDown=!e.themeSlideDown}}}),e._v(" "),n("ul",{class:{active:e.themeSlideDown},on:{mouseleave:function(t){e.themeSlideDown=!1}}},[n("li",{on:{click:function(t){return e.setThemes("light")}}},[e._v("Light")]),e._v(" "),n("li",{on:{click:function(t){return e.setThemes("dark")}}},[e._v("VS Code")]),e._v(" "),n("li",{on:{click:function(t){return e.setThemes("oneDark")}}},[e._v("Atom OneDark")]),e._v(" "),n("li",{on:{click:function(t){return e.setThemes("gitHub")}}},[e._v("GitHub")])])])]):e._e(),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.tools.importmd,expression:"tools.importmd"}],staticClass:"import-file",attrs:{name:"导入文件"}},[n("span",{staticClass:"iconfont icon-daoru",on:{click:e.importFile}}),e._v(" "),n("input",{attrs:{type:"file",accept:"text/markdown"},on:{change:function(t){return e.importFile(t)}}})]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.tools.exportmd,expression:"tools.exportmd"}],attrs:{name:"保存到本地"}},[n("span",{staticClass:"iconfont icon-download",on:{click:e.exportFile}})]),e._v(" "),e.tools.split&&e.split?n("li",{attrs:{name:"全屏编辑"}},[n("span",{staticClass:"iconfont icon-md",on:{click:function(t){e.split=!1}}})]):e._e(),e._v(" "),e.tools.split&&!e.split?n("li",{attrs:{name:"分屏显示"}},[n("span",{staticClass:"iconfont icon-group",on:{click:function(t){e.split=!0}}})]):e._e(),e._v(" "),e.tools.preview?n("li",{attrs:{name:"预览"}},[n("span",{staticClass:"iconfont icon-preview",on:{click:function(t){e.preview=!0}}})]):e._e(),e._v(" "),e.tools.clear?n("li",{attrs:{name:"清空"},on:{click:function(t){e.value=""}}},[n("span",{staticClass:"iconfont icon-clear"})]):e._e(),e._v(" "),e.tools.save?n("li",{attrs:{name:"保存"},on:{click:e.handleSave}},[n("span",{staticClass:"iconfont icon-save"})]):e._e(),e._v(" "),n("li",{attrs:{name:e.scrolling?"同步滚动:开":"同步滚动:关"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.scrolling,expression:"scrolling"}],staticClass:"iconfont icon-on",on:{click:function(t){e.scrolling=!e.scrolling}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.scrolling,expression:"!scrolling"}],staticClass:"iconfont icon-off",on:{click:function(t){e.scrolling=!e.scrolling}}})]),e._v(" "),n("li",{staticClass:"empty"}),e._v(" "),e.tools.fullscreen&&!e.fullscreen?n("li",{attrs:{name:"全屏"}},[n("span",{staticClass:"iconfont icon-fullscreen",on:{click:function(t){e.fullscreen=!e.fullscreen}}})]):e._e(),e._v(" "),e.tools.fullscreen&&e.fullscreen?n("li",{attrs:{name:"退出全屏"}},[n("span",{staticClass:"iconfont icon-quite",on:{click:function(t){e.fullscreen=!e.fullscreen}}})]):e._e()]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.preview&&!e.isPreview,expression:"preview && !isPreview"}],staticClass:"close-preview",on:{click:function(t){e.preview=!1}}},[n("span",{staticClass:"iconfont icon-close"})]),e._v(" "),n("div",{staticClass:"markdown-content",style:{background:e.preview?"#fff":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}],ref:"markdownEditor",staticClass:"markdown-editor",on:{scroll:e.markdownScroll,mouseenter:function(t){return e.mousescrollSide("markdown")}}},[n("ul",{ref:"index",staticClass:"index",style:{height:e.textareaHeight?e.textareaHeight+"px":"100%"}},e._l(e.indexLenth,function(t){return n("li",{key:t},[e._v("\n                    "+e._s(t)+"\n                ")])}),0),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"textarea",style:{height:e.textareaHeight?e.textareaHeight+"px":"100%"},domProps:{value:e.currentValue},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.tab(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete(t)}],mouseenter:function(t){return e.mousescrollSide("left")},input:function(t){t.target.composing||(e.currentValue=t.target.value)}}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.preview?e.preview:e.split,expression:"preview ? preview : split"}],ref:"preview",class:"markdown-preview markdown-theme-"+e.themeName,on:{scroll:e.previewScroll,mouseenter:function(t){return e.mousescrollSide("right")}}},[n("div",{ref:"previewInner",domProps:{innerHTML:e._s(e.html)}})])]),e._v(" "),n("div",{class:["preview-img",e.previewImgModal?"active":""]},[n("span",{staticClass:"close icon-close iconfont",on:{click:function(t){e.previewImgModal=!1}}}),e._v(" "),n("img",{class:[e.previewImgMode],attrs:{src:e.previewImgSrc,alt:""}})])])},[],!1,null,"1a7d3145",null);t.default=a.exports},94:function(e,t,n){"use strict";var i=n(11),s=n(84)(!0);i(i.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")}}]);