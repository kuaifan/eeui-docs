# &lt;tabbar-page&gt;

> 为组件`<tabbar>`的子组件，详细请看 [这里](./tabbar.html)

## 子组件

支持包括 `<div>` 在内的任何组件作为自己的子组件。因此，在写一个组件时，推荐外层使用 `<div>` 作为根容器。

## 示例代码

```vue
<tabbar-page 
    :eeui="{ 
        tabName: 'name_3', 
        title:'圈子', 
        message:99, 
        selectedIcon:'md-aperture' 
    }">
    <div>
        <text>支持任何子组件</text>
    </div>
</tabbar-page>
```

## 配置参数
>说明：ui自定义；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| tabName |`String`  | tab页签名称         | -       |
| title |`String`  | tab名称         | New Page       |
| unSelectedIcon |`String`  | tab未选图标         | home       |
| selectedIcon |`String`  | tab已选图标         | home       |
| message |`Number`  | tab未读信息数         | 0       |
| dot |`Boolean`  | 是否显示tab未读红点         | false       |

> 例如：

```vue
<tabbar-page 
    :eeui="{ 
        tabName: 'name_3', 
        title:'圈子', 
        message:99, 
        selectedIcon:'md-aperture' 
    }">
    .....
</tabbar-page>
```
## 事件回调 `callback`

无

## 调用方法 `methods`

请参考父级组件 [tabbar](./tabbar.html#调用方法-methods)



