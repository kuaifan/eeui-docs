# 保存图片至本地

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.saveImage

> 保存图片至本地

```js
/**
 * @param url       图片地址
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


## eeui.saveImageTo <Tag date="20191214" :value="['1.0.34+']"/>

> 保存图片至本地（指定目录名称，仅Android指定目录有效，iOS系统只能保存到系统相册）

```js
/**
 * @param url       图片地址
 * @param childDir  指定目录名称
 * @param callback  回调事件
 */
eeui.saveImageTo(url, childDir, callback(result))
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| url | `String` | √ | 图片地址 | - |
| childDir | `String` | - | 指定目录名称（iOS无效：iOS系统只能保存到系统相册） | - |

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
eeui.saveImageTo("http://..../xxx.png", "myapp", (res) => {
    eeui.toast("状态：" + res.status);
});
```

