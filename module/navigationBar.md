# 导航标题栏

> 需要加载的模块

```js
const navigationBar = app.requireModule('navigationBar');
```

## navigationBar.setTitle

* 设置页面标题

```js
/**
 * @param params    详细参数
 * @param callback  点击标题回调事件，result回调内容为params传入参数
 */
navigationBar.setTitle({params}, callback(result))
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| title | `String` | √ | 标题 | - |
| titleColor | `String` | - | 标题字体颜色 | #232323 |
| titleSize | `Float` | - | 标题字体大小 | 32.0 |
| subtitle | `String` | - | 副标题 | - |
| subtitleColor | `String` | - | 副标题字体颜色 | #232323 |
| subtitleSize | `Float` | - | 副标题字体大小 | 24.0 |
| backgroundColor | `String` | - | 标题栏背景颜色 | #3EB4FF |


## navigationBar.setLeftItem

* 设置标题栏左边按钮

```js
/**
 * @param params    详细参数
 * @param callback  点击按钮回调事件，result回调内容为params传入参数
 */
navigationBar.setLeftItem({params}, callback(result))
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| title | `String` | - | 按钮标题（与图标必须一） | - |
| titleColor | `String` | - | 按钮标题字体颜色 | #232323 |
| titleSize | `Float` | - | 按钮标题字体大小 | 28.0 |
| icon | `String` | - | 按钮图标，注① | - |
| iconColor | `String` | - | 按钮图标字体颜色 | #232323 |
| iconSize | `Float` | - | 按钮图标字体大小（图标大小） | 28.0 |
| width | `Number` | - | 按钮宽度，留空自适应 | - |
| spacing | `Number` | - | 按钮标题与按钮图标间距 | 10 |

> 注①：

- 支持字体图标，如：`md-add`、`ios-cube`，更多图标代码详见<a href="../assets/icon/index.html" target="_blank">eeui所有图标</a>。
- 支持远程图片地址，如：`https://eeui.app/app/demo.png`，此时不支持`iconColor`参数。

> 简单示例

```js
//示例: 纯文字
navigationBar.setLeftItem({
    title: '按钮1',
}, function(result) {
    //....
});
```

> 综合示例

```vue
<template>
    <div class="app">
        <text class="text">EEUI 菜单栏演示</text>
    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');
    const navigationBar = app.requireModule('navigationBar');

    export default {
        mounted() {
            //示例: 图标+文字
            navigationBar.setLeftItem({
                icon: 'tb-back',
                title: '返回',
                width: 120,
            }, function(result) {
                eeui.closePage();
            });

            //示例: 多个按钮模式
            navigationBar.setRightItem([{
                icon: 'md-help-circle-outline',
                iconSize: 32,
                title: '按钮1',
            }, {
                title: '按钮2',
                width: 120,
            }], function(result) {
                eeui.alert("点击按钮：" + result.title);
            });
        },
    }
</script>

<style scoped>
    .app {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .text {
        font-size: 24px;
    }
</style>
```

## navigationBar.setRightItem

* 设置标题栏右边按钮，调用参数同见`navigationBar.setLeftItem`。

## navigationBar.show

* 手动显示标题栏，使用`navigationBar.setTitle`方法时自动显示标题栏。

## navigationBar.hide

* 手动隐藏标题栏。

