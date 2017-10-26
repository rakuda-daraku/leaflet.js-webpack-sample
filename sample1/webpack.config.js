const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015'
            ],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
};

module.exports = config;