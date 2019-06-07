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
                    'tb-1111', 'tb-1212', 'tb-activity', 'tb-activityfill', 'tb-add', 'tb-add-light', 'tb-add1', 'tb-addressbook', 'tb-album', 'tb-all', 'tb-appreciate', 'tb-appreciate-fill-light', 'tb-appreciate-light', 'tb-appreciatefill', 'tb-apps', 'tb-arrow-left-fill', 'tb-arrow-up-fill', 'tb-ask', 'tb-askfill', 'tb-attention', 'tb-attention-light', 'tb-attentionfavor', 'tb-attentionfavorfill', 'tb-attentionfavorfill-copy', 'tb-attentionfill', 'tb-attentionforbid', 'tb-attentionforbidfill', 'tb-auction', 'tb-baby', 'tb-babyfill', 'tb-back', 'tb-back-android', 'tb-back-android-light', 'tb-back-light', 'tb-backdelete', 'tb-backwardfill', 'tb-bad', 'tb-barcode', 'tb-big', 'tb-brand', 'tb-brandfill', 'tb-calendar', 'tb-camera', 'tb-camera-light', 'tb-cameraadd', 'tb-cameraaddfill', 'tb-camerafill', 'tb-camerarotate', 'tb-cardboard', 'tb-cardboardfill', 'tb-cardboardforbid', 'tb-cart', 'tb-cart-fill-light', 'tb-cart-light', 'tb-cartfill', 'tb-cascades', 'tb-change', 'tb-check', 'tb-choiceness', 'tb-choicenessfill', 'tb-circle', 'tb-circlefill', 'tb-close', 'tb-close-light', 'tb-clothes', 'tb-clothesfill', 'tb-coffee', 'tb-coin', 'tb-command', 'tb-commandfill', 'tb-comment', 'tb-comment-fill-light', 'tb-comment-light', 'tb-commentfill', 'tb-community', 'tb-community-fill-light', 'tb-community-light', 'tb-communityfill', 'tb-copy', 'tb-countdown', 'tb-countdownfill', 'tb-creative', 'tb-creativefill', 'tb-crown', 'tb-crownfill', 'tb-cut', 'tb-delete', 'tb-delete-light', 'tb-deletefill', 'tb-deliver', 'tb-deliver-fill', 'tb-discover', 'tb-discoverfill', 'tb-down', 'tb-down-light', 'tb-dress', 'tb-edit', 'tb-edit-light', 'tb-emoji', 'tb-emojifill', 'tb-emojiflashfill', 'tb-emojilight', 'tb-evaluate', 'tb-evaluate-fill', 'tb-exit', 'tb-explore', 'tb-explorefill', 'tb-expressman', 'tb-favor', 'tb-favor-fill-light', 'tb-favor-light', 'tb-favorfill', 'tb-female', 'tb-file', 'tb-filter', 'tb-flashbuyfill-copy', 'tb-flashlightclose', 'tb-flashlightopen', 'tb-focus', 'tb-fold', 'tb-footprint', 'tb-form', 'tb-form-favor-light', 'tb-form-fill-light', 'tb-form-light', 'tb-formfill', 'tb-forward', 'tb-forwardfill', 'tb-friend', 'tb-friend-add-light', 'tb-friend-light', 'tb-friend-settings-light', 'tb-friendadd', 'tb-friendaddfill', 'tb-friendfamous', 'tb-friendfavor', 'tb-friendfill', 'tb-full', 'tb-furniture', 'tb-game', 'tb-global', 'tb-global-light', 'tb-goods', 'tb-goods-favor-light', 'tb-goods-hot-fill', 'tb-goods-light', 'tb-goods-new-fill-light', 'tb-goods-new-light', 'tb-goodsfavor', 'tb-goodsfill', 'tb-goodsnew', 'tb-goodsnewfill', 'tb-group', 'tb-group-fill', 'tb-group-fill-light', 'tb-group-light', 'tb-haodian', 'tb-home', 'tb-home-fill-light', 'tb-home-light', 'tb-homefill', 'tb-hot', 'tb-hot-light', 'tb-hotfill', 'tb-hua', 'tb-info', 'tb-infofill', 'tb-ju', 'tb-juhuasuan', 'tb-keyboard', 'tb-keyboardlight', 'tb-light', 'tb-lightauto', 'tb-lightfill', 'tb-lightforbid', 'tb-like', 'tb-likefill', 'tb-link', 'tb-list', 'tb-living', 'tb-loada', 'tb-loadb', 'tb-loadc', 'tb-loadd', 'tb-loading', 'tb-location', 'tb-location-light', 'tb-locationfill', 'tb-lock', 'tb-magic', 'tb-mail', 'tb-male', 'tb-mao', 'tb-mark', 'tb-markfill', 'tb-medal', 'tb-medal-fill-light', 'tb-medal-light', 'tb-medalfill', 'tb-message', 'tb-message-fill-light', 'tb-message-light', 'tb-messagefill', 'tb-mobile', 'tb-mobilefill', 'tb-mobiletao', 'tb-moneybag', 'tb-moneybagfill', 'tb-more', 'tb-more-android-light', 'tb-more-light', 'tb-moreandroid', 'tb-move', 'tb-musicfill', 'tb-musicforbidfill', 'tb-my', 'tb-my-fill-light', 'tb-my-light', 'tb-myfill', 'tb-new', 'tb-newfill', 'tb-news', 'tb-news-fill-light', 'tb-news-hot-fill-light', 'tb-news-hot-light', 'tb-news-light', 'tb-newsfill', 'tb-newshot', 'tb-newshotfill', 'tb-notice', 'tb-notice-forbid-fill', 'tb-noticefill', 'tb-notification', 'tb-notificationfill', 'tb-notificationforbidfill', 'tb-oppose-fill-light', 'tb-oppose-light', 'tb-order', 'tb-paint', 'tb-paintfill', 'tb-pay', 'tb-people', 'tb-people-list-light', 'tb-peoplefill', 'tb-peoplelist', 'tb-phone', 'tb-phone-light', 'tb-pic', 'tb-picfill', 'tb-pick', 'tb-piclight', 'tb-play-forward-fill', 'tb-playfill', 'tb-post', 'tb-present', 'tb-presentfill', 'tb-profile', 'tb-profile-light', 'tb-profilefill', 'tb-pulldown', 'tb-pulldown1', 'tb-pullleft', 'tb-pullright', 'tb-pullup', 'tb-punch', 'tb-punch-light', 'tb-qi', 'tb-qiang', 'tb-qr-code-light', 'tb-qrcode', 'tb-question', 'tb-questionfill', 'tb-radiobox', 'tb-radioboxfill', 'tb-rank', 'tb-rankfill', 'tb-read', 'tb-recharge', 'tb-rechargefill', 'tb-record', 'tb-recordfill', 'tb-recordlight', 'tb-redpacket', 'tb-redpacket-fill', 'tb-refresh', 'tb-refresh-light', 'tb-refresharrow', 'tb-refund', 'tb-remind', 'tb-repair', 'tb-repairfill', 'tb-repeal', 'tb-right', 'tb-round', 'tb-round-close-fill-light', 'tb-round-close-light', 'tb-round-comment-light', 'tb-round-crown-fill', 'tb-round-down-light', 'tb-round-favor-fill', 'tb-round-friend-fill', 'tb-round-light-fill', 'tb-round-like-fill', 'tb-round-link-fill', 'tb-round-list-light', 'tb-round-location-fill', 'tb-round-menu-fill', 'tb-round-pay', 'tb-round-pay-fill', 'tb-round-people-fill', 'tb-round-rank-fill', 'tb-round-record-fill', 'tb-round-redpacket', 'tb-round-redpacket-fill', 'tb-round-shop-fill', 'tb-round-skin-fill', 'tb-round-text-fill', 'tb-round-ticket', 'tb-round-ticket-fill', 'tb-round-transfer', 'tb-round-transfer-fill', 'tb-roundadd', 'tb-roundaddfill', 'tb-roundaddlight', 'tb-roundcheck', 'tb-roundcheckfill', 'tb-roundclose', 'tb-roundclosefill', 'tb-rounddown', 'tb-roundleftfill', 'tb-roundleftfill-copy', 'tb-roundright', 'tb-roundrightfill', 'tb-safe', 'tb-same', 'tb-samefill', 'tb-scan', 'tb-scan-light', 'tb-search', 'tb-search-light', 'tb-search-list-light', 'tb-searchlist', 'tb-selection', 'tb-selectionfill', 'tb-send', 'tb-service', 'tb-service-light', 'tb-servicefill', 'tb-settings', 'tb-settings-light', 'tb-shake', 'tb-share', 'tb-share-light', 'tb-shop', 'tb-shopfill', 'tb-shoplight', 'tb-similar', 'tb-skin', 'tb-skin-light', 'tb-skinfill', 'tb-sort', 'tb-sortlight', 'tb-sound', 'tb-soundlight', 'tb-sponsor', 'tb-sponsorfill', 'tb-sports', 'tb-square', 'tb-squarecheck', 'tb-squarecheckfill', 'tb-stop', 'tb-suan', 'tb-subscription', 'tb-subscription-light', 'tb-subtitle-block-light', 'tb-subtitle-unblock-light', 'tb-tag', 'tb-tagfill', 'tb-tao', 'tb-taoqianggou', 'tb-taoxiaopu', 'tb-taxi', 'tb-text', 'tb-tian', 'tb-tianmao', 'tb-ticket', 'tb-ticket-fill', 'tb-ticket-money-fill', 'tb-time', 'tb-timefill', 'tb-tmall', 'tb-top', 'tb-triangledownfill', 'tb-triangleupfill', 'tb-unfold', 'tb-unlock', 'tb-upblock', 'tb-upload', 'tb-upstage', 'tb-upstagefill', 'tb-usefull', 'tb-usefullfill', 'tb-video', 'tb-video-fill-light', 'tb-video-light', 'tb-videofill', 'tb-vip', 'tb-vip-code-light', 'tb-vipcard', 'tb-voice', 'tb-voicefill', 'tb-voicelight', 'tb-wang', 'tb-wang-light', 'tb-wangfill', 'tb-warn', 'tb-warn-light', 'tb-warnfill', 'tb-we', 'tb-we-fill-light', 'tb-we-light', 'tb-weblock', 'tb-wefill', 'tb-weibo', 'tb-weunblock', 'tb-wifi', 'tb-write', 'tb-writefill', 'tb-xiami', 'tb-xiamiforbid', 'tb-xiaoheiqun', 'tb-ye'
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
