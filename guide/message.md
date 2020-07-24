# 跨页面通信 <Tag date="20200709" value="2.3.9+"/>

:::tip
在 [平台差异](./difference.html) 篇文中提到过，不同的 eeui 页面使用的是不同的执行环境，即使全局变量也是互相隔离的，然而我们可以使用以下方法实现跨页面通信的。
:::

## 接收消息

```vue
<template>
	...
</template>

<script>
    export default {
        pageMessage: function (data) {
            console.log('接收到的信息：', data.message);
        }
    }
</script>
```

## 发送消息

> 示例

```js
const eeui = app.requireModule('eeui');
eeui.postMessage({
    pageName: 'pageName_1',
    key1: 'val1',
    key2: 'val3',
});
```

> 参数说明

| 属性名 | 类型 | 必须 | 描述 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称（或tabName），留空表示发送给所有页面 |
| ... | `Object` | - | 请根据需求填写其他参数名和参数值 |


* 参数`pageName`名称是指 [eeui.openPage](../module/newPage.html#eeui-openpage) 打开页面时的`pageName`属性值 或 [&lt;tabbar&gt;](../component/tabbar.html#配置参数-tabpages) 组件页面的`tabName`属性值；
* 首页的`pageName`值默认为：`firstPage`。