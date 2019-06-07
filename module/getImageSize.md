# 获取图片尺寸

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.getImageSize

> 获取图片尺寸

```js
/**
 * @param url    图片地址
 * @param callback  回调事件
 */
eeui.getImageSize(url, callback(result))
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| url | `String` | √ | 图片地址 | - |

### callback 回调`result`说明

```js
{
    status: 'success',      //状态，success
    
    width: 1080,            //图片像素宽
    height: 1920,           //图片像素高
}
```

### 简单示例

```js
//示例
eeui.getImageSize("http://..../xxx.png", (res) => {
    eeui.toast("图片尺寸：宽=" + res.width + "，高=" + res.height);
});
```

