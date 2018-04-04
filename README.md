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
-- <router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。需要配置默认到当前点击视图时,配合redirect: '/Find',到 <router-link tag="div" class="tab-item" to="/Find"></router-link>

> 嵌套路由