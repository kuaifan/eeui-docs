# 版本功能

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.getVersion 

* 获取eeui版本号

```js
/**
 * @return int
 */
let variable = eeui.getVersion()
```

## eeui.getVersionName

* 获取eeui版本号名称

```js
/**
 * @return String
 */
let variable = eeui.getVersionName()
```

## eeui.getLocalVersion

* 获取本地软件版本号

```js
/**
 * @return int
 */
let variable = eeui.getLocalVersion()
```

## eeui.getLocalVersionName

* 获取本地软件版本号名称

```js
/**
 * @return String
 */
let variable = eeui.getLocalVersionName()
```

## eeui.getSDKVersionCode

> 获取设备系统版本号

```js
/**
* @返回 Number
 */
let variable = eeui.getSDKVersionCode()
```

## eeui.getSDKVersionName

> 获取设备系统版本名称

```js
/**
* @返回 String
 */
let variable = eeui.getSDKVersionName()
```

## eeui.getUpdateId <Tag date="20191214" :value="['1.0.35+']"/>

* 获取已热更新至的数据ID（为0表示没有热更新）

```js
/**
 * @return int
 */
let variable = eeui.getUpdateId()
```

## eeui.checkUpdate <Tag date="20191205" :value="['1.0.33+']"/>

* 客户端主动触发热更新事件

```js
eeui.checkUpdate();
```

