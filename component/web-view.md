# &lt;web-view&gt;

> `<web-view>` 是一个网页容器。

## 子组件

无

## 示例代码

```vue
<template>
    <div class="app">

        <web-view ref="reflectName" class="webview"> </web-view>

    </div>
</template>

<style>
    .app {
        width: 750px;
        flex: 1;
    }

    .webview {
        flex: 1;
    }
</style>

<script>
    export default {
        mounted() {
            this.$refs.reflectName.setUrl('https://eeui.app');
        }
    };
</script>
```


## 配置参数

| 属性名                                                             | 类型     | 描述                          | 默认值     |
|-----------------------------------------------------------------| ------ | -------------------------- | ------- |
| url                                                             |`String`  | 网页地址           | -       |
| content                                                         |`String`  | 网页内容           | -       |
| progressbarVisibility                                           |`Boolean`  | 是否显示进度条           | true       |
| scrollEnabled                                                   |`Boolean`  | 是否可以滚动           | true       |
| enableApi                                                       |`Boolean`  | 开启eeui等原生交互模块，详见：注①           | true       |
| userAgent                                                       |`String`  | 自定义浏览器userAgent（保留原有的UA）           | -       |
| customUserAgent                                                 |`String`  | 完全自定义浏览器userAgent（去除原有的UA）           | -       |
| transparency <Tag date="20200213" value="2.0.0+"/>              |`Boolean`  | 设置背景透明（前提是网页背景也是透明，否则无效）           | false       |
| hiddenDone <Tag date="20220518" :value="['仅iOS', '2.5.1+']"/> |`Boolean`  | 隐藏键盘done部分           | false       |

> 例如：

```vue
//示例1
<web-view
    ref="reflectName"
    url="https://eeui.app"></web-view>
    
//示例2
<web-view
    ref="reflectName2"
    content="网页内容....."></web-view>
```

> 注①：

JS支持调用的原生模块如下：（另注：插件市场内的插件是否支持web-view调用且看每个插件开发而异。）

```js
//综合模块
let eeui = requireModuleJs("eeui");

//路由模块
let navigator = requireModuleJs("navigator");

//导航标题栏模块
let navigationBar = requireModuleJs("navigationBar");

//浏览器调用方法
let webview = requireModuleJs("webview");

//【插件市场】城市选择器
let citypicker = requireModuleJs("eeui/citypicker");

//【插件市场】图片选择模块
let picture = requireModuleJs("eeui/picture");

//【插件市场】支付模块
let pay = requireModuleJs("eeui/pay");
```

例如：

```js
let eeui = requireModuleJs("eeui");
eeui.adDialog("http://..../xxx.png", function(res) {
    eeui.toast("状态：" + res.status);
});
```

- `eeui`：综合模块，如：[eeui.adDialog](../module/adDialog.html)
- `navigator`：[路由模块](../module/navigator.html)
- `navigationBar`：[导航标题栏模块](../navigationBar.html)
- `citypicker`：[城市选择器](../markets/eeui/citypicker)
- `picture`：[图片选择模块](../markets/eeui/picture)
- `pay`：[支付模块](../markets/eeui/pay)
- `webview`：[浏览器调用方法](../component/web-view.html#浏览器调用方法)

#### JS调用原生API示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <style type="text/css">
        .scan {
            font-size: 14px;
            margin: 32px;
            text-align: center;
        }
    </style>
    <script type="text/javascript">
        function openScan() {
            let eeui = requireModuleJs("eeui");
            eeui.openScaner({}, function(res) {
                switch (res.status) {
                    case "success":
                        eeui.toast("识别成功：" + res.text);
                        break;

                    case "failed":
                        eeui.toast("识别失败");
                        break;
                }
            });
        }
        function $ready() {
            //网页加载完成时组件会自动执行此方法
        }
    </script>
</head>
<body>
    <div class="scan" onclick="openScan()">打开扫一扫</div>
</body>
</html>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 监听状态发生改变
 * 返回参数：data = {
                    status:'success',       //状态，注②
                    
                    title: '网页标题',       //仅【status=title】存在
                    url: 'http://....',     //仅【status=url】存在
                    
                    errCode: '',            //仅【status=error】存在
                    errMsg: '',             //仅【status=error】存在
                    errUrl: '',             //仅【status=error】存在
                }
 */
@stateChanged = function(data) { ... }

/**
 * 监听网页高度发生改变
 * 返回参数：data = {
                    height:100,             //变化的高度
                }
 */
@heightChanged = function(data) { ... }

/**
 * 监听网页向组件发送消息
 * 返回参数：data = {
                    message:123456,             //详细消息
                }
 */
@receiveMessage = function(data) { ... }
```

> 注②：

- `start`开始加载
- `success`加载完毕
- `error`加载错误
- `title`标题发生改变
- `url`网页地址发生改变

## 调用方法 `methods`

```js
/**
 * 设置浏览器内容
 * 参数一：详细内容
 */
this.$refs.reflectName.setContent(string);

/**
 * 设置浏览器地址
 * 参数一：地址，如：https://eeui.app
 */
this.$refs.reflectName.setUrl(url);

/**
 * 向浏览器内发送js代码
 * 参数一：js代码，如：alert('demo');
 */
this.$refs.reflectName.setJavaScript(javascript);

/**
 * 是否可以后退
 * 
 * 回调 result: true|false
 */
this.$refs.reflectName.canGoBack(callback(result));

/**
 * 后退并返回是否后退成功
 * 
 * 回调 result: true|false
 */
this.$refs.reflectName.goBack(callback(result));

/**
 * 是否可以前进
 * 
 * 回调 result: true|false
 */
this.$refs.reflectName.canGoForward(callback(result));

/**
 * 前进并返回是否前进成功
 * 
 * 回调 result: true|false
 */
this.$refs.reflectName.goForward(callback(result));

/**
 * 设置是否显示进度条
 * 参数一：true|false
 */
this.$refs.reflectName.setProgressbarVisibility(true);

/**
 * 设置是否可以滚动
 * 参数一：true|false
 */
this.$refs.reflectName.setScrollEnabled(true);

```

## 浏览器内js调用原生api方法

```js
let webview = requireModuleJs("webview");

/**
 * 设置浏览器内容
 * 参数一：详细内容
 */
webview.setContent(string);

/**
 * 设置浏览器地址
 * 参数一：地址，如：https://eeui.app
 */
webview.setUrl(url);

/**
 * 向组件发送信息，组件通过receiveMessage事件获取信息
 * 参数一：要发送的数据，如：123456
 */
webview.sendMessage(url);

/**
 * 是否可以后退
 * 
 * 回调 result: true|false
 */
webview.canGoBack(callback(result));

/**
 * 后退并返回是否后退成功
 * 
 * 回调 result: true|false
 */
webview.goBack(callback(result));

/**
 * 是否可以前进
 * 
 * 回调 result: true|false
 */
webview.canGoForward(callback(result));

/**
 * 前进并返回是否前进成功
 * 
 * 回调 result: true|false
 */
webview.goForward(callback(result));

/**
 * 设置是否显示进度条
 * 参数一：true|false
 */
webview.setProgressbarVisibility(true);

/**
 * 设置是否可以滚动
 * 参数一：true|false
 */
webview.setScrollEnabled(true);

```