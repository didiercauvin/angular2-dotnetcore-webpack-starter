var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// App Config
var appConfig = {
  entry: {
    'app': './wwwroot/app/main.ts',
  },

  output: {
     path: path.resolve(__dirname, './wwwroot/app'),
     filename: './bundle.js',
     sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, './wwwroot'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};

// Webpack Defaults
var defaultConfig = {
  devtool: 'source-map',

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  }

};


module.exports = webpackMerge(defaultConfig, appConfig);