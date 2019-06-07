# 组件截图

> 首次使用请执行

```bash
eeui plugin add screenshots
```

> 模块引用方式

```js
const screenshots = app.requireModule('screenshots');
```

## 截图功能 

> `screenshots.shots` 截图功能，传入ref，即可得到组件的截图

```js
/**
 * @param ref       组件的ref
 * @param callback  回调事件
 */
screenshots.shots(ref, callback(result))
```

##### ref 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| ref | `Object` | √ | vue对象 | - |

##### callback 回调`result`说明

```js
{
    status: 'success',   //状态：success、error
    path: ''          //图片路径
    msg: ''           //详细消息
}
```

##### 简单示例

```vue
<template>
    <div class="app">
        <div ref="main" class="main">
            <image class="img" :src="img"></image>
            <text class="txt">{{src}}</text>
            <button class="button" text="截屏" @click="shots"></button>
        </div>
    </div>
</template>
<style>
    .app{align-items:center;justify-content:center}
    .main{align-items:center;justify-content:center}
    .txt{font-size:22px;margin-bottom:20px}
    .img{width:300px;height:400px;margin-bottom:20px;background-color:red}
    .button{font-size:24px;margin-left:37px;margin-right:37px;margin-bottom:20px;width:300px;height:80px}
</style>
<script>
    export default {
        data() {
            return {
                src: '',
                img: ''
            }
        },
        methods: {
            shots() {
                let screenshots = app.requireModule('screenshots');
                screenshots.shots(this.$refs.main, (p) => {
                    if (p.status == 'success') {
                        this.src = p.path;
                        this.img = "file://" + p.path + "?r=" + Math.random();
                    }
                });
            }
        }
    }
</script>
```




