# 缓存管理

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.getCacheSizeDir

> 获取内部缓存目录大小

```js
/**
 * @param callback  回调事件
 */
eeui.getCacheSizeDir(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## eeui.clearCacheDir

> 清空内部缓存目录

```js
/**
 * @param callback  回调事件
 */
eeui.clearCacheDir(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```

## eeui.getCacheSizeFiles

> 获取内部文件目录大小

```js
/**
 * @param callback  回调事件
 */
eeui.getCacheSizeFiles(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## eeui.clearCacheFiles 

> 清空内部文件目录

```js
/**
 * @param callback  回调事件
 */
eeui.clearCacheFiles(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```
## eeui.getCacheSizeDbs

> 获取内部数据库目录大小

```js
/**
 * @param callback  回调事件
 */
eeui.getCacheSizeDbs(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## eeui.clearCacheDbs

> 清空内部数据库目录

```js
/**
 * @param callback  回调事件
 */
eeui.clearCacheDbs(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```


