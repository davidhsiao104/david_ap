
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const extractSCSS = new ExtractTextPlugin('art.css');
const extractCssModules = new ExtractTextPlugin('style.css');

var getClientEnvironment = require('./env');

var publicUrl = '';
var env = getClientEnvironment(publicUrl);
console.log(env)
// var PROD = (process.env.NODE_ENV === 'production');
const postcssOpt = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ],
};

module.exports = {
    devtool: 'source-map',
    entry: {
      app: './src/index.js',
      // vendor: 'material-ui',
      // form: 'joi'
    },
    output:{
      path: path.resolve(__dirname, '../', 'public/assets'),
      filename: "bundle.js",
      publicPath: 'https://s3-ap-northeast-1.amazonaws.com/104buddy-dev/assets/',
    },
    module: {
      rules: [{
        oneOf: [{
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: "url-loader",
          options: {
            limit: 10000,
            path: 'public/assets/',
            emitFile: true,
            // publicPath: 'https://s3-ap-northeast-1.amazonaws.com/104buddy-dev/assets/',
            name: 'img/[name].[hash:8].[ext]'
          }
        },
        // { test: /\.js$/, include: /node_modules\/joi/, loader: 'babel-loader' },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            'plugins': ['lodash'],
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
            fallback: "style-loader",
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  localIdentName: "[name]_[local]_[hash:base64:3]",
                  // minimize: true,
                  modules: true,
                  // sourceMap: false
                },
              },
              { loader: require.resolve('postcss-loader'), options: postcssOpt },
            ]
          })
          // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            require.resolve('style-loader'),
            { loader: require.resolve('css-loader'), options: { importLoaders: 1 } },
            { loader: require.resolve('postcss-loader'), options: postcssOpt },
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractSCSS.extract({
            fallback: 'style-loader',
            use:[
              { loader: require.resolve('css-loader') },
              { loader: require.resolve('postcss-loader'), options: postcssOpt },
              { loader: "sass-loader" }
            ]
          })
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
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        // note: can also use array here, likes ['vender', 'form']
        name: 'vendor',
        filename: '[name].min.js',
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            // /\.js$/.test(module.resource) &&
            // note: /f2e-common-1||f2e-common-2/
            !/crop-component/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        }
      }),
      new webpack.DefinePlugin(env.stringified),
      new LodashModuleReplacementPlugin(),
      new UglifyJSPlugin({
        sourceMap: process.env.NODE_ENV !== 'production',
        uglifyOptions: {
          compress: process.env.NODE_ENV === 'production' ? { keep_fnames: true } : false
        }
      }),
      extractSCSS,
      extractCssModules,
      // new BundleAnalyzerPlugin({ 'analyzerMode': 'static' }),
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      dns: 'empty',
      tls: 'empty'
    }
};
