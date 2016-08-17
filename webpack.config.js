const fse = require('fs-extra');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// Dev environment unless production is set explictitly
const DEV = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    javascript: ['babel-polyfill', './src/index.js'],
    html: ['babel-polyfill', './src/index.html'],
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/build',
  },

  devServer: {
    contentBase: './build',
    hot: true,
    noInfo: false,
    port: 2001,
    proxy: {
      '/api/0/documents': {
        target: 'http://cosmos.pmapconnect.com:8081/'
      }
    }
  },

  copydocs: [
    fse.copy('./src/static', './build/static', {clobber: true})
  ],

  module: {
    loaders: [
      // JS.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-object-rest-spread'],
      },
      // HTML.
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      // CSS.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      // SCSS.
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
        loader: 'url-loader?limit=8192'
      },
      // SVG.
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      // Images.
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]'
      },
      // Fonts.
      {
        test: /\.(csv|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};

// If environment is not production
if (DEV) {
  console.log('🛠  DEV environment detected 🛠'); // eslint-disable-line
} else {
  console.log('🌎  PROD environment detected 🌎'); // eslint-disable-line
  config.plugins.push(
    // As per https://github.com/reactjs/redux/issues/1029
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('"production"')
      }
    })
  );
}

module.exports = config;
