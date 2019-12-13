# 打开其他APP

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.openOtherApp

> 打开常用第三方APP

```js
/**
 * @param type    APP
 */
eeui.openOtherApp(type)
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| type | `String` | √ | 要打开的APP：<br/>`wx`、`qq`、`alipay`、`jd` | - |


### 简单示例

```js
//示例
eeui.openOtherApp("wx");
```


## eeui.openOtherAppTo

> 打开其他第三方APP

```js
/**
 * @param pkg           Android：包名、iOS：url
 * @param cls           Android：启动页、iOS：url参数
 * @param callback      回调事件
 */
eeui.openOtherAppTo(pkg, cls, callback(result))
```

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pkg | `String` | √ | Android：包名、iOS：url | - |
| cls | `String` | √ | Android：启动页、iOS：url参数 | - |


### callback 回调`result`说明

```js
{
    status: 'success',      //状态，success、error
    error: '错误详情',     
}
```

### 简单示例

```js
//示例 - Android打开微信
eeui.openOtherAppTo("com.tencent.mm", "com.tencent.mm.ui.LauncherUI", function(result) {
    if (result.status == "success") {
        //打开成功
    }else{
        //打开失败
    }
});

//示例 - iOS打开微信
eeui.openOtherAppTo("weixin", "", function(result) {
    if (result.status == "success") {
        //打开成功
    }else{
        //打开失败
    }
});

```

