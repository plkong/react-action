# 说明文档
## webpack 配置注意事项
- 使用 webpack-dev-server 与 react-hot-loader 启动热加载时，应该指定`publicPath`，并且不能与`path`相同。
页面加载的脚本路径也要修改为`publicPath`
``` javascript
//webpack.config.js
  output: {
    path: path.join(__dirname + '/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    publicPath: '/'
  }
```
``` html
<!--index.html-->
<body>
  <div id="container"></div>
  <script src="/bundle.js"></script>
</body>
```
- `entry`中的服务器路径与`devServer`的配置相对应
``` javascript
//webpack.config.js
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
  ],
  devServer: {
    host: 'localhost',
    port: 4000,
  }
```
- `only-dev-server`与`dev-server`的区别
简单来讲，在某些需要刷新浏览器的情况下，`only-dev-server`提示刷新，而`dev-server`自动帮你刷新
``` javascript
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './public/js/entry'
  ],
```
## webpack 构建
- 开发调试的构建使用 `npm run dev`，生产环境的构建使用`npm run pub`
- 性能分析文件生成使用`npm run profile`，在根目录找到`profile.json`，并上传到[http://alexkuz.github.io/webpack-chart/](http://alexkuz.github.io/webpack-chart/)
- 预渲染组件并生成静态文件`npm run server`


## package 包
- eslint eslint-plugin-react babel-eslint 是代码检查相关的工具，与构建无关。
- `whatwg-fetch`与`es6-promise`主要是为了支持 IE，虽然可以页面引入，但是与业务逻辑一起编译较为划算，二者加起来只增加了 
14K 的体积。如果页面引入，光`promise.min.js`就有 18K。  

