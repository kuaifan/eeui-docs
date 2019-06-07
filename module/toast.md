# 吐司提示

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.toast

> 吐司(Toast)提示

```js
/**
 * @param params    详细参数
 */
eeui.toast({params})
```

### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| message | `String` | - | 提示文本 | - |
| gravity | `String` | - | 提示位置，`top`、`middle`、`bottom` | bottom |
| messageColor | `String` | - | 提示文本颜色代码 | #FFFFFF |
| backgroundColor | `String` | - | 提示背景颜色代码 | #FEFFFFFF |
| long | `Boolean` | - | 是否比较长时间显示 | false |
| x | `Number` | - | x轴偏移像素 | 0 |
| y | `Number` | - | y轴偏移像素 | 0 |

### 简单示例

```js
//示例①
eeui.toast('请稍后...');

//示例②
eeui.toast({
    message: '请稍后...',
    gravity: 'middle'
});
```

## eeui.toastClose

> 吐司(Toast)隐藏

```js
eeui.toastClose()
```


