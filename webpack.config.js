// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 对html进行打包
const path = require("path");

module.exports = {
  mode: '', // 模式： development开发环境 | production生产环境 | none
  entry: './src/index.js', // 入口： string | object | array 设置多个入口文件
  output: { // 出口
    path: '', // 输出文件的目标路径 | 必须是绝对路径 path.resolve()
    filename: 'build.js', // 输出文件的文件名
    // filename: "[name].js", 用于多个入口点
    // filename: "[chunkhash].js"， 用于长效缓存
    publicPath: '', // 输出解析文件的目录，url相对于 html页面
    library: "", // 导出库 exported library 的名称
    libraryTarget: "umd", // 通用模块定义
    // libraryTarget: "umd2", // 通用模块定义
    // libraryTarget: "commonjs2", // exported with module.exports
    // libraryTarget: "commonjs-module", // 使用 module.exports 导出
    // libraryTarget: "commonjs", // 作为 exports 的属性导出
    // libraryTarget: "amd", // 使用 AMD 定义方法来定义
    // libraryTarget: "this", // 在 this 上设置属性
    // libraryTarget: "var", // 变量定义于根作用域下
    // libraryTarget: "assign", // 盲分配(blind assignment)
    // libraryTarget: "window", // 在 window 对象上设置属性
    // libraryTarget: "global", // property set to global object
    // libraryTarget: "jsonp", // jsonp wrapper
    // 导出库(exported library)的类型
  }, 
  modules: { // 配置 loader转换文件 
    rules: [
      {
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
        test: /\.(css|scss)$/,
        include: [ //
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        use: [ // 可以配置多个loader
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: { // 解析模版请求的选项
    modules: [ // 用于查找模块的目录
      "node_modules",
      path.resolve(__dirname, 'app')
    ],

    extensions: ['.js', '.json', '.jsx', '.css'], // 配置文件名后缀
    alias: { // 配置别名，返回新路径

    }
    // 
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin()
  ],
  preformance: { // 性能
  // 
  },
  devtool: 'source-map', // 调试工具
  devServer: { // 配置服务
    proxy: {}, // 代理
  }
}