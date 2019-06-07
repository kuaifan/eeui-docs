# &lt;tabbar&gt;

> `<tabbar>`为页面滑动切换组件（别名：标签页）

 * 常用于`tab`切换页面。
 * 支持`url`页面（`tabPages`模式）。
 * 支持以 `<tabbar-page>`子组件编写的页面。
 * 支持顶部、底部高自定义选项卡。

## 子组件

仅支持`<tabbar-page>`组件作为标签页内容，详细请看 [这里](./tabbar-page.html)。

## 预览效果

![](./media/ezgif-5-6bfcba7e08.gif)

## 示例代码

```vue
<template>
    <div class="app">

        <tabbar
                ref="reflectName"
                class="tabbar"
                :eeui="{ tabType: 'bottom' }"
                @pageSelected="pageSelected"
                @tabReselect="tabReselect"
                @refreshListener="refreshListener">

            <!--页签①-->
            <tabbar-page :eeui="{ tabName: 'name_1', title:'首页', selectedIcon:'md-home' }">
                <navbar class="page-navbar">
                    <navbar-item type="back"></navbar-item>
                    <navbar-item type="title">
                        <text class="page-navbar-title">首页</text>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <text style="font-size:24px">页签里面可以放任何子组件，感谢你对eeui的支持</text>
                    <image src="https://eeui.app/assets/images/cartoon/m2.png" class="page-content-image"></image>
                </div>
            </tabbar-page>

            <!--页签②-->
            <tabbar-page :eeui="{ tabName: 'name_2', title:'好友', message:3, selectedIcon:'https://eeui.app/assets/images/cartoon/m8.png' , unSelectedIcon:'https://eeui.app/assets/images/cartoon/m7.png' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">好友</text>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <text style="font-size:24px">page 2，图标支持网络图片</text>
                </div>
            </tabbar-page>

            <!--页签③-->
            <tabbar-page :eeui="{ tabName: 'name_3', title:'圈子', message:99, selectedIcon:'md-aperture' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">圈子</text>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <text style="font-size:24px">page 3</text>
                </div>
            </tabbar-page>

            <!--页签④-->
            <tabbar-page :eeui="{ tabName: 'name_4', title:'设置', dot:true, selectedIcon:'md-cog' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">设置</text>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <text style="font-size:24px">page 4</text>
                </div>
            </tabbar-page>

        </tabbar>

    </div>
</template>

<style>
    .app {
        flex: 1
    }

    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .tabbar {
        width: 750px;
        flex: 1;
    }

    .page-content {
        width: 750px;
        padding-top: 200px;
        justify-content: center;
        align-items: center;
    }

    .page-navbar {
        width: 750px;
        height: 90px;
    }

    .page-navbar-title {
        color: #ffffff;
        font-size: 28px;
    }

    .page-content-image {
        width: 480px;
        height: 480px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>

<script>

    const eeui = app.requireModule('eeui');

    export default {
        methods: {
            pageSelected(params) {
                eeui.toast({
                    message: "切换到第" + (params.position + 1) + "个标签页",
                    gravity: "middle"
                });
            },
            tabReselect(params) {
                eeui.toast({
                    message: "第" + (params.position + 1) + "个标签页被再次点击",
                    gravity: "middle"
                });
                eeui.toast();
            },
            refreshListener(params) {
                setTimeout(() => {
                    eeui.toast({
                        message: "刷新成功：第" + (params.position + 1) + "个标签页",
                        gravity: "middle"
                    });
                    this.$refs.reflectName.setRefreshing(params['tabName'], false);
                }, 1000);
            }
        }
    };
</script>
```

## 配置参数 `eeui`

