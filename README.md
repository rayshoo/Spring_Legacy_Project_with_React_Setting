# Spring Legacy Project with React from webpack

## Terminal Command

```cmd
yarn init -y

yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass react react-dom sass-loader style-loader webpack webpack-cli webpack-dev-server file-loader url-loader remove-files-webpack-plugin
```

```txt
// 개발모드 - 빌드x
yarn start
//localhost:9002/practice 에서 확인

// 개발모드 - 빌드o
yarn develop
//단순 빌드만 > 실제 WAS에서 돌려봐야함

// 빌드
yarn build
```

## multiple htmls bundling
```js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // https://webpack.js.org/plugins/extract-text-webpack-plugin/

module.exports = {
    entry : { // 각 html에 필요한 entry 파일
        index : './src/index.js',
        multiple : './src/multiple.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist'), // 경로
        filename : '[name].bundle.js' // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
                                      // index.bundle.js, multiple.bundle.js
    },
    module : {
        rules : [
            {
                test : /\.css$/, // .css 파일인 경우
                loader : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath : path.resolve(__dirname, 'dist'), // 경로
                })
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Index Title',
            hash : true,
            filename : 'index.html',
            excludeChunks : ['multiple'], // entry에서 해당 리스트를 제외한 나머지
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title : 'Multiple Title',
            hash : true,
            filename : 'multiple.html',
            chunks : ['multiple'], // entry에서 해당 리스트만 포함
            template: './src/multiple.html'
        }),
        new ExtractTextPlugin({
            filename : '[name].css', // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
                                     // index.css, multiple.css
            disable : false,
            allChunks : true
        })
    ]
};
```
