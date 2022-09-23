let sidebar = {
    guide() {
        return [{
            title: '起步',
            collapsable: false,
            children: [
                '/guide/introduce',
                '/guide/env',
                '/guide/create',
                '/guide/config',
                '/guide/debug',
            ]
        }, {
            title: '上手',
            collapsable: false,
            children: [
                ['/guide/usevue', '使用 Vue.js'],
                ['/guide/difference', '平台差异'],
                ['/guide/variable', '环境变量'],
                ['/guide/lifecycle', ['生命周期', 20200709]],
                ['/guide/message', ['跨页面通信', 20200709]],
                ['/guide/appboard', ['appboard', 20190713]],
                ['/guide/icons', ['应用图标', 20190517]],
                ['/guide/launch', ['启动图片', 20190517]],
                ['/guide/setting', ['应用设置', 20190707]],
                ['/guide/update', ['升级程序', 20190517]],
            ]
        }, {
            title: '样式',
            collapsable: false,
            children: [
                ['/weex/styles/common-styles', '通用样式'],
                ['/weex/styles/text-styles', '文本样式'],
                ['/weex/styles/css-units', 'CSS 单位'],
                ['/weex/styles/color-name', '颜色值']
            ]
        }, {
            title: '事件',
            collapsable: false,
            children: [
                ['/weex/events/common-events', '通用事件'],
                ['/weex/events/event-bubbling', '事件冒泡'],
                ['/weex/events/gesture', '手势']
            ]
        }];
    },
    component() {
        return [{
            title: '组件',
            collapsable: false,
            children: [
                ['/component/a', ['<a>', '跳转链接', 20190410]],
                ['/component/banner', ['<banner>', '轮播组件']],
                ['/component/blur', ['<blur>', '模糊视图', 20200421]],
                ['/component/button', ['<button>', '预设按钮']],
                ['/component/grid', ['<grid>', '网格容器']],
                ['/component/icon', ['<icon>', '字体图标']],
                ['/component/marquee', ['<marquee>', '跑马文字']],
                ['/component/navbar', ['<navbar>', '导航栏']],
                ['/component/ripple', ['<ripple>', '涟漪效果']],
                ['/component/scroll-text', ['<scroll-text>', '滚动文字']],
                ['/component/scroll-view', ['<scroll-view>', '列表容器']],
                ['/component/side-panel', ['<side-panel>', '侧边栏容器']],
                ['/component/tabbar', ['<tabbar>', '选项卡页面']],
                ['/component/view', ['<view>', '视图容器', 20200418]],
                ['/component/web-view', ['<web-view>', '浏览器组件']],
                ['/component/WEcharts', ['<WEcharts>', '图表组件']]
            ]
        }, {
            title: 'weex组件',
            collapsable: false,
            children: [
                // ['/weex/components/a', '<a>'],
                ['/weex/components/div', '<div>'],
                ['/weex/components/text', '<text>'],
                ['/weex/components/image', '<image>'],
                ['/weex/components/list', '<list>'],
                ['/weex/components/cell', '<cell>'],
                ['/weex/components/loading', '<loading>'],
                ['/weex/components/refresh', '<refresh>'],
                ['/weex/components/recycle-list', '<recycle-list>'],
                ['/weex/components/scroller', '<scroller>'],
                ['/weex/components/slider', '<slider>'],
                ['/weex/components/indicator', '<indicator>'],
                ['/weex/components/textarea', '<textarea>'],
                ['/weex/components/input', '<input>'],
                ['/weex/components/waterfall', '<waterfall>'],
                ['/weex/components/video', '<video>'],
                ['/weex/components/web', '<web>'],
                ['/weex/components/richtext', '<richtext>']
            ]
        }];
    },
    modules() {
        return [{
            title: '模块',
            collapsable: false,
            children: [
                ['/module/adDialog', ['adDialog', '广告弹窗']],
                ['/module/ajax', ['ajax', '异步请求']],
                ['/module/alert', ['alert', '对话框']],
                ['/module/caches', ['caches', '缓存管理']],
                ['/module/captcha', ['captcha', '验证弹窗']],
                ['/module/keyboard', ['keyboard', '键盘功能']],
                ['/module/loading', ['loading', '等待动画']],
                ['/module/navigationBar', ['navigationBar', '标题栏', 20190318]],
                ['/module/navigator', ['navigator', '路由功能', 20190318]],
                ['/module/newPage', ['newPage', '页面功能']],
                ['/module/openOtherApp', ['openOtherApp', '打开其他APP', 20191214]],
                ['/module/plate', ['plate', '复制粘贴']],
                ['/module/saveImage', ['saveImage', '保存图片', 20191214]],
                ['/module/getImageSize', ['getImageSize', '图片尺寸']],
                ['/module/scaner', ['scaner', '二维码扫描']],
                ['/module/share', ['share', '文字图片分享']],
                ['/module/storage', ['storage', '数据储存']],
                ['/module/system', ['system', '系统信息']],
                ['/module/toast', ['toast', '提示功能']],
                ['/module/version', ['version', '版本相关', 20191214]],
            ]
        }, {
            title: 'weex模块',
            collapsable: false,
            children: [
                ['/weex/modules/animation', 'animation'],
                ['/weex/modules/clipboard', 'clipboard'],
                ['/weex/modules/dom', 'dom'],
                ['/weex/modules/globalEvent', 'globalEvent'],
                ['/weex/modules/meta', 'meta'],
                ['/weex/modules/modal', 'modal'],
                // ['/weex/modules/navigator', 'navigator'],
                ['/weex/modules/picker', 'picker'],
                ['/weex/modules/storage', 'storage'],
                ['/weex/modules/stream', 'stream'],
                ['/weex/modules/webview', 'webview'],
                // ['/weex/modules/websockets', 'webSockets']
            ]
        }]
    },
    plugin() {
        return [{
            title: '开发插件',
            collapsable: false,
            children: [
                ['/plugin/dev/create', '创建插件'],
                ['/plugin/dev/android', 'Android插件'],
                ['/plugin/dev/ios', 'iOS插件'],
                ['/plugin/dev/publish', '发布插件'],
            ]
        }];
    },
};

