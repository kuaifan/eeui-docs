# &lt;ripple&gt;

> `<ripple>` 是一个点击元素时，会产生向外扩散的水波纹效果容器。

## 子组件

`<ripple>` 基本容器组件，因此支持包括 `<div>` 在内的任何组件作为自己的子组件。**`<ripple>` 作为点击效果组件，因此所有子组件的点击将失效。**

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 点击事件
 */
@click = function(data) { ... }
```

