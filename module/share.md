# 文字图片分享

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.shareText

> 调用系统分享文字

```js
/**
 * @param text
 */
eeui.shareText(text)
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| text | `String` | √ | 分享的文字内容 | - |


### 简单示例

```js
//示例
eeui.shareText("如果你喜欢 eeui，可以通过 Star 来表示，https://github.com/kuaifan/eeui");
```

## eeui.shareImage

> 调用系统分享图片

```js
/**
 * @param imgUrl
 */
eeui.shareImage(imgUrl)
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| imgUrl | `String` | √ | 分享的图片地址 | - |


### 简单示例

```js
//示例
eeui.shareImage("https://eeui.app/app/demo.png");
```