module.exports = {
    title: 'EEUI.APP',
    description: '使用 Vue.js 跨平台开发高质量原生（Android/iOS）应用',

    themeConfig: {
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        repo: 'kuaifan/eeui',
        docsRepo: 'kuaifan/eeui-docs',
        lastUpdated: '最后一次更新',
        logo: '/logo.png',

        nav: [
            {text: '首页', link: '/'},
            {
                text: '文档',
                items: [
                    {text: '指南', link: '/guide/introduce.html', actives: ['/guide/', '/weex/styles/', '/weex/events/']},
                    {text: '组件', link: '/component/a.html', actives: ['/component/', '/weex/components/']},
                    {text: '模块', link: '/module/adDialog.html', actives: ['/module/', '/weex/modules/']},
                ]
            },
            {
                text: '插件',
                items: [
                    {text: '插件市场', link: '/markets/', actives: ['/markets/']},
                    {text: '开发文档', link: '/plugin/dev/create.html', actives: ['/plugin/']},
                ]
            },
            {text: '热更新', link: '/update/'},
            {text: '控制台', link: 'https://console.eeui.app/'},
            {text: 'Editor', link: 'https://editor.eeui.app/'},
            {text: '例子', link: 'https://editor.eeui.app/case'},
            {text: '社区', link: 'https://bbs.eeui.app/', isUnreadNotificationCount: true},
        ],

        sidebar: {
            '/guide/': sidebar.guide(),
            '/weex/styles/': sidebar.guide(),
            '/weex/events/': sidebar.guide(),

            '/component/': sidebar.component(),
            '/weex/components/': sidebar.component(),

            '/module/': sidebar.modules(),
            '/weex/modules/': sidebar.modules(),

            '/plugin/': sidebar.plugin(),
        },
        sidebarDepth: 1,

        serviceWorker: {
            updatePopup: true
        }
    },

    head: [
        ['script', { src: '//cdn.staticfile.org/jquery/2.0.3/jquery.min.js' }]
    ]
};
