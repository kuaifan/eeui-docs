# 音频播放

> 首次使用请安装插件

```bash
eeui plugin add audio
```

> 需要加载的模块

```js
const audio = app.requireModule('audio');
```

## 播放音频

```js
/**
 * @param url    音频地址
 */
audio.play(url)
``` 

## 暂停播放

```js
audio.pause()
``` 

## 停止播放

```js
audio.stop()
``` 

## 指定进度

```js
/**
 * @param millisecond    毫秒数
 */
audio.seek(millisecond)
``` 

## 是否播放

```js
/**
 * @return boolean  true|false
 */
let variable = audio.isPlay()
``` 

## 调整音量

```js
/**
 * @param vol    (0-100)
 */
audio.volume(vol)
``` 

## 循环播放

```js
/**
 * 设置音频是否循环播放
 * @param loop    true|false
 */
audio.loop(loop)
``` 

## 播放回调

```js
/**
 * 监听音频播放状态
 * @param callback  回调事件，result:{url:音频地址, current:已播放毫秒数, duration:总时长毫秒数，percent：播放百分比进度}
 */
audio.setCallback(callback(result))
```

## 获取时长

```js
/**
 * 通过音频地址获取视频时长
 * @param url       视频地址
 * @param callback  回调事件，result:{url:音频地址,duration:总时长毫秒数}
 */
audio.getDuration(url, callback(result))
```

## 示例代码

```vue
<template>
    <div style="align-items: center;justify-content: center">
      
        <text class="res">{{res}}</text>
        <text class="button" @click="play">播放</text>
        <text class="button" @click="pause">暂停</text>
        <text class="button" @click="stop">停止</text>
        <text class="button" @click="seek">指定进度</text>
        <text class="button" @click="loop">{{isloop?'取消循环':'循环'}}</text>
        <text class="button" @click="duration">获取时长</text>

    </div>
</template>
<script>
    const navigationBar = app.requireModule('navigationBar');
    const audio = app.requireModule('audio');
    
    export default{
        data(){
            return {
                res: '',
                url: 'https://eeui.app/assets/samples/audio.mp3',
                isloop: false
            }
        },
        mounted(){
          navigationBar.setTitle("音频播放");
          audio.setCallback((res) => {
            this.res = res;
          });
        },
        methods: {
            play(){
                audio.play(this.url)
            },
            pause(){
                audio.pause()
            },
            stop(){
                audio.stop()
            },
            seek(){
                audio.seek(20000)
            },
            loop(){
                this.isloop = !this.isloop;
                audio.loop(this.isloop)
            },
            duration(){
                audio.getDuration(this.url, (res) => {
                    this.res = res;
                });
            }
        },
    }
</script>
<style scoped>
  .res {
    color: #000000;
    font-size: 24px;
  }
  .button {
    width: 230px;
    height: 80px;
    line-height: 80px;
    margin-top: 24px;
    text-align:center;
    color: #ffffff;
    background-color:#3EB4FF;
    font-size: 26px;
  }
</style>
```
