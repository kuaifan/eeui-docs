# 配置相关

> 整个项目中，只有一个主要配置文件，就放在项目根目录下。

## 配置文件

> `eeui.config.js` 为客户端配置文件

- 注意:  **`eeui.config.js` 每次变动，都需要重新执行命令 `npm run dev` 并在IDE重新编译运行你的 app。**

```javascript
{
    homePage: "",           //主页的JS地址（可选）
    homePageParams: { },    //主页其他参数（可选）
     
    appKey: "",             //用于云平台管理（可选）
    
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
}
```
## 配置说明

###### **`homePage`**: 主页的JS地址
- 一般情况下留空。
- 只有当项目把JS资源放到服务器上时需要把JS路径填写此项目。

###### **` homePageParams`**: 主页的其他参数
- 比如导航栏颜色等。
- 详细设置请查阅 [eeui.openPage](https://eeui.app/module/newPage.html#eeui-openpage) params参数说明。

###### **`appKey`**: 用于云平台管理
- 建议填写16-32位随机字符串。
- 主要用于 [EEUI云平台](https://console.eeui.app) 热更新、动态设置启动图等。

###### **`wxpay`**: 微信支付相关配置
- appid: 微信支付商户appid。

###### **`rongim`**: 融云相关配置（即时通讯模块）
- enabled: 是否启用融云服务。
- appKey、appSecret: 在融云平台申请。

###### **`umeng`**: 友盟相关配置（推送、统计模块）
- enabled: 是否启用友盟服务。
- appKey、messageSecret: 在友盟平台申请。
- channel: 友盟统计渠道。

