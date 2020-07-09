const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: {
    vendors: [
      'underscore',
      'react',
      'react-dom',
      'react-redux',
      'redux'
    ],
	javascript: ['@babel/polyfill', './app/client.js'],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
        app: path.resolve(__dirname, './src/app'),
        assets: path.resolve(__dirname, './src/assets')
      },
  },
  module: {
    rules: [
        {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                }
            },
            {
                loader: 'sass-loader',
            }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-optional-chaining']
            }
        }


      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(svg|gif|png|jpg|eot|ttf|woff|woff2)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'wwwroot'),
    filename: 'js/[id].js',
    publicPath: '/',
  },
  optimization: {
      minimize: false,
      nodeEnv: 'development',
      runtimeChunk: true,
	  splitChunks: {
            cacheGroups: {
                css: {
					test: /\.(css|sass|scss)$/,
					name: "commons",
					chunks: "all",
					minChunks: 1,
				},
				js: {
					test: /\.js$/,
					name: "commons",
					chunks: "all",
					minChunks: 1,
				},
            }
        }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs',
    }),
	new MiniCssExtractPlugin({
      filename: "client.[hash].css",
      chunkFilename: "client.css",
    }),
    new webpack.HotModuleReplacementPlugin({
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'web.api.applikaction': '"tableWeb"',
    }),
  ],
};