>说明：tab自定义ui；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| tabType |`String`  | 设置tab位置，<br/>顶部:`top`<br/>顶部滑动:`slidingTop`<br/>底部:`bottom`          | bottom       |
| tabHeight |`Number`  | 设置tab高度           | 100       |
| tabBackgroundColor |`String`  |   设置tab的背景颜色         |  #3EB4FF，底部位置：#ffffff     |
| tabWidth |`Number`  |   设置tab固定大小         |  -     |
| tabPageAnimated |`Boolean`  |   开关页面切换动画         |  true     |
| indicatorColor |`String`  |   设置tab显示器颜色         |  #ffffff    |
| indicatorHeight |`Number`  |  设置tab显示器高度          |  4     |
| indicatorWidth |`Number`  |   设置tab显示器固定宽度         |  20     |
| indicatorCornerRadius |`Number`  |   设置tab显示器圆角弧度         |  2     |
| underlineGravity |`Number`  |  设置tab下划线位置，<br/>上方:`1`<br/>下方:`0`          |  0     |
| underlineColor |`String`  |  设置tab下划线颜色          | #ffffff      |
| underlineHeight |`Number`  | 设置tab下划线高度           |  0     |
| dividerColor |`String`  |  设置tab分割线颜色          |  #ffffff     |
| dividerWidth |`Number`  |  设置tab分割线宽度          |  0     |
| dividerPadding |`Number`  |  设置tab分割线的上下内边距          |  12     |
| textBold |`Number`  | 设置tab字体加粗，<br/>不加粗:`0`<br/>选择加粗:`1`<br/>全部加粗:`2`           |  0     |
| textSize |`Number`  |  设置tab字体大小          |  26     |
| textSelectColor |`String`  |  设置tab字体选中颜色          |  #ffffff，底部位置：#2C97DE     |
| textUnselectColor |`String`  |   设置tab字体未选中颜色         |  #eeeeee，底部位置：#333333     |
| iconVisible <Badge text="slidingTop 无效" type="warning"/> |`Boolean`  | 设置tab图标是否可见           |  false，底部位置：true     |
| iconGravity <Badge text="slidingTop 无效" type="warning"/> |`Number`  |  设置tab图标显示位置，<br/>上方:`1`<br/>下方:`0`          |  1     |
| iconWidth <Badge text="slidingTop 无效" type="warning"/> |`Number`  |  设置tab图标宽度          |  40     |
| iconHeight <Badge text="slidingTop 无效" type="warning"/> |`Number`  |   设置tab图标高度         |  40     |
| iconMargin <Badge text="slidingTop 无效" type="warning"/> |`Number`  |  设置tab图标与文字间距          |  10     |

> 例如：

```vue
<tabbar
    ref="reflectName"
    :eeui="{ tabType: 'bottom' }"></tabbar>
```

## 配置参数 `tabPages`

>说明：`tabPages`模式支持`url`定义页面；数据格式：对象数组。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| tabName |`String`  | tab页签名称         | -       |
| title |`String`  | tab名称         | New Page       |
| url |`String`  | App Js文件`url`地址<br/>①支持本地地址，如：`xxx.js`<br/>②支持远程地址，如：`http://abc.com/xxx.js`         | -       |
| unSelectedIcon |`String`  | tab未选图标         | home       |
| selectedIcon |`String`  | tab已选图标         | home       |
| params |`Object`  | tab页面传递参数，通过`app.config.params`获取         | -       |
| cache | `Number` | tab页面缓存时间，设置`0`不缓存（单位：毫秒） | 0 |
| message |`Number`  | tab未读信息数         | 0       |
| dot |`Boolean`  | 是否显示tab未读红点         | false       |
| statusBarColor | `String` | 状态栏颜色值，默认：隐藏<br/>_主要用于主页面沉浸式时设置每个页面不同的状态栏效果_ | - |

> 例如：

