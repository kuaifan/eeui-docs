# 配置相关

> 整个项目中，只有一个主要配置文件，就放在项目根目录下。

## 配置文件

> `eeui.config.js` 为客户端配置文件

- 注意:  **`eeui.config.js` 每次变动，都需要重新执行命令 `npm run dev` 并在IDE重新编译运行你的 app。**

```javascript
{
    serviceUrl: "",         //服务端网址（可选）
    
    homePage: "",           //主页的JS地址（可选）
    homePageParams: { },    //主页其他参数（可选）
     
    appKey: "",             //用于云平台管理（可选）
    
	android: {
        imageEngine: "",    //安卓图片适配器（可选）
    },
    
	wxpay: {
		appid: "xxx..."     //微信支付appid（可选）
	},

    rongim: {               //融云模块配置（可选）
        andorid: {
            enabled: false,
            appKey: "",
            appSecret: "",
        },
        ios: {
            enabled: false,
            appKey: "",
            appSecret: "",
        }
    },

    umeng: {                //友盟模块配置（可选）
        android: {
            enabled: false,
            appKey: "",
            channel: "",
        },
        ios: {
            enabled: false,
            appKey: "",
            messageSecret: "",
            channel: "",
        }
    },
    
    socketHost: "",         //WiFi真机同步服务器 ip 地址（可选，dev自动生成）
    socketPort: ""          //WiFi真机同步服务器端口（可选，dev自动生成）
}
```
## 配置说明

###### **`serviceUrl`**: 服务端网址 <Tag value="1.0.17+"/>
- 默认留空，留空默认为：eeui自带 [EEUI云平台](https://console.eeui.app) 服务。
- 如果 [自搭建服务端](https://github.com/kuaifan/eeui-service)（热更新、动态设置启动图等）请填写自搭建网址。

###### **`homePage`**: 主页的JS地址
- 一般情况下留空，默认为：index.js（可自定义，比如填写：login.js时默认首页将是login.js）。
- 也可以把JS资源放到服务器上然后把JS地址填写到这里。
- 还可以通过 <a href="../module/newPage.html#eeui-setcustomconfig">eeui.setCustomConfig</a> 动态设置主页。

```js
// 示例:
eeui.setCustomConfig('homePage', 'login.js');  
// 执行后下次启动App默认首页将是login.js；
// 注意1：通过系统级清理app缓存后将失效。
// 注意2：wifi同步模式下此设置将无效，开发者可直接修改配置参数homePage达到效果（wifi同步模式的首页采用的是发出wifi同步端的数据也就是电脑，但是eeui.setCustomConfig('homePage', 'xxxx')是保存在APP本地，所以wifi同步模式下无效）。
```

###### **` homePageParams`**: 主页的其他参数
- 比如导航栏颜色等。
- 详细设置请查阅 [eeui.openPage](../module/newPage.html#eeui-openpage) params参数说明。

###### **`appKey`**: 用于云平台管理
- 建议填写16-32位随机字符串。
- 主要用于 [EEUI云平台](https://console.eeui.app)（热更新、动态设置启动图等）。

###### **`android`**: 安卓端相关配置 <Tag date="20191205" :value="['1.0.33+']"/>
- `imageEngine`: 图片适配器ImageAdapter（可选：`picasso`、`glide`），留空默认：`glide`

###### **`wxpay`**: 微信支付相关配置
- `appid`: 微信支付商户appid。

###### **`rongim`**: 融云相关配置（即时通讯模块）
- `enabled`: 是否启用融云服务。
- `appKey`、`appSecret`: 在融云平台申请。

###### **`umeng`**: 友盟相关配置（推送、统计模块）
- `enabled`: 是否启用友盟服务。
- `appKey`、`messageSecret`: 在友盟平台申请。
- `channel`: 友盟统计渠道。

###### **`socketHost、socketPort`**: WiFi真机调试配置，dev模式自动生成
- `socketHost`: WiFi真机调试服务器 ip 地址
- `socketPort`: WiFi真机调试服务器端口

