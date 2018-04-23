module.exports = {
    title: 'shiliangl',
    base: '/MI-Music/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: [
            ['/guide/index/', '介绍'],
            ['/guide/start/', '起步'],
            ['/guide/example/', '示例']
        ]
    },
    serviceWorker: true,
}
