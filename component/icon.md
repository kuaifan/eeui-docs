# &lt;icon&gt;

> 使用开源字体库 Ionicons、Iconfont 进行封装

## 子组件

不支持子组件。

## 预览效果

![](./media/ezgif-5-ec26a79647.gif)

## 示例代码

```vue
<template>
    <scroll-view class="lists" :eeui="{ row: 5, pullTipsNo: '' }">

        <div v-for="item in iconLists" class="item" @click="copyIcon(item)">
            <icon class="icon" :eeui="{ content: item, fontSize: 38 }"></icon>
            <text class="text">{{item}}</text>
        </div>

    </scroll-view>
</template>

<style>
    .lists {
        width: 750px;
        flex: 1;
    }
    .item {
        width: 150px;
        height: 160px;
    }
    .icon {
        width: 150px;
        height: 110px;
    }
    .text {
        width: 150px;
        height: 50px;
        text-align: center;
    }
</style>

<script>
    const eeui = app.requireModule('eeui');

    export default {
        data() {
            return {
                iconLists: [
                    "tb-1111", "tb-1212", "tb-activity", "tb-activity-fill", "tb-add", "tb-add-1", "tb-add-light", "tb-address-book", "tb-album", "tb-all", "tb-appreciate", "tb-appreciate-fill", "tb-appreciate-fill-light", "tb-appreciate-light", "tb-apps", "tb-arrow-left-fill", "tb-arrow-up-fill", "tb-ask", "tb-ask-fill", "tb-attention", "tb-attention-favor", "tb-attention-favor-fill", "tb-attention-fill", "tb-attention-forbid", "tb-attention-forbid-fill", "tb-attention-light", "tb-auction", "tb-baby", "tb-baby-fill", "tb-back", "tb-back-android", "tb-back-android-light", "tb-back-delete", "tb-back-light", "tb-back-ward-fill", "tb-bad", "tb-barcode", "tb-big", "tb-brand", "tb-brand-fill", "tb-calendar", "tb-camera", "tb-camera-add", "tb-camera-add-fill", "tb-camera-fill", "tb-camera-light", "tb-camera-rotate", "tb-cardboard", "tb-cardboard-fill", "tb-cardboard-forbid", "tb-cart", "tb-cart-fill", "tb-cart-fill-light", "tb-cart-light", "tb-cascades", "tb-change", "tb-check", "tb-choiceness", "tb-choiceness-fill", "tb-circle", "tb-circle-fill", "tb-close", "tb-close-light", "tb-clothes", "tb-clothes-fill", "tb-coffee", "tb-coin", "tb-command", "tb-command-fill", "tb-comment", "tb-comment-fill", "tb-comment-fill-light", "tb-comment-light", "tb-community", "tb-community-fill", "tb-community-fill-light", "tb-community-light", "tb-copy", "tb-countdown", "tb-countdown-fill", "tb-creative", "tb-creative-fill", "tb-crown", "tb-crown-fill", "tb-cut", "tb-delete", "tb-delete-fill", "tb-delete-light", "tb-deliver", "tb-deliver-fill", "tb-discover", "tb-discover-fill", "tb-down", "tb-down-light", "tb-dress", "tb-edit", "tb-edit-light", "tb-emoji", "tb-emoji-fill", "tb-emoji-flash-fill", "tb-emoji-light", "tb-evaluate", "tb-evaluate-fill", "tb-exit", "tb-explore", "tb-explore-fill", "tb-expressman", "tb-favor", "tb-favor-fill", "tb-favor-fill-light", "tb-favor-light", "tb-female", "tb-file", "tb-filter", "tb-flashbuy-fill", "tb-flashlight-close", "tb-flashlight-open", "tb-focus", "tb-fold", "tb-footprint", "tb-form", "tb-form-favor-light", "tb-form-fill", "tb-form-fill-light", "tb-form-light", "tb-forward", "tb-forward-fill", "tb-friend", "tb-friend-add", "tb-friend-add-fill", "tb-friend-add-light", "tb-friend-famous", "tb-friend-favor", "tb-friend-fill", "tb-friend-light", "tb-friend-settings-light", "tb-full", "tb-furniture", "tb-game", "tb-global", "tb-global-light", "tb-goods", "tb-goods-favor", "tb-goods-favor-light", "tb-goods-fill", "tb-goods-hot-fill", "tb-goods-light", "tb-goods-new", "tb-goods-new-fill", "tb-goods-new-fill-light", "tb-goods-new-light", "tb-group", "tb-group-fill", "tb-group-fill-light", "tb-group-light", "tb-haodian", "tb-home", "tb-home-fill", "tb-home-fill-light", "tb-home-light", "tb-hot", "tb-hot-fill", "tb-hot-light", "tb-hua", "tb-info", "tb-info-fill", "tb-ju", "tb-juhuasuan", "tb-keyboard", "tb-keyboard-light", "tb-light", "tb-light-auto", "tb-light-fill", "tb-light-forbid", "tb-like", "tb-like-fill", "tb-link", "tb-list", "tb-living", "tb-loading", "tb-loading-a", "tb-loading-b", "tb-loading-c", "tb-loading-d", "tb-location", "tb-location-fill", "tb-location-light", "tb-lock", "tb-magic", "tb-mail", "tb-male", "tb-mao", "tb-mark", "tb-mark-fill", "tb-medal", "tb-medal-fill", "tb-medal-fill-light", "tb-medal-light", "tb-message", "tb-message-fill", "tb-message-fill-light", "tb-message-light", "tb-mobile", "tb-mobile-fill", "tb-mobile-tao", "tb-money-bag", "tb-money-bag-fill", "tb-more", "tb-more-android", "tb-more-android-light", "tb-more-light", "tb-move", "tb-music-fill", "tb-music-forbid-fill", "tb-my", "tb-my-fill", "tb-my-fill-light", "tb-my-light", "tb-new", "tb-new-fill", "tb-news", "tb-news-fill", "tb-news-fill-light", "tb-news-hot", "tb-news-hot-fill", "tb-news-hot-fill-light", "tb-news-hot-light", "tb-news-light", "tb-notice", "tb-notice-fill", "tb-notice-forbid-fill", "tb-notification", "tb-notification-fill", "tb-notification-forbid-fill", "tb-oppose-fill-light", "tb-oppose-light", "tb-order", "tb-paint", "tb-paint-fill", "tb-pay", "tb-people", "tb-people-fill", "tb-people-list", "tb-people-list-light", "tb-phone", "tb-phone-light", "tb-pic", "tb-pic-fill", "tb-pic-light", "tb-pick", "tb-play-fill", "tb-play-forward-fill", "tb-post", "tb-present", "tb-present-fill", "tb-profile", "tb-profile-fill", "tb-profile-light", "tb-pull-down", "tb-pull-down-1", "tb-pull-left", "tb-pull-right", "tb-pull-up", "tb-punch", "tb-punch-light", "tb-qi", "tb-qiang", "tb-qrcode-light", "tb-qrcode", "tb-question", "tb-question-fill", "tb-radiobox", "tb-radiobox-fill", "tb-rank", "tb-rank-fill", "tb-read", "tb-recharge", "tb-recharge-fill", "tb-record", "tb-record-fill", "tb-record-light", "tb-redpacket", "tb-redpacket-fill", "tb-refresh", "tb-refresh-arrow", "tb-refresh-light", "tb-refund", "tb-remind", "tb-repair", "tb-repair-fill", "tb-repeal", "tb-right", "tb-round", "tb-round-add", "tb-round-add-fill", "tb-round-add-light", "tb-round-check", "tb-round-check-fill", "tb-round-close", "tb-round-close-fill", "tb-round-close-fill-light", "tb-round-close-light", "tb-round-comment-light", "tb-round-crown-fill", "tb-round-down", "tb-round-down-light", "tb-round-favor-fill", "tb-round-friend-fill", "tb-round-left-fill", "tb-round-light-fill", "tb-round-like-fill", "tb-round-link-fill", "tb-round-list-light", "tb-round-location-fill", "tb-round-menu-fill", "tb-round-pay", "tb-round-pay-fill", "tb-round-people-fill", "tb-round-rank-fill", "tb-round-record-fill", "tb-round-redpacket", "tb-round-redpacket-fill", "tb-round-right", "tb-round-right-fill", "tb-round-shop-fill", "tb-round-skin-fill", "tb-round-text-fill", "tb-round-ticket", "tb-round-ticket-fill", "tb-round-transfer", "tb-round-transfer-fill", "tb-safe", "tb-same", "tb-same-fill", "tb-scan", "tb-scan-light", "tb-search", "tb-search-light", "tb-search-list", "tb-search-list-light", "tb-selection", "tb-selection-fill", "tb-send", "tb-service", "tb-service-fill", "tb-service-light", "tb-settings", "tb-settings-light", "tb-shake", "tb-share", "tb-share-light", "tb-shop", "tb-shop-fill", "tb-shop-light", "tb-similar", "tb-skin", "tb-skin-fill", "tb-skin-light", "tb-sort", "tb-sort-light", "tb-sound", "tb-sound-light", "tb-sponsor", "tb-sponsor-fill", "tb-sports", "tb-square", "tb-square-check", "tb-square-check-fill", "tb-stop", "tb-suan", "tb-subscription", "tb-subscription-light", "tb-subtitle-block-light", "tb-subtitle-unblock-light", "tb-tag", "tb-tag-fill", "tb-tao", "tb-tao-qianggou", "tb-tao-xiaopu", "tb-taxi", "tb-text", "tb-tian", "tb-tianmao", "tb-ticket", "tb-ticket-fill", "tb-ticket-money-fill", "tb-time", "tb-time-fill", "tb-tmall", "tb-top", "tb-triangle-down-fill", "tb-triangle-up-fill", "tb-unfold", "tb-unlock", "tb-upblock", "tb-upload", "tb-upstage", "tb-upstage-fill", "tb-use-full", "tb-use-full-fill", "tb-video", "tb-video-fill", "tb-video-fill-light", "tb-video-light", "tb-vip", "tb-vip-code-light", "tb-vipcard", "tb-voice", "tb-voice-fill", "tb-voice-light", "tb-wang", "tb-wang-fill", "tb-wang-light", "tb-warn", "tb-warn-fill", "tb-warn-light", "tb-we", "tb-we-fill", "tb-we-fill-light", "tb-we-light", "tb-we-block", "tb-we-unblock", "tb-weibo", "tb-wifi", "tb-write", "tb-write-fill", "tb-xiami", "tb-xiami-forbid", "tb-xiaoheiqun", "tb-ye"
                ]
            }
        },
        methods: {
            copyIcon(text) {
                eeui.copyText(text);
                eeui.toast("复制成功：" + text);
            }
        }
    };
</script>

```

## 配置参数 `eeui`
>说明：ui自定义；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| content  |`String`  | 图标的名称，注①            | home       |
| text  |`String`  | 同`content`            | -       |
| color         |`String`  | 图标颜色            | #242424       |
| fontSize      |`Number`  | 图标的大小  | 38 |
| clickColor         |`String`  | 图标点击颜色            | -      |

> 注①：

属性名`content`特别说明：
* 你可以让这个图标旋转起来，语法： `home spin`.

> 例如：

```vue
<icon 
        ref="reflectName"
        style="width:50px; height:50px;" 
        :eeui="{content: 'home spin', fontSize:'60px', color:'#ff0000'}" >
</icon>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }
```

## 调用方法 `methods`

```js
/**
 * 设置图标
 * 参数一：图标名称
 */
this.$refs.reflectName.setIcon('home');

/**
 * 设置图标大小
 * 参数一：图标大小
 */
this.$refs.reflectName.setIconSize(20);

/**
 * 设置图标颜色
 * 参数一：颜色代码
 */
this.$refs.reflectName.setIconColor('#ff0000');

/**
 * 设置图标点击颜色
 * 参数一：颜色代码
 */
this.$refs.reflectName.setIconClickColor('#00ff00');
```

## 所有图标

<Icons/>
