# Android插件


Android插件主要文件说明

## PluginNameEntry.java  
  
App初始化文件，App启动时会运行`PluginNameEntry.init(Application)`方法

## AppPluginNameModule.java

App可以用接口方法，详细可以查看文件内演示的方法。

## WebPluginNameModule.java

`web-view`组件可以可通过`requireModuleJs`调用里面的静态方法，调用详见：[web-view](../../component/web-view.html)