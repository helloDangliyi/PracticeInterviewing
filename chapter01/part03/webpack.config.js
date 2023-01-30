const path = require("path"); //帮助我们去拼接路径
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  optimization: {
    minimize: false, // 关闭代码压缩，可选
  },

  // 指定入口文件
  entry: "./src/index.ts",

  devtool: "inline-source-map",

  // devServer: {
  //   contentBase: "./dist",
  // },
  //指定打包文件所在的目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 关闭webpack的箭头函数，可选
    },
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  // 指定webpack打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
              // 指定加载器
              loader: "babel-loader",
              // 设置babel
              options:{
                  // 设置预定义的环境
                  presets: [
                      [
                          // 指定环境的插件
                          "@babel/preset-env",
                          // 配置信息
                          {
                              // 指定浏览器的版本
                              "targets":{
                                  "chrome": "58",
                                  "ie": "11"
                              },
                              // 指定corejs的版本
                              "corejs":"3",
                              // 使用corehs的方式“usage” 表示按需加载
                              "useBuiltIns": "usage"
                          }
                      ]
                  ]
              }
          },
          {
              loader: "ts-loader",

          }
      ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      
    {
      // 自定义网页的title
      // title: "TS测试",
      // 指定一个模板，再去嵌入js文件
      template:'./src/index.html'
    }
    ),
  ],
};