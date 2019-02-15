module.exports = {
    base:'/Drip/',
    title: 'Drip-UI',
    description: 'vue UI',

    themeConfig: {
        nav: [

            { text: 'Github', link: '/https://github.com/wheadplus/Drip' },
        ],
        sidebar: [
            {title: '开始',
                collapsable: true,
                children: [
                    ['/', '介绍'],
                    ['/get-started/install', '安装']
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    ['/components/button', 'button - 按钮'],
                    ['/components/input', 'input - 输入框'],
                    ['/components/tabs', 'tabs - 标签类'],
                    ['/components/grid', 'grid - 栅栏'],
                    ['/components/layout', 'layout - 布局'],
                    ['/components/popover', 'popover - 气泡卡片'],
                    ['/components/toast', 'toast - 弹窗'],
                ]
            },




        ]
    }
}

