# &lt;view&gt; <Tag class="tag" value="2.3.3+"/>

> `<view>` 是通用容器（与`<div>`基本一致）。

::: tip
* 不要在 `<view>` 中直接添加文本，而要使用 `<text>` 组件。
* 在 eeui 中，`<view>` 不可滚动，而要使用 `<scroll-view>` 等支持滚动的组件。
* 要控制 `<view>` 的层级，建议不要超过14层，否则会很影响页面性能。
:::

## 子组件

`<view>` 支持各种类型的子元素，包括 `<view>` 自己。

## 样式

* **通用样式** 支持所有[通用样式](../weex/styles/common-styles.html)。

## 事件

* **通用事件** 支持所有[通用事件](../weex/events/common-events.html)。

## 组件事件

除了通用事件，`<view>` 另外还支持以下事件回调。

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 内容尺寸发生改变
 * 返回参数：data = {
                    width: 750,     //改变后的内容宽度
                    height: 1000,   //改变后的内容高度
                }
 */
@resize = function(data) { ... }
```