# 二维码扫描

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.openScaner

> 二维码扫描页面

### 预览效果

![](./media/ezgif-4-3b09f9a395.gif)

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
eeui.openScaner({params}, callback(result))
```

### 示例代码

```vue
<template>
    <div class="app">

        <text class="button" @click="openScaner">打开二维码扫描</text>

    </div>
</template>

<style>
    .app {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .button {
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
        color: #ffffff;
        background-color: #00B4FF;
    }
</style>

<script>
    const eeui = app.requireModule('eeui');

    export default {
        methods: {
            openScaner() {
                eeui.openScaner({}, (res)=>{
                    switch (res.status) {
                        case "success":
                            eeui.toast("识别成功：" + res.text);
                            break;

                        case "error":
                            eeui.toast("识别失败");
                            break;
                    }
                });
            },
        }
    };
</script>
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| title | `String` | - | 扫码页面标题 <Tag value="2.2.2+"/> | - |
| desc | `String` | - | 扫码页面描述文字 | - |
| continuous | `Boolean` | - | 是否连续扫码 <Tag value="2.2.2+"/> | false |


### callback 回调`result`说明

```js
{
    pageName: '页面名称',
    status: 'create',   //状态，详见：注①
    
    //status=success
    source: 'photo',    //扫码识别来源，photo：照片、camera：相机
    result: { ... },    //扫码识别详细数据
    format: 'CODE_128', //扫码识别的类型
    text: 'http://...', //扫码识别内容
    
    //status=error
    source: 'photo',    //扫码失败来源，photo：照片、camera：相机
}
```

> 注①：

- `create`页面创建完毕
- `destroy`页面已销毁
- `success`扫码识别成功
- `error`扫码识别失败
- `openLight`打开闪光灯
- `offLight`关闭闪光灯

### 简单示例

```js
//示例①
eeui.openScaner({}, function(result) {
    //......
});

//示例②
eeui.openScaner({
    desc: '二维码/条码',
    desc: '对准中间就开始扫吧',
}, function(result) {
    //......
});
```

