# 支付模块

- 包含支持：微信支付、支付宝支付。

> 首次使用请执行

```bash
eeui plugin add pay
```

> 需要加载的模块

```js
const pay = app.requireModule('pay');
```

## 参数配置

请查阅[配置相关](../guide/config.html)


## 微信支付

#### 支付配置

> `Android`配置
    
在创建项目的时候**`默认已经配置好`**路径了，但是如果开发中修改过包名则需要确保以下路径名称与包名一致，否则用户付款完成后无法重新唤起APP。

![](./media/wxpay_android.png)

> `iOS`配置

如果已经按上面[参数配置](../guide/config.html)配置好的话，在编译`npm run [serve|dev|build]`项目的时候**`系统已经自动生成`**理论上无需手动设置，但是真正打包项目的时候需要确认设置`Info`>`URL Types`，否则用户付款完成后无法重新唤起APP。

![](./media/wxpay_ios.png)

#### 调起支付

> `pay.weixin` 微信支付

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
pay.weixin({params}, callback(result))
``` 

##### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| appid | `String` | √ | 应用ID | - |
| partnerid | `String` | √ | 商户号 | - |
| prepayid | `String` | √ | 预支付交易会话ID | - |
| package | `String` | √ | 扩展字段 | - |
| noncestr | `String` | √ | 随机字符串 | - |
| timestamp | `String` | √ | 时间戳 | - |
| sign | `String` | √ | 签名 | - |

参数说明详见官方文档[调起支付API](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12)

##### callback 回调`result`说明

```js
{
    status: 0,   //状态，详见：注①
    msg: ""      //状态描述
}
```


> 注①：

- `0`成功
- `-1`错误（可能的原因：签名错误、未注册或不正确的APPID、注册的APPID与设置的不匹配、其他异常等）
- `-2`用户取消（无需处理。发生场景：用户不支付了，点击取消，返回APP）
- `-999`启动微信支付失败（可能得原因：用户未安装微信客户端）


## 支付宝支付

> `pay.alipay` 支付宝支付

```js
/**
 * @param payData   请求参数   
 * @param callback  回调事件
 */
pay.alipay(payData, callback(result))
``` 

##### `payData`请求参数示例

```
app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA2&timestamp=2016-08-25%2020%3A26%3A31&version=1.0&sign=cYmuUnKi5QdBsoZEAbMXVMmRWjsuUj%2By48A2DvWAVVBuYkiBj13CFDHu2vZQvmOfkjE0YqCUQE04kqm9Xg3tIX8tPeIGIFtsIyp%2FM45w1ZsDOiduBbduGfRo1XRsvAyVAv2hCrBLLrDI5Vi7uZZ77Lo5J0PpUUWwyQGt0M4cj8g%3D
```

请求参数说明详见官方文档[App支付请求参数说明](https://docs.open.alipay.com/204/105465/)

##### callback 回调`result`说明

```js
{
    status: "9000", //状态结果，详见：注②（官方字段名称为：resultStatus）
    result: ""      //处理结果(类型为json结构字符串)
    memo: ""        //描述信息(类型为字符串)
}
```

> 注②：

- `9000`订单支付成功
- `8000`正在处理中，支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
- `4000`订单支付失败
- `5000`重复请求
- `6001`用户中途取消
- `6002`网络连接出错
- `6004`支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
- `其它`其它支付错误

返回参数说明详见官方文档[服务器同步/异步通知参数说明](https://docs.open.alipay.com/204/105301/)
