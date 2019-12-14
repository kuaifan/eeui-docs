# 系统信息

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.getStatusBarHeight

> 获取状态栏高度（屏幕像素）

```js
/**
 * @return int
 */
let variable = eeui.getStatusBarHeight()
```

## eeui.getStatusBarHeightPx

> 获取状态栏高度（px单位）

```js
/**
 * @return int
 */
let variable = eeui.getStatusBarHeightPx()
```

## eeui.getNavigationBarHeight

> 获取虚拟键盘高度（屏幕像素）

```js
/**
 * @return int
 */
let variable = eeui.getNavigationBarHeight()
```

## eeui.getNavigationBarHeightPx

> 获取虚拟键盘高度（px单位）

```js
/**
 * @return int
 */
let variable = eeui.getNavigationBarHeightPx()
```

## eeui.compareVersion

> 比较版本号的大小,前者大则返回一个正数,后者大返回一个负数,相等则返回0

```js
/**
 * @param version1      比较的版本1
 * @param version2      比较的版本2
 * 
 * @return int
 */
let variable = eeui.compareVersion(version1, version2)
```

## eeui.getImei

> 获取手机的IMEI（注：Android返回IMEI，iOS返回IFA）

```js
/**
 * @return String
 */
let variable = eeui.getImei()
```

## eeui.getIfa

> 获取手机的IFA（注：Android返回IMEI，iOS返回IFA）

```js
/**
 * @return String
 */
let variable = eeui.getIfa()
```

## eeui.isIPhoneXType

> 判断是否iPhone X系列。（含：X(max)、XS(max)、XR(max)）

```js
/**
* @返回 Boolean
 */
let variable = eeui.isIPhoneXType()
```


