---
title: 工具-Webpack module編譯
date: 2020-08-11
tags:
  - Front-end
  - 工具
categories:
  - 前端
---

在上一篇基礎設定之後已經可以打包 JS 檔案了，這篇要來介紹如何打包 CSS(SASS,SCSS)

## 使用 webpack 編譯 CSS

webpack 本身只編譯 JS 而已，所以要先抓其他的套件才能編譯 css

```
npm i css-loader style-loader -D
```

    XXX-loader 類似webpack的編譯套件

像是 css-loader、vue-loader、react-loader

## 如何使用 css-loader

安裝完之後到 webpack.config.js，新增 module 及 rules，如果是跟著上篇一起做的，現在檔案應該長這樣了。

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  modules: {
    rules: [],
  },
};
```

在 rules 裡面新增物件

```js
{
    test:/\.css$/,
    use:"css-loader"
}
```

test 通常是 regex，表示只要通過這個測試的檔案，就會用 css-loader 去編譯，接著去你的 js 裡面 require CSS 的檔案就可以直接使用 css 了。

但這只是可以編譯 css 檔案，還沒有辦法直接使用在瀏覽器上面，因為瀏覽器讀取的 tag 是 style，所以還需要用剛剛安裝的"style-loader"才能直接使用。

```js
{
    test:/\.css$/,
    use:[
        {loader:"style-loader"},
        {loader:"css-loader"}
    ]
}
```

> 注意：  
> loader 的順序很重要，在 use 裡面的順序是由下到上，  
> 所以要先編譯 css 才能編譯 style

## 編譯 SASS,SCSS

如果需要編譯 SASS，也是要先安裝 loader，而專門編譯 SASS 的 loader 就叫 "sass-loader"

```
npm i sass-loader node-sass -D
```

接著跟 css-loader 一樣，去 config 新增 rule

```js
{
    test:/\.(scss|sass)$/,
    use:[
        {loader:"sass-loader"}
    ]
}
```

只輸入這樣的話，還是沒有辦法直接使用，因為只是編譯成 css 而已，所以需要再加上剛剛輸入的 css-loader，style-loader。

加入之後就可以正常在 js 裡面 require css,scss,sass 的檔案了

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  modules: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
```

最後的 index.js 檔案應該會長這樣

```js
// index.js
import hello from "./hello.js";

import css from "../css/style.css";
import sass from "../sass/sass.sass";
import scss from "../scss/scss.scss";

hello.sayHi(); // james
```

> 補充資料：  
> [webpack 官網 config 介紹](https://webpack.js.org/configuration/)  
> [webpack 零設定，入門教學](https://ithelp.ithome.com.tw/articles/10192578)
