# 保存图片至本地

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.saveImage

> 保存图片至本地

```js
/**
 * @param url    图片地址
 * @param callback  回调事件
 */
eeui.saveImage(url, callback(result))
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| url | `String` | √ | 图片地址 | - |

### callback 回调`result`说明

```js
{
    status: 'success',      //状态，success、error
    
    path: '本地图片地址',    //仅status=success有
    error: '错误详情',     //仅status=error有
}
```

### 简单示例

```js
//示例
eeui.saveImage("http://..../xxx.png", (res) => {
    eeui.toast("状态：" + res.status);
});
```

