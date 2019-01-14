module.exports = {
    base: '/Drip/',
    title: 'Drip-UI',
    description: '一个很好用的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    ['/get-started/','快速上手'],
                    ['/install/', '安装'],
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/button',
                    '/components/button',
                    '/components/button',
                    '/components/button',
                    '/components/button',
                    '/components/button',
                ]
            },
        ]
    },

}