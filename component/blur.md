# &lt;blur&gt; <Tag class="tag" value="2.3.4+"/>

> `<blur>` 是模糊图层组件。

## 子组件

`<blur>` 理论上支持各种类型的子元素。

## 预览效果

![](./media/blur.png)

## 示例代码

在线测试：[https://editor.eeui.app/#/files/eeui/demo/src/pages/blur-demo.vue](https://editor.eeui.app/#/files/eeui/demo/src/pages/blur-demo.vue)

```vue
<template>
    <div class="app">
        <image class="image" src="https://eeui.app/app/demo.png"></image>
        <blur class="blur" amount="30">
            <text class="text">里面放文字</text>
        </blur>
    </div>
</template>

<style scoped>
    .app {
        position: relative;
        flex: 1;
    }
    .image {
        width: 750px;
        height: 560px;
    }
    .blur {
        position: absolute;
        top: 100px;
        left: 150px;
        width: 450px;
        height: 300px;

        align-items: center;
        justify-content: center;
    }
    .text {
        font-size: 26px;
        color: #ff0000;
    }
</style>

<script>
    export default {
        
    };
</script>
```

## 配置参数

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| amount |`Number`  | 模糊程度，范围：0-100           | 30       |
| type |`String`  | 模糊类型：`light`白色、`dark`黑色           | light       |


## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }
```