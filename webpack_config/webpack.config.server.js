
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const extractCssModules = new ExtractTextPlugin('temp.css');
var getClientEnvironment = require('./env');
var publicUrl = '';
var env = getClientEnvironment(publicUrl);
console.log(env)
// var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
    target: 'node',
    // externals: { express: 'express', ejs: 'ejs', encoding: 'encoding' },
    devtool: 'source-map',
    entry: ['./server/server.js'],
    output:{
      path: path.resolve(__dirname, '../', './server'),
      filename: "dist.js",
      publicPath: 'https://s3-ap-northeast-1.amazonaws.com/104buddy-dev/assets/',
    },
    module: {
      rules: [{
        oneOf: [{
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: "url-loader",
          query: {
            limit: 10000,
            emitFile: false,
            path: '/assets/',
            // publicPath: 'https://s3-ap-northeast-1.amazonaws.com/104buddy-dev/assets/',
            name: 'img/[name].[hash:8].[ext]'
          }
        },
        { test: /\.ejs$/, loader: 'ignore-loader' },
        {
          test: /hammerjs/,
          loader: "bundle-loader",
          options: {
            lazy: true
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            'presets': [['env', { 'modules': false, 'targets': { 'node': 6 } }]]
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            // cacheDirectory: true,
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: extractCssModules.extract({
            fallback: 'style-loader',
            use: [{
              loader: require.resolve('css-loader'),
              options: {
                publicPath: './assets/',
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64:3]",
                // minimize: true,
                modules: true,
                // sourceMap: false
              },
            }]
          })
          // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          loader: 'ignore-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: 'ignore-loader'
        }]
      }]
    },
    resolve: {
      alias: {
        '@Comps': path.resolve(__dirname, '../src/components'),
        // '@Containers': path.resolve(__dirname, '../src/containers'),
        '@Ui': path.resolve(__dirname, '../src/components/ui'),
        '@Buttons': path.resolve(__dirname, '../src/components/ui/buttons'),
        // '@Actions': path.resolve(__dirname, '../src/actions'),
        '@Utils': path.resolve(__dirname, '../src/utils'),
        '@Joi': path.resolve(__dirname, '../src/joi'),
        // '@Types': path.resolve(__dirname, '../src/img'),
        // '@Img': path.resolve(__dirname, '../src/img'),
      },
      extensions: ['.js', '.jsx', '.json'],
    },
    // We use PostCSS for autoprefixing only.
    // postcss: function() {
    //   return [
    //     autoprefixer({
    //       browsers: [
    //         '>1%',
    //         'last 4 versions',
    //         'Firefox ESR',
    //         'not ie < 9', // React doesn't support IE8 anyway
    //       ]
    //     }),
    //   ];
    // },
    plugins: [
      new webpack.DefinePlugin(env),
      new webpack.ProvidePlugin({
        "React": "react",
      }),
      extractCssModules
    ],
    node: {
  		__dirname: true,
  		fs: "empty"
    }
};
