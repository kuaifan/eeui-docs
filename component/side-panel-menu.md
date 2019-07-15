# &lt;side-panel-menu&gt;

> 为组件`<side-panel>`的子组件，详细请看 [这里](./side-panel.html)

## 子组件

支持任何组件作为自己的子组件。

## 示例代码

```vue
<side-panel-menu class="panel_menu" name="菜单1">
    <text>菜单①</text>
</side-panel-menu>
```

## 配置参数

>说明：子组件类型；数据格式：字符串。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| name |`String`  | 菜单名称（用于父组件点击返回的标识）           | -       |

> 例如：

```vue
<side-panel-menu name="menu_1">
    .....
</side-panel-menu>
```
## 事件回调 `callback`

无

## 调用方法 `methods`

无



