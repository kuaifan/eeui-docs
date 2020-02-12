# 发布插件

> 完成开发插件后可通过发布插件共享给其他开发者或自己其他项目使用。

## 发布至EEUI控制台

在项目根目录下运行以下命令发布插件：

```bash
eeui plugin publish uname/example
```

首次发布插件系统会要求登录身份，请按提示登录后既可完成发布。

发布成功后可使用命令 `eeui plugin install uname/example` 安装。

如未注册请登录[EEUI.APP控制台](https://console.eeui.app/)注册账号。

发布成功后可以登录[EEUI.APP控制台](https://console.eeui.app/)管理查看你的插件使用等情况。


## 发布至GitHub

可直接将插件目录 `项目根目录/plugins/uname/example` 推送到GitHub后，

可使用命令 `eeui plugin install Git仓库路径` 安装。

> 例如：

插件推送到 `https://github.com/anonymity/project` ，

可使用命令 `eeui plugin install anonymity/project` 或 `eeui plugin install https://github.com/anonymity/project` 安装。