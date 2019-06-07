# 友盟模块

- 这里主要说的是友盟的推送模块，统计模块已包含在里面无需另外配置。

> 首次使用请执行

```bash
eeui plugin add umeng
```

> 需要加载的模块

```js
const umeng = app.requireModule('umeng');
```

## 参数配置

请查阅[配置相关](../guide/config.html)

## 获取token 

> `umeng.getToken` 获取友盟token

```js
/**
* @返回 {"status":"success", "msg":"", "token":"友盟token"}
 */
let variable = umeng.getToken()
``` 

## 点击通知事件

> `umeng.setNotificationClickHandler` 自定义通知打开动作（点击通知事件）

```js
/**
 * @param callback  回调事件
 */
umeng.setNotificationClickHandler(callback(result))
```

#### callback 回调`result`说明

```json
{
    "status":"click",                   //为 “click” 时就是点击通知的动作了
    "msgid":"uuze1vb155496745348510",   //消息ID
    "title":"测试标题",                  //消息标题
    "subtitle":"12345678",              //消息副标题
    "text":"测试内容",                   //消息内容
    "extra":{                           //额外参数
        
    },
    "rawData":{                         //消息原始数据
        
    }
}
```

#### 简单示例

```js
umeng.setNotificationClickHandler(function(result) {
    //......
});
```

