# m-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
- 项目中安装使用 sass 安装如下依赖
1.
npm install node-sass --save-dev
npm install sass-loader --save-dev
2.
webpack.base.conf.js的rules里面添加配置
{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}
3.不过第二步我没有去弄也可以生效

- 使用 stylus 安装
1.
npm install stylus --save-dev
npm install stylus-loader --save-dev

cnpm install stylus stylus-loader --save-dev (粑粑安装多次使用报错，最后使用这个方式安装了就可以了，问题未明确)

2.使用
<style scoped lang="stylus">
  .top {
    height: 80px;
    line-height: 80px;
    background-color: #0e5792;
    min-width: 800px;
  }
</style>

```

- vue-router

1. router-view
2. router-link
3. router-link-active
-- <router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 a 标签，可以通过配置 tag 属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。需要配置默认到当前点击视图时,配合redirect: '/Find',到 <router-link tag="div" class="tab-item" to="/Find"></router-link>

> 嵌套路由

- vue 的touch相关事件

- better-scroll 相关 api 及其应用场景 注意经常滚动失效的问题 需要注意的better-scroll 不能滚动到底部的问题

配置代理本地
- 本地启后台服务 http://localhost:3000/   需要把前端代代理到这个接口上怎么配置？ 为什么这样写?
```
    proxyTable: {
      '/': { //这里是我配置的名字
        target: 'http://localhost:3000',
        changeOrigin: true, //开启代理
      },
    },
```


-  使用vw实现移动端适配

> 安装 cnpm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

> 配置 .postcssrc.js
```
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334， 也可以不配置
      unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // (String)指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 。
      minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值。
      mediaQuery: false // (Boolean) 允许在媒体查询中转换`px` 
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}

```

``` bash
# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

```