# 搭建环境

> 我们要求全部都安装，**否则可能无法完整开发与调试**。

## 基础环境

Mac 或 Windows: 

* Node.js (>=9.x), npm version 4+ 

#### 安装工具

```bash
npm install eeui-cli -g
```

如果提示需要权限安装，请使用sudo安装：`sudo npm install eeui-cli -g`。

如果你在中国地区，我们还是推荐您使用 [cnpm](https://npm.taobao.org/) 安装：`cnpm install eeui-cli -g`。

#### 更新工具

```bash
npm update eeui-cli -g
```

## 开发 iOS

开发平台: `Mac`
> CocoaPods 使用过程中遇到问题及时 Google。

#### 版本要求

- ruby: `2.5.0` 以上
- cocoapods: `1.5.0` 以上

其他版本会有环境问题

#### 安装

* Xcode (appStore 下载)
* CocoaPods(建议使用pod 1.5.3或之后版本)
    * 升级 rubygem 环境：`$ sudo gem update --system`
    * 移除现有 rubygem 镜像：`$ gem sources --remove https://rubygems.org/`
    * 添加gem.ruby-china镜像：`$ gem source -a https://gems.ruby-china.org/`
    * 安装 CocoaPods：`$ sudo gem install cocoapods`
    * 如果以上命令报错则执行：`$ sudo gem install -n /usr/local/bin cocoapods`
    * 最后执行：`$ pod setup 过程比较漫长，请耐心等待执行完成`

## 开发 Android

开发平台: `Mac/Windows`

#### 版本要求

- AndroidStudio: `3.5.0+`

#### 安装

JDK 是 JAVA 开发包，AndroidStudio 是 Android开发IDE，这两项不再做过多介绍。

* 下载并安装 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。
* 下载并安装 [Android Studio](https://developer.android.google.cn/studio/index.html)。

> 如果您使用虚拟机进行跨平台开发，也需要配置好对应平台的所需环境。

## 模拟器或真机安装

* iOS 开发中 xcode 已经自带了模拟器
* Android 开发者也可以使用 android studio 自带模拟器

至此，所有的相关的工具和软件都已下载完毕，下面我们开始创建一个 `eeui-demo` 工程。

