# 数据储存

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.setCachesString

> 保存数据信息

```js
/**
 * @param key       数据键名
 * @param value     数据值
 * @param expired   有效时间（单位：秒），0：不限制有效时间
 */
eeui.setCachesString(key, value, expired)
```

## eeui.getCachesString

> 获取数据信息

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return String
 */
let variable = eeui.getCachesString(key, defaultVal)
```

## eeui.setVariate

> 设置全局变量

```js
/**
 * @param key       数据键名
 * @param value     数据值
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
 * @return String
 */
let variable = eeui.getVariate(key, defaultVal)
```

