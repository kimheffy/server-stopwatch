const webpack = require('webpack');
module.exports = {
  watch: true,
  target: 'electron-renderer',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: __dirname + '/js',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              "babel-plugin-transform-class-properties",
              "transform-react-jsx",
            ],
            presets: ["@babel/preset-env"]
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', ['electron']),
  ],
};
