## `eeui.config.js` 配置 `navigationBarStyle` 示例

```js
module.exports = {
    //......
    "navigationBarStyle":{
        "titleColor": '#333333',
        "titleSize": 34,
        "titleBold": true,
        "barHeight":88,
        "subtitleColor":'#333333',
        "subtitleSize":24,
        "backgroundColor":"#FFFFFF",
        "left": {
            "title": '左边按钮',
            "titleColor": '#333333',
            "titleSize": 28,
            "titleBold": true,
            "icon": 'root:img/navi_back.png',
            "iconColor": '#0057FF',
            "iconSize": 36,
            "width": 75,
            "spacing":10
        },
        "right": {
            "title": '右边边按钮',
            "titleColor": '#333333',
            "titleSize": 28,
            "titleBold": true,
            "icon": 'root:img/navi_back.png',
            "iconColor": '#0057FF',
            "iconSize": 36,
            "width": 75,
            "spacing":10
        }
    }
    //......
}
```