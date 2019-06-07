# 融云模块

> 首次使用请执行

```bash
eeui plugin add rongim
```

> 需要加载的模块

```js
const rongim = app.requireModule('rongim');
```

## 参数配置

请查阅[配置相关](../guide/config.html)

## 连接登录

> `rongim.login` 连接登录

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
rongim.login({params}, callback(result))
``` 

##### params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| userid | `String` | √ | 会员ID | - |
| username | `String` | - | 会员昵称 | - |
| userimg | `String` | - | 会员头像地址 | - |

##### callback 回调`result`说明

```js
{
    status: 'success',   //状态，success | error
    
    userid: 18888888888,        //【限：status=success】会员ID
    token: "sdf2jkehjs23...",   //【限：status=success】融云会员身份识别码
    
    errorCode: -801,
    errorMsg: "错误描述",
}
```

## 退出登录

> `rongim.logout` 退出登录，断开与融云服务器的连接，并且不再接收 Push 消息。

```js
rongim.logout()
```

## 聊天室业务

> 融云聊天室相关业务

#### rongim.joinChatRoom

* 加入聊天室。如果聊天室不存在则自动创建

```js
/**
 * @param roomId            聊天室ID，如果聊天室不存在则自动创建
 * @param defMessageCount   默认开始时拉取的历史记录条数
 * @param callback          回调事件
 */
rongim.joinChatRoom(roomId, defMessageCount, callback(result))
``` 

> callback 回调`result`说明

```js
{
    status: 'success',   //状态，success | error
    
    errorCode: -801,
    errorMsg: "错误描述",
}
```

#### rongim.quitChatRoom

* 退出当前聊天室，不在接收其消息

```js
/**
 * @param callback          回调事件
 */
rongim.quitChatRoom(callback(result))
``` 

> callback 回调`result`说明

```js
{
    status: 'success',   //状态，success | error
    
    errorCode: -801,
    errorMsg: "错误描述",
}
```

#### rongim.addEventHandler

* 添加接收者（监听聊天室消息）

```js
/**
 * @param callback          回调事件
 */
rongim.addEventHandler(callback(result))
``` 

> callback 回调`result`说明

```js
{
    status: 'arrived',   //状态（消息类型），详见：注①
    
    userid: "",     //登录时的会员ID
    username: "",   //登录时的会员昵称
    userimg: "",    //登录时的会员头像地址
    body: "",       //消息正文内容
    extra: "",      //消息附加内容
}
```

> 注①

* arrived：收到新消息
* send：发送消息成功
* send_error：发送消息失败


#### rongim.removeEventHandler

* 移除接收者（取消监听聊天室消息）

```js
rongim.removeEventHandler()
``` 

#### rongim.sendTextMessage

* 当前聊天室发送文本消息

```js
/**
 * @param text      发送的文本内容
 * @param callback  回调事件
 */
rongim.sendTextMessage(rtext, callback(result))
``` 

> callback 回调`result`说明

```js
{
    status: 'success',   //状态，success|error
}
```
