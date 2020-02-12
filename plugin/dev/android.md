# Android插件


Android插件主要文件说明

## unameExampleEntry.java  
  
App初始化文件，App启动时会运行`unameExampleEntry.init(Application)`方法

## unameExampleAppModule.java

App可以用接口方法，详细可以查看文件内演示的方法。

## unameExampleWebModule.java

`web-view`组件可以可通过`requireModuleJs`调用里面的静态方法，调用详见：[web-view](../../component/web-view.html)