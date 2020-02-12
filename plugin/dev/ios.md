# iOS插件


iOS插件主要文件说明

## unameExampleEntry.m
  
iOS`AppDelegate`方法拓展，如：`didFinishLaunchingWithOptions`、`openURL`等。

## unameExampleAppModule.m

App可以用接口方法，详细可以查看文件内演示的方法。

## unameExampleWebModule.m

`web-view`组件可以可通过`requireModuleJs`调用里面的静态方法，调用详见：[web-view](../../component/web-view.html)