# 页面功能

> 需要加载的模块

```js
const eeui = app.requireModule('eeui');
```

## eeui.openPage

* 打开新`App Js页面` 或 打开新`Web页面`

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
eeui.openPage({params}, callback(result))
```

> params 参数说明（参数支持url字符串请求，如：`http://abc.com/xxx.js?statusBarType=immersion`）

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| url | `String` | √ | `App Js`或`Web Url`地址<br/>①支持本地地址，如：`xxx.js`<br/>②支持远程地址，如：`http://abc.com/xxx.js` | - |
| pageName | `String` | - | 页面名称 | - |
| pageTitle | `String` | - | 页面标题，设置显示标题栏<br/><Stis>statusBarType 为 normal 时有效。[(标题栏更多设置)](./navigationBar.html)</Stis> | - |
| pageType | `String` | - | 页面类型：`app`、`web`<br/><Stis>可填写 auto 系统自动识别 (不建议)</Stis> | app |
| params |`Object`  | - | 页面传递参数，通过`app.config.params`获取         | -       |
| cache | `Number` | - | 页面缓存时间，仅`app`类型且`非本地页面`有效，<br/>设置`0`不缓存（单位：毫秒） | 0 |
| loading | `Boolean` | - | 是否显示等待效果：`true`、`false` | true |
| loadingBackground <Tag date="20190924" :value="['仅Android', '1.0.16+']"/> | `Boolean` | - | 是否显示等待效果过渡背景：`true`、`false` | false |
| animated | `Boolean` | - | 是否进入页面需要动画效果：`true`、`false` | true |
| animatedType | `String` | - | 页面动画效果类型：<br/>`push` 右侧打开<br/>`present` 底部弹出<br/><Stis>animated 为 true 时有效</Stis> | iOS:push<br/>Android:跟随系统 |
| swipeBack | `Boolean` | - | 是否支持滑动返回：`true`、`false` | true |
| swipeFullBack | `Boolean` | - | 是否支持全屏滑动返回：`true`、`false`<br/><Stis>swipeBack 为 true 时有效</Stis> | false |
| statusBarType | `String` | - | 状态栏样式：<br/>`normal` 正常<br/>`fullscreen` 全屏<br/>`immersion` 沉浸式 | normal |
| statusBarColor | `String` | - | 状态栏颜色值<br/><Stis>statusBarType 为 normal 时有效</Stis> | 继承 &gt; #3EB4FF |
| statusBarAlpha | `Number` | - | 状态栏透明度， 0-255<br/><Stis>statusBarType 为 normal 时有效</Stis> | 0 |
| statusBarStyle | `Boolean` | - | 状态栏字体颜色：<br/>`true` 状态栏的字体为白色<br/>`false` 状态栏的字体为黑色 | iOS:黑<br/>Android:白 |
| softInputMode | `String` | - | 键盘弹出方式：<br/>详见下文 `params.softInputMode 参数说明` | auto |
| backgroundColor | `String` | - | 页面背景颜色 | 继承 &gt; #ffffff |
| backPressedClose | `Boolean` | - | 允许按返回键关闭页面 <Tag value="仅Android"/> | true |
| safeAreaBottom | `Number` | - | iPhone X+底部安全距离 <Tag value="仅iOS"/> | - |

> params.softInputMode 参数说明

| 值 | 说明 |
| --- | --- |
| auto | iOS：当显示软键盘时，自动调整window的布局；<br/>Android：系统去判断内容区域可滚动为pan,不可滚动为resize。|
| pan | iOS：当显示软键盘时，自动调整window的布局；<br/>Android：当显示软键盘时，调整window的空白区域来显示软键盘。|
| resize | 当显示软键盘时，自动调整window的布局。 |
| nothing | 当显示软键盘时，不调整window的布局。 |

> callback 回调`result`说明

```js
{
    pageName: '页面名称',
    status: 'create',   //状态，详见：注①
    
    //status=statusChanged|errorChanged|titleChanged
    webStatus: '',  //Web状态
    
    //status=errorChanged
    errCode: '',    //错误代码
    errMsg: '',     //错误描述
    errUrl: '',     //错误地址
    
    //status=titleChanged
    title: '',      //网页标题
}
```

> 注①：

- `create`页面创建完毕
- `start`页面正在启动
- `resume`页面已在前台可见
- `pause`页面正在停止
- `stop`页面即将停止或者完全被覆盖
- `restart`页面正在重新启动
- `destroy`页面已销毁
- `viewCreated`AppJS第一个视图的呈现完成
- `renderSuccess`AppJS呈现视图阶段结束
- `error`AppJS运行时报告异常
- `statusChanged`Web状态发生改变
- `errorChanged`Web运行时报告异常
- `titleChanged`Web标题发生改变

> 简单示例

```js
const eeui = app.requireModule('eeui');
//示例①
eeui.openPage({
    url: 'http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx',
}, function(result) {
    //......
});

//示例②
eeui.openPage({
    url: 'http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx?statusBarType=immersion',
}, function(result) {
    //......
});

//示例③
eeui.openPage({
    pageName: 'pageName_1',
    pageType: 'app',
    url: 'xxxx.js'
}, function(result) {
    //......
});

//示例④
eeui.openPage({
    pageType: 'web',
    url: 'https://eeui.app'
}, function(result) {
    //......
});
```

## eeui.getPageInfo

* 获取页面信息

```js
/**
 * @param params    详细参数
 */
eeui.getPageInfo({params})
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空获取当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
let variable = eeui.getPageInfo({
    pageName: 'pageName_1',
});

//示例②
let variable = eeui.getPageInfo('pageName_1');

//variable返回示例
{
　　"url": "http://....../dist/index.js",
　　"pageName": "open_qGRQ9fHP",
　　"pageType": "app",
　　"params": { },
　　"cache": 0,
　　"loading": true,
　　"swipeBack": true,
　　"swipeFullBack": false,
　　"statusBarType": "default",
　　"statusBarColor": "#3EB4FF",
　　"statusBarAlpha": 0,
　　"softInputMode": "auto",
　　"translucent": false,
　　"backgroundColor": "#f4f8f9",
　　"backPressedClose": true,
}
```

## eeui.getPageInfoAsync

* 获取页面信息（异步）

```js
/**
 * @param params    详细参数
 */
eeui.getPageInfoAsync({params}, callback(pageInfo))
```

## eeui.reloadPage

* 重新加载`App Js页面` 或 `Web页面`

```js
/**
 * @param params    详细参数
 */
eeui.reloadPage({params})
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空重载当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
eeui.reloadPage({
    pageName: 'pageName_1',
});

//示例②
eeui.reloadPage('pageName_1');
```

## eeui.setSoftInputMode

* 设置键盘弹出方式

```js
/**
 * @param params        页面名称参数
 * @param mode          键盘弹出方式：
                           auto 默认值，由系统决定如何处理
                           pan 若键盘盖住输入框，页面不会自动上移
                           resize 若键盘盖住输入框，页面会自动上移
 */
eeui.setSoftInputMode({params}, mode)
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空表示当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
eeui.setSoftInputMode({
    pageName: 'pageName_1',
}, 'pan');

//示例②
eeui.setSoftInputMode('pageName_1', 'resize');
```

## eeui.setPageBackPressed

* 拦截返回按键事件<Tag value="仅Android"/>

```js
/**
 * @param params    页面名称参数
 * @param callback  返回键触发事件
 */
eeui.setPageBackPressed({params}, callback())
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空拦截当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
eeui.setPageBackPressed({
    pageName: 'pageName_1',
}, function(){
    //返回键触发事件
});

//示例②
eeui.setPageBackPressed('pageName_1', function(){
    //返回键触发事件
});
```

## eeui.setOnRefreshListener

* 仅对`App Js页面`有效，监听下拉刷新事件，下拉刷新事件结束后请使用`eeui.setRefreshing(pageName, false)`设置下拉刷新结束状态

```js
/**
 * @param params    页面名称参数
 * @param callback  下拉刷新回调事件
 */
eeui.setOnRefreshListener({params}, callback(pageName))
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空表示当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
eeui.setOnRefreshListener({
    pageName: 'pageName_1',
}, function(pageName){
    //下拉刷新回调事件
    eeui.setRefreshing(pageName, false);
});

//示例②
eeui.setOnRefreshListener('pageName_1', function(pageName){
    //下拉刷新回调事件
    eeui.setRefreshing(pageName, false);
});
```

## eeui.setRefreshing

* 仅对`App Js页面`有效，设置下拉刷新状态，主要用于`eeui.setOnRefreshListener`回调处理完成后设置结束状态

```js
/**
 * @param params        页面名称参数
 * @param refreshing    状态：true|fals
 */
eeui.setRefreshing({params}, refreshing)
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空表示当前页面（不建议留空） | - |


## eeui.setStatusBarStyle

* 修改当前页面状态栏样式（字体颜色）

```js
/**
 * @param isLight       详见 isLight 参数说明 
 */
eeui.setStatusBarStyle(isLight)
```
> isLight 参数说明

* `true`状态栏的字体为白色
* `false`状态栏的字体为黑色


## eeui.setPageStatusListener

* 添加监听页面状态变化

```js
/**
 * @param params        监听名称(参数)
 * @param callback      回调事件，参数详见【eeui.openPage】的回调事件
 */
eeui.setPageStatusListener({params}, callback(result))
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| listenerName | `String` | √ | 监听名称（用于防止重复监听） | - |
| pageName | `String` | - | 页面名称，留空表示当前页面 | - |

> 简单示例

