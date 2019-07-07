# 升级程序

[[toc]]

## 准备事项

在准备升级之前请将eeui工具`eeui-cli`升级至最新版本。[查看最新版本](https://www.npmjs.com/package/eeui-cli)

升级工具命令：
```bash
npm update eeui-cli -g
```
## 开始升级

### 自动升级

在项目根目录下执行以下命令即可按提示完成主程序升级：

```bash
eeui update
```

如图效果：

<img style="border:18px solid #ddd;border-radius:15px;margin:10px auto 0;" src="./media/update.png"/>


### 手动升级

可能由于网络或升级版本跨越太大等其他原因导致自动升级失败的可通过以下方法手动升级至最新生成版本。

1、使用`eeui create`命令创建一个全新的项目。

2、将旧项目的`src`下的所有文件移到新项目`src`目录下。

3、修改新项目[eeui.config.js配置文件](./config.html)、[应用图标](./icons.html)、[应用启动图](./launch.html)、[应用版本号及版本名称](./setting.html)。

> 注：如果因为自动升级过程中失败导致旧项目`src`文件夹内文件被重置可在`common/backup/*.zip`找到升级前系统自动备份包。

## 注意事项

::: warning
`eeui-cli`版本在`1.0.0-rc10`之前的需要再升级主程序之后需要重新安装插件。
:::