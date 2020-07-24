# 生命周期 <Tag date="20200709" value="2.3.9+"/>

[2.3.8版本之前请参考这里](./lifecycle_old.html)

:::tip
除了自有的[生命周期钩子](#生命周期钩子)以外，<br/>eeui还另外支持`APP进入后台`、`APP进入前台`、`页面挂载`、`页面激活`、`页面失活`、`页面停止`。
:::

```vue
<template>
	...
</template>

<script>
    export default {
	    beforeCreate: function (){
	        console.log('beforeCreate');
	    },
	    created: function () {
	        console.log('created');
	    },
	    beforeMount: function () {
	        console.log('beforeMount');
	    },
	    mounted: function () {
	        console.log('mounted');
	    },
	    beforeUpdate: function () {
	        console.log('beforeUpdate');
	    },
	    updated: function () {
	        console.log('updated');
	    },
	    beforeDestroy: function () {
	        console.log('beforeDestroy');
	    },
	    destroyed: function () {
	        console.log('destroyed');
	    },

        appActive: function (data) {
            console.log('APP进入前台：App从【后台】切换至【前台】时触发');
        },
        appDeactive: function (data) {
            console.log('APP进入后台：App从【前台】切换至【后台】时触发');
        },
        pageReady: function (data) {
            console.log('页面挂载：页面【渲染完成】时触发');
        },
        pageResume: function (data) {
            console.log('页面激活：页面【恢复】时触发（渲染完成时也会触发1次）');
        },
        pagePause: function (data) {
            console.log('页面失活：页面【暂停】时触发');
        },
        pageDestroy: function (data) {
            console.log('页面停止：页面【销毁】时触发');
        }
    }
</script>
```

### 生命周期钩子

Vue 组件的实例生命周期钩子将在特定的阶段发出，详情请参考 Vue 组件的[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)。

| Vue 生命周期钩子 | 是否支持 | 说明 |
| ------------------ | --------- | ----- |
| [beforeCreate](https://cn.vuejs.org/v2/api/#beforeCreate)   | <b class="tag-yes">支持</b> | - |
| [created](https://cn.vuejs.org/v2/api/#created)             | <b class="tag-yes">支持</b> | - |
| [beforeMount](https://cn.vuejs.org/v2/api/#beforeMount)     | <b class="tag-yes">支持</b> | - |
| [mounted](https://cn.vuejs.org/v2/api/#mounted)             | <b class="tag-yes">支持</b> | 详见下文解释 |
| [beforeUpdate](https://cn.vuejs.org/v2/api/#beforeUpdate)   | <b class="tag-yes">支持</b> | - |
| [updated](https://cn.vuejs.org/v2/api/#updated)             | <b class="tag-yes">支持</b> | - |
| [activated](https://cn.vuejs.org/v2/api/#activated)         | <b class="tag-no">不支持</b>   | 不支持`<keep-alive>` |
| [deactivated](https://cn.vuejs.org/v2/api/#deactivated)     | <b class="tag-no">不支持</b>   | 不支持`<keep-alive>` |
| [beforeDestroy](https://cn.vuejs.org/v2/api/#beforeDestroy) | <b class="tag-yes">支持</b> | - |
| [destroyed](https://cn.vuejs.org/v2/api/#destroyed)         | <b class="tag-yes">支持</b> | - |
| [errorCaptured](https://cn.vuejs.org/v2/api/#errorCaptured) | <b class="tag-yes">支持</b> | - |
| 以下是`eeui`特有： |  |  |
| appActive | <b class="tag-yes">支持</b> | APP进入前台：App从【后台】切换至【前台】时触发 |
| appDeactive | <b class="tag-yes">支持</b> | APP进入后台：App从【前台】切换至【后台】时触发 |
| pageReady | <b class="tag-yes">支持</b> | 页面挂载：页面【渲染完成】时触发 |
| pageResume | <b class="tag-yes">支持</b> | 页面激活：页面【恢复】时触发（渲染完成时也会触发1次） |
| pagePause | <b class="tag-yes">支持</b> | 页面失活：页面【暂停】时触发 |
| pageDestroy | <b class="tag-yes">支持</b> | 页面停止：页面【销毁】时触发 |

::: warning 关于 "mounted" 生命周期

和浏览不同的是，eeui 的渲染流程是**异步**的，而且渲染出来的结果都是原生系统中的 View，这些数据都无法被 javascript 直接获取到。因此在 eeui 上，Vue 的 `mounted` 生命周期在当前组件的 virtual-dom (Vue 里的 VNode) 构建完成后就会触发，此时相应的原生视图未必已经渲染完成。
:::