# websocket

> 首次使用请执行

```bash
eeui plugin add websocket
```

> 模块引用方式

```js
const websocket = app.requireModule('websocket');
```

## 连接服务器 

> `websocket.connect` 创建 WebSockets，并连接服务器

```js
/**
 * @param url       连接地址
 * @param callback  回调事件
 */
websocket.connect(url, callback(result))
```

##### url 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| url | `String` | √ | 表示要连接的 URL | - |

##### callback 回调`result`说明

```js
{
    status: 'open',   //状态，详见：注①
    msg: ''              //详细消息
}
```

> 注①：

- `open`连接已经准备好接受和发送数据
- `message`接收到新消息
- `closed`连接关闭
- `failure`连接失败
- `error`连接错误

##### 简单示例

```js
//启动相册并拍照  
let websocket = app.requireModule('websocket');
websocket.connect("ws://echo.websocket.org", function(result) {
    if (result.status == 'open') {
        //连接已经准备好接受和发送数据
    }else if (result.status == 'message') {
        //接收到新消息：result.msg
    }else if (result.status == 'closed' || result.status == 'failure' || result.status == 'error') {
        //连接关闭
    }
});
```

## 发送消息数据

> `websocket.send` 连接向服务器发送数据

```js
/**
 * @param msg    消息数据
 */
websocket.send(msg)
```

##### msg 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| msg | `String` | √ | 要发送到服务器的数据 | - |


## 关闭连接

> `websocket.stop` 关闭 WebSockets 的连接

```js
websocket.stop()
```

## 获取连接状态

> `websocket.state` 获取 WebSockets 当前的连接状态

```js
let variable = websocket.state();
if (variable == 1) {
    //已连接
} else {
    //未连接
}
```



