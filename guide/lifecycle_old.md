# 生命周期 <Tag value="2.3.6(含)之前"/>

> 然后这是过时的方法，但是2.3.6版本之后也兼容。

[2.3.6版本之后请参考这里](./lifecycle.html)

:::tip
除了自有的[生命周期钩子](#生命周期钩子)以外，eeui还支持的原生生命周期回调lifecycle，含：页面挂载、页面恢复、页面暂停。
:::

```vue
<template>
	<div @lifecycle="lifecycle">
		...
	</div>
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
	    methods: {
	        //生命周期回调
	        lifecycle(e){
	            console.log(e.status);
	            if (e.status == 'ready')
	            {
                    console.log('页面挂载(初始化)');
	            }
	            else if (e.status == 'resume') 
	            {
                    console.log('页面激活(恢复)');
	            }
	            else if (e.status == 'pause') 
	            {
                    console.log('页面失活(暂停)');
                }
	            else if (e.status == 'destroy') 
	            {
                    console.log('页面停止(销毁)');    //destroy 状态 1.0.38+ 版本支持
                }
	        }
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

::: warning 关于 "mounted" 生命周期

和浏览不同的是，eeui 的渲染流程是**异步**的，而且渲染出来的结果都是原生系统中的 View，这些数据都无法被 javascript 直接获取到。因此在 eeui 上，Vue 的 `mounted` 生命周期在当前组件的 virtual-dom (Vue 里的 VNode) 构建完成后就会触发，此时相应的原生视图未必已经渲染完成。
:::