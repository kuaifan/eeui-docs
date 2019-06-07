# iOS插件


iOS插件主要文件说明

## PluginNameEntry.m
  
iOS`AppDelegate`方法拓展，如：`didFinishLaunchingWithOptions`、`openURL`等。

## AppPluginNameModule.m

App可以用接口方法，详细可以查看文件内演示的方法。

## WebPluginNameModule.m

`web-view`组件可以可通过`requireModuleJs`调用里面的静态方法，调用详见：[web-view](../../component/web-view.html)