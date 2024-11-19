const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.ts',           // 메인 파일
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'         // 컴파일 결과물
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,          // TypeScript 파일 처리
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,           // CSS 파일 처리
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // 확장자 처리
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // HTML 템플릿
    })
  ],
  devServer: {
    static: './dist',
    hot: true
  }
};