```vue
<tabbar
    ref="reflectName"
    :tabPages="[ {
                    title: '首页',
                    url: 'http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx',
                }, {
                    title: '好友',
                    url: 'xxxx.js',
                    message: 9
                } ]"></tabbar>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 标签页切换时调用，滑动被停止之前一直调用
 * 返回参数：data = {position: 1, positionOffset: 1, positionOffsetPixels: 100}
 */
@pageScrolled = function(data) { ... }

/**
 * 标签页切换完成调用
 * 返回参数：data = {position: 1}
 */
@pageSelected = function(data) { ... }

/**
 * 标签页状态改变的时候调用
 * 返回参数：data = {state: 1}
 */
@pageScrollStateChanged = function(data) { ... }

/**
 * 标签被点击选择
 * 返回参数：data = {position: 1}
 */
@tabSelect = function(data) { ... }

/**
 * 标签被再次点击选择
 * 返回参数：data = {position: 1}
 */
@tabReselect = function(data) { ... }

/**
 * 标签页下拉刷新事件
 * 注：刷新处理完毕后请使用调用方法“setRefreshing(tabName, false)”恢复状态
 * 返回参数：data = {tabName: 'tabName', position: 1}
 */
@refreshListener = function(data) { ... }

/**
 * 标签页创建完毕
 * 返回参数：data = {tabName: 'tabName', url: '...'}
 */
@viewCreated = function(data) { ... }

/**
 * 标签页视图滚动事件（滚动完成后调用）
 * 返回参数：data = {tabName: 'tabName', x: 0, y: 100}
 */
@scrolled = function(data) { ... }

/**
 * 标签页视图滚动状态发生变化
 * 返回参数：data = {tabName: 'tabName', x: 0, y: 100, newState: 0}
 */
@scrollStateChanged = function(data) { ... }
```

## 调用方法 `methods`

```js
/**
 * 根据页签名称获取页签位置
 * 参数一：页签名称
 * 返回参数：页签位置
 */
this.$refs.reflectName.getTabPosition(tabName);

/**
 * 根据页签位置获取页签名称
 * 参数一：页签位置
 * 返回参数：页签名称
 */
this.$refs.reflectName.getTabName(2);

/**
 * 显示tab未读信息数量
 * 参数一：页签名称
 * 参数二：未读数量
 */
this.$refs.reflectName.showMsg(tabName, 5);

/**
 * 显示tab未读红点
 * 参数一：页签名称
 */
this.$refs.reflectName.showDot(tabName);

/**
 * 隐藏tab未读信息数及未读红点
 * 参数一：页签名称
 */
 this.$refs.reflectName.hideMsg(tabName);

/**
 * 删除指定tab页
 * 参数一：页签名称
 */
this.$refs.reflectName.removePageAt(tabName);

/**
 * 切换tab页
 * 参数一：页签名称
 */
this.$refs.reflectName.setCurrentItem(tabName);

/**
 * 设置tab页下拉刷新状态
 * 参数一：页签名称
 * 参数二：true|false
 */
this.$refs.reflectName.setRefreshing(tabName, false);

/**
 * tab页跳转url（仅：tabPages模式支持）
 * 参数一：页签名称
 * 参数二：跳转的App Js文件地址
 */
this.$refs.reflectName.goUrl(tabName, 'http://....');

/**
 * tab页刷新（仅：tabPages模式支持）
 * 参数一：页签名称
 */
this.$refs.reflectName.reload(tabName);

/**
 * 设置tab位置
 * 参数一：top|bottom
 */
this.$refs.reflectName.setTabType('top');

/**
 * 设置tab高度
 * 参数一：高度
 */
this.$refs.reflectName.setTabHeight(100);

/**
 * 设置tab背景颜色
 * 参数一：颜色代码
 */
this.$refs.reflectName.setTabBackgroundColor('#ffffff');

/**
 * 设置tab字体大小
 * 参数一：字体大小
 */
this.$refs.reflectName.setTabTextsize(22);

/**
 * 设置tab字体加粗
 * 参数一：0|1|2
 */
this.$refs.reflectName.setTabTextBold(0);

/**
 * 设置tab未选字体颜色
 * 参数一：颜色代码
 */
this.$refs.reflectName.setTabTextUnselectColor('#ffffff');

/**
 * 设置tab已选字体颜色
 * 参数一：颜色代码
 */
this.$refs.reflectName.setTabTextSelectColor('#00ffff');

/**
 * 设置tab图标可见
 * 参数一：true|false
 */
this.$refs.reflectName.setTabIconVisible(true);

/**
 * 设置tab图标宽度
 * 参数一：宽度
 */
this.$refs.reflectName.setTabIconWidth(50);

/**
 * 设置tab图标高度
 * 参数一：高度
 */
this.$refs.reflectName.setTabIconHeight(50);

/**
 * 开关页面切换动画
 * 参数一：true|false
 */
this.$refs.reflectName.setTabPageAnimated(false);
```


