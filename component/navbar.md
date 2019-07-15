# &lt;navbar&gt;

[[toc]]

> 导航栏有4个主要部分：返回按钮、左侧、标题和右侧。每个部分可能包含任何内容，但建议按以下方式使用它们：

* 返回按钮部分被设计为“后退链接”。
* 左侧部分被设计为显示在左边的内容（主要用于自定义“后退连接”）。
* 标题部分用于显示页面标题或标签链接（按钮行/分段控制器）。
* 右半部分被设计为显示在右边的内容。

## 子组件

仅支持子组件`<navbar-item>`详细请看 [这里](#navbar-item)

## 预览效果

![](./media/ezgif-5-a47590e158.png)

## 示例代码

```vue
<template>
    <div>

        <!--样式①-->
        <navbar class="navbar">

            <navbar-item type="back"></navbar-item>

            <navbar-item type="title">
                <text>标题</text>
            </navbar-item>

        </navbar>

        <!--样式②-->
        <navbar class="navbar" :eeui="{titleType:'left'}">

            <navbar-item type="back"></navbar-item>

            <navbar-item type="title">
                <text>标题</text>
            </navbar-item>

        </navbar>

        <!--样式③-->
        <navbar class="navbar">

            <navbar-item type="back"></navbar-item>

            <navbar-item type="title">
                <text>标题</text>
            </navbar-item>

            <navbar-item type="right">
                <icon icon="refresh" class="icon"></icon>
            </navbar-item>

        </navbar>

        <!--样式④-->
        <navbar class="navbar">

            <navbar-item type="left">
                <icon icon="navicon-round" class="icon"></icon>
            </navbar-item>

            <navbar-item type="title">
                <text>标题</text>
            </navbar-item>

            <navbar-item type="right">
                <icon icon="refresh" class="icon"></icon>
            </navbar-item>

        </navbar>

        <!--样式⑤-->
        <navbar class="navbar">

            <!--返回按钮-->
            <navbar-item type="back"></navbar-item>

            <!--左边内容-->
            <navbar-item type="left">
                <text>左边内容</text>
            </navbar-item>

            <!--中间内容(标题内容)-->
            <navbar-item type="title">
                <text>中间(标题)内容</text>
            </navbar-item>

            <!--右边内容-->
            <navbar-item type="right">
                <text>右边内容</text>
            </navbar-item>

        </navbar>

    </div>
</template>

<style>
    .navbar {
        width: 750px;
        height: 100px;
        margin-bottom: 50px;
    }
    .icon {
        width: 100px;
        height: 100px;
    }
</style>
```


## 配置参数 `eeui`
>说明：ui自定义；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| titleType |`String`  | 标题对齐方式，`left`、`right`、`middle`         | middle       |
| backgroundColor |`String`  | 背景颜色         | #3EB4FF       |

> 例如：

```vue
<navbar 
    ref="reflectName"
    class="navbar" 
    :eeui="{titleType:'left'}"></navbar>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 子组件`<navbar-item type="back">`的返回事件
 */
@goBack = function() { ... }
```

## 调用方法 `methods`

```js
/**
 * 显示返回按钮
 */
this.$refs.reflectName.showBack();

/**
 * 隐藏返回按钮
 */
this.$refs.reflectName.hideBack();
```

## navbar-item

> 支持放置任何组件作为自己的子组件（除配置参数`type="back"`不支持以外）。

### navbar-item 示例代码

```vue
<navbar-item type="title">
    <text>标题</text>
</navbar-item>
```

### navbar-item 配置参数

>说明：子组件类型；数据格式：字符串。

| 类型     | 描述                          | 默认值     |
| ------ | -------------------------- | ------- |
|`String`  | 所属类型 (`back`/`left`/`title`/`right`)           | -       |

注意：`type='back'`类型不支持子组件
> 例如：

```vue
<navbar-item type="title">
    .....
</navbar-item>
```

```vue
<navbar-item type="back"></navbar-item>
```
