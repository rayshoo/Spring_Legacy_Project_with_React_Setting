const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, 'src/front/index.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/main/webapp/"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // html파일을 읽을때 html-loader 실행하여 웹팩이 이해할 수 있도록 함
            options: { minimize: true }, // minimize : 코드 최적화 옵션
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'), // public/index.html 파일을 읽는다.
      filename: path.resolve(__dirname, 'src/main/webapp/index.html') // output 으로 출력할 파일은 index.html 이다.
    }),
  ],
};
