# 环境变量

## WXEnvironment

每个 eeui 页面的 JS 上下文中都有一个相互独立的 `eeui` 变量，它可以像全局变量一样使用，不过它在不同页面中是隔离而且*只读*的。

**eeui 环境变量中的字段**:

| 字段名          | 类型    | 描述 |
| -------------- | ------ | ----------- |
| `WXEnvironment.platform`     | String | 运行平台，Android 或者 iOS。 |
| `WXEnvironment.appName`      | String | 应用的名称 |
| `WXEnvironment.appVersion`   | String | 应用的版本。 |
| `WXEnvironment.osName`       | String | 系统的名称，Android 或者 iOS。 |
| `WXEnvironment.osVersion`    | String | 系统版本。 |
| `WXEnvironment.deviceModel`  | String | 手机设备型号。 |
| `WXEnvironment.deviceWidth`  | Number | 设备宽度。 |
| `WXEnvironment.deviceHeight` | Number | 设备高度。 |

### 例子：
```vue
<template>
  <div>
    <text class="text">当前手机型号为：{{model}}</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        model: WXEnvironment.deviceModel
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 38px;
    color: #00B4FF;
  }
</style>
```

## `document`

`app.document` 是当前页面的文档模型对象，可以用来创建和操作 DOM 树中元素。它是 eeui DOM API 规范的一部分，但是它和 [W3C 的 DOM 规范](https://www.w3.org/DOM/)中的 `document` 对象是不同的。

而且，在使用了现代化的前端框架（如 Vue 和 Rax）的情况下，直接操作 DOM 并不是最佳实践。更何况**在 eeui 平台里并不一定有真实的 DOM**，在 Android 和 iOS 端上都是模拟出来的。

这个接口主要是用在 Vue 和 Rax 框架内部，用于将 virtual-dom 转换成渲染执行，并且发送给 eeui 客户端的渲染引擎。不建议在开发页面时使用。

## `requireModule`

对于那些不依赖 UI 交互的原生功能，eeui 将其封装成**模块**，这是一种通过 javascript 调用原生能力的方法。除了[内置模块](../modules/adDialog.html)以外，将已有的原生模块移植到 eeui 平台也很方便。你可以使用 `app.requireModule` 接口引用自定义的或者内置的模块。

```typescript
app.requireModule(name: string): Object | void;
```

**参数：**

+ 大小写敏感的模块名。

**返回值：**

+ 如果模块已经注册了，返回一个 `Proxy` 对象（如果环境不支持 `Proxy` 则返回一个普通对象），可以使用这个对象调用客户端注册的方法。
+ 如果模块未注册，返回 `undefined`。

### 使用原生模块

你可以像使用不同 javascript 函数一样使用原生注册的接口。这里是一个简单的使用[eeui 模块](../module/toast.html)的例子：

```html
<template>
  <div><text>Toast</text></div>
</template>
<script>
  const eeui = app.requireModule('eeui');
  eeui.toast({
      message: 'I am a toast.',
      gravity: 'middle'
  });
</script>
```

## `supports`

你应该了解 eeui 的组件和模块都是可以注册和配置的，这样导致了在不同环境中组件和模块的支持情况不一样。你可以使用 `app.supports` 接口在运行期检测某个功能在当前环境中是否可用。

```typescript
app.supports(condition: string): boolean | void;
```

**参数：**

+ 特定格式的字符串：`@{type}/{name}`。

`type` 必须是 `"component"` 和 `"module"` 之一。`name` 可以是标签名、模块名，也可以指定模块中的某个方法名（和模块名用 `.` 隔开）。

**返回值：**

+ 支持该特性，则返回 `true`。
+ 不支持该特性，则返回 `false`。
+ 参数格式错误或无法确定是否支持，则返回 `null`。

### 使用范例

检测某个组件是否可用：

```js
app.supports('@component/slider') // true
app.supports('@component/my-tab') // false
```

检测某个模块是否可用：

```js
app.supports('@module/stream')  // true
app.supports('@module/abcdef')  // false
```

检测某个模块是否包含某个方法：

```js
app.supports('@module/dom.getComponentRect') // true
app.supports('@module/navigator.jumpToPage') // false
```

无效的输入：

```js
app.supports('div') // null
app.supports('module/*') // null
app.supports('@stream/fetch') // null
app.supports('getComponentRect') // null
```

## `isRegisteredModule`

检测某个特定的模块或者接口是否可用。

```typescript
app.isRegisteredModule(moduleName: string, methodName: string): boolean
```

这个接口只能用于检测特定模块和方法的兼容性，不支持检测组件。

```js
app.isRegisteredModule('stream') // true
app.isRegisteredModule('stream', 'fetch') // true
app.isRegisteredModule('whatever', '- unknown -') // false
app.isRegisteredModule('div') // false, not support components
```

## `isRegisteredComponent`

检测某个特定的组件是否可用。

```typescript
app.isRegisteredComponent(componentName: string): boolean
```

这个接口只能用于检测组件的兼容性，不支持检测模块。

```js
app.isRegisteredComponent('div') // true
app.isRegisteredComponent('- unknown -') // false
app.isRegisteredComponent('navigator') // false, not support modules