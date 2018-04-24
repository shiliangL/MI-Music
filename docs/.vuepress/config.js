module.exports = {
    title: 'shiliangl',
    base: '/MI-Music/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: [
            ['/guide/index/', '项目说明'],
            ['/guide/start/', '项目描述'],
            ['/guide/api/', '项目API'],
            ['/guide/example/', '示例说明']
        ]
    },
    serviceWorker: true,
}
