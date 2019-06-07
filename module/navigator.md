# 路由

> 需要加载的模块

```js
const navigator = app.requireModule('navigator');
```

## navigator.push

* 载入（打开）新`App Js页面` 或 载入（打开）新`Web页面`

* 此模块与`eeui.openPage`一致，只是调用名称不同。

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
navigator.push({params}, callback(result))
```

> params 参数说明、callback 回调说明

详细使用说明见[eeui.openPage](../module/newPage.html#eeuiopenpage)。



## navigator.pop

* 弹出（关闭）页面

* 此模块与`eeui.closePage`基本一致，多了回调功能。

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
navigator.pop({params}, callback(result))
```

> params 参数说明

详细使用说明见[eeui.closePage](../module/newPage.html#eeuiclosepage)

> callback 回调说明

回调与`navigator.push`的回调一致。

