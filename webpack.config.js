const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
let config = {
  context: __dirname,
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-image-swipe.js',
    library: 'VueImageSwipe',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
      }],
      exclude: file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
      ),
    }, {
      test: /\.(jsx|js)$/,
      use: [{
        loader: 'babel-loader',
      }],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [{
        loader: process.env.NODE_ENV !== 'production'
        ? 'vue-style-loader': MiniCssExtractPlugin.loader
      },
      MiniCssExtractPlugin.loader,
      'css-loader',
      'resolve-url-loader',
      "postcss-loader"
      ],
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 100000,
          outputPath: 'images/',
        }
      }]
    }, {
      test: /\.(htm|html)$/,
      use: [
        'html-withimg-loader'
      ]
    },
    // {
    //   test: /\.(eot|ttf|woff|woff2|svg)$/,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       name: 'fonts/[name].[ext]',
    //       publicPath:'./'
    //     }
    //   }]
    // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
  ],
}
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config = merge(config, {
      devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      ],
      devtool: 'source-map',
    })
  }
  if (argv.mode === 'production') {
    config = merge(config, {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
          new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
        ]
      },
      plugins: [
        // build前执行下清空
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
          filename: 'vue-image-swipe.css',
          chunkFilename: 'css/[contenthash:12].css'  // use contenthash *
        })
      ]
    })
  }
  return config
}
