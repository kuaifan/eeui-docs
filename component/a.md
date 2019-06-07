# &lt;a&gt;

> `<a>` 是一个用于实现页面间的跳转或关闭的组件。

## 子组件

不可以在标签内部直接添加文本，需要使用 `<text>` 标签来显示文本。

## 示例代码

```vue
<template>
    <div class="wrapper">

        <a class="button" href="http://g.tbcdn.cn/amte-fe/amte-resource/0.0.8/fast/show_1.js">
            <text class="text">去主会场</text>
        </a>

        <a class="button" href="-1">
            <text class="text">关闭</text>
        </a>

    </div>
</template>

<style scoped>
    .wrapper {
        align-items: center;
        justify-content: center;
    }
    .button {
        width: 350px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 5px;
        background-color: #3eaf7c;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .text {
        font-size: 48px;
        color: #fff;
        text-align: center;
    }
</style>
```


## 配置参数 `eeui`

>说明：打开页面自定义参数；数据格式：对象数据。

<table>
    <thead>
    <tr>
        <th>属性名</th>
        <th>类型</th>
        <th>描述</th>
        <th>默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>href</td>
        <td><code>String</code></td>
        <td>待跳转的页面 URL，<code>-1</code>为关闭当前页面</td>
        <td>-</td>
    </tr>
    <tr>
        <td>statusBarColor</td>
        <td><code>String</code></td>
        <td>状态栏颜色值</td>
        <td>继承 &gt; #3EB4FF</td>
    </tr>
    <tr>
        <td>backgroundColor</td>
        <td><code>String</code></td>
        <td>页面背景颜色</td>
        <td>继承 &gt; #ffffff</td>
    </tr>
    <tr>
        <td colspan="4">更多参数详见 <a href="/module/newPage.html#eeuiopenpage" class="" data-ss1554876888="1">eeui.openPage</a> 的 params 参数说明</td>
    </tr>
    </tbody>
</table>

> 例如：

```vue
<a 
    href="http://.../xxx.js"
    :eeui="{statusBarColor:'#ff0000'}"><text>红色导航栏</text></a>
```