```js
//示例①
eeui.setPageStatusListener('listenerName_1', function(pageName){
    //回调事件，参数详见【eeui.openPage】的回调事件
});

//示例②
eeui.setPageStatusListener({
    listenerName: 'listenerName_1',
    pageName: 'pageName_1',
}, function(pageName){
    //回调事件，参数详见【eeui.openPage】的回调事件
});
```

## eeui.clearPageStatusListener

* 清除监听页面状态变化

```js
/**
* @param params        监听名称(参数)
 */
eeui.clearPageStatusListener({params})
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| listenerName | `String` | √ | 监听名称 | - |
| pageName | `String` | - | 页面名称，留空表示当前页面 | - |

> 简单示例

```js
//示例①
eeui.clearPageStatusListener('listenerName');

//示例②
eeui.clearPageStatusListener({
    listenerName: 'listenerName_1',
    pageName: 'pageName_1',
});
```

## eeui.onPageStatusListener

* 手动执行(触发)页面状态

```js
/**
 * @param params        监听名称(参数)
 * @param status        状态标识
 */
eeui.onPageStatusListener({params}, status)
```
> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| listenerName | `String` | - | 监听名称，留空表示当前页面所有 | - |
| pageName | `String` | - | 页面名称，留空表示当前页面 | - |
| extra | `Object` | - | 额外传递参数 | - |

> 简单示例

```js
//示例①
eeui.onPageStatusListener('status_1');

//示例②
eeui.onPageStatusListener('listenerName_1', 'status_1');

//示例③
eeui.onPageStatusListener({
    listenerName: 'listenerName_1',
    pageName: 'pageName_1',
}, 'status_1');
```

## eeui.getCacheSizePage

* 获取`App Js页面`缓存大小

```js
/**
 * @param callback  回调事件，{size:123123}，单位：字节B
 */
eeui.getCacheSizePage(callback(result))
```

## eeui.clearCachePage

* 手动清除缓存`App Js页面`

```js
eeui.clearCachePage()
```

## eeui.closePage

* 关闭`App Js页面` 或 `Web页面`

```js
/**
 * @param params    详细参数
 */
eeui.closePage({params})
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空关闭当前页面（不建议留空） | - |
| animated | `Boolean` | - | 是否弹出页面需要动画效果：`true`、`false` | true |

> 简单示例

```js
//示例①
eeui.closePage({
    pageName: 'pageName_1',
});

//示例②
eeui.closePage('pageName_1');
```

## eeui.closePageTo

* 关闭至某个`App Js页面` 或 `Web页面`
* 场景示例：目前顺序打开a、b、c、d、e五个页面，e为当前页面，想要直接回到a页面时可以使用此方法。

```js
/**
 * @param params    详细参数
 */
eeui.closePageTo({params})
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| pageName | `String` | - | 页面名称，留空关闭当前页面（不建议留空） | - |

> 简单示例

```js
//示例①
eeui.closePageTo({
    pageName: 'pageName_1',
});

//示例②
eeui.closePageTo('pageName_1');
```

## eeui.openWeb

* 调用系统浏览器打开页面

```js
/**
 * @param url
 */
eeui.openWeb(url)
```
> url 参数说明

| 类型 | 必须 | 描述 | 默认值 |
| --- | :-: | --- | --- |
|  `String` | √ | 打开的页面url | - |


> 简单示例

```js
eeui.openWeb('https://eeui.app');
```

## eeui.goDesktop

* 返回手机桌面<Tag value="仅Android"/>

```js
/**
 * @param url
 */
eeui.goDesktop()
```

## eeui.getConfigString

* 获取eeui.config.js配置文件指定参数

```js
/**
 * @param key 参数名称
 * @return String
 */
let appKey = eeui.getConfigString("appKey");
```

## eeui.setCustomConfig

* 自定义eeui.config.js配置参数（比如：用于动态设置homePage主页的JS地址）
* **注意：有新的热更新或通过系统级清理app缓存后`eeui.setCustomConfig`设置的内容将失效**。

```js
/**
 * @param key 参数名称（类型：字符串）
 * @param value 参数值（类型：Object）
 */
eeui.setCustomConfig("homePage", "index.js");
```

## eeui.getCustomConfig

* 获取eeui.config.js所有自定义的配置参数（仅返回自定义的配置参数）

```js
/**
 * @return Object
 */
let config = eeui.getCustomConfig();
```

## eeui.clearCustomConfig

* 清除eeui.config.js自定义的配置参数（仅清除自定义的配置参数）

```js
eeui.clearCustomConfig();
```

## eeui.realUrl

* 规范化url，删除多余的符号连接（比如'/./', '/../' 以及多余的'/'）

```js
/**
 * @param url 要处理的原地址
 * @return String
 */
let newUrl = eeui.realUrl("http://abc.com/aa/bb/cc/.././demo.js");
```

## eeui.rewriteUrl

* 将相对地址基于当前地址补全

```js
/**
 * @param url 要补全的相对地址
 * @return String
 */
let newUrl = eeui.rewriteUrl("demo.js");
```

