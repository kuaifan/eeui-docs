# 数据储存

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.setCaches

> 保存数据信息

```js
/**
 * @param key       数据键名
 * @param value     数据值，支持格式：String|Boolen|Json|Array|Number
 * @param expired   有效时间（单位：秒），0：不限制有效时间
 */
eeui.setCaches(key, value, expired)
```

## eeui.getCaches

> 获取数据信息

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return mixed        返回格式保持原存储格式
 */
let variable = eeui.getCaches(key, defaultVal)
```

## eeui.setCachesString

> 保存数据信息（文本形式）

```js
/**
 * @param key       数据键名
 * @param value     数据值
 * @param expired   有效时间（单位：秒），0：不限制有效时间
 */
eeui.setCachesString(key, value, expired)
```

## eeui.getCachesString

> 获取数据信息（文本形式）

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return String
 */
let variable = eeui.getCachesString(key, defaultVal)
```

## eeui.getAllCaches

> 获取所有数据信息

```js
/**
 * @return Json 
 */
let variable = eeui.getAllCaches()
```

## eeui.clearAllCaches

> 清除所有数据信息

```js
eeui.clearAllCaches()
```


## eeui.setVariate

> 设置全局变量

```js
/**
 * @param key       数据键名
 * @param value     数据值，支持格式：String|Boolen|Json|Array|Number
 */
eeui.setVariate(key, value)
```

## eeui.getVariate

> 获取全局变量

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return mixed        返回格式保持原存储格式
 */
let variable = eeui.getVariate(key, defaultVal)
```

## eeui.getAllVariate

> 获取所有全局变量

```js
/**
 * @return Json 
 */
let variable = eeui.getAllVariate()
```

## eeui.clearAllVariate

> 清除所有全局变量

```js
eeui.clearAllVariate()
```
