---
title: 工具-Webpack 基礎設定
date: 2020-08-11
tags:
  - Front-end
  - 工具
categories:
  - 前端
---

## webpack 是什麼?

webpack 是一個打包工具

webpack 的重點是在模組化打包

- 打包(js,css,圖片)
- 壓縮(js,css)
- 編譯(sass,scss)

## 跟 gulp 的差異

- Webpack 可以做到的是打包及編譯
- Gulp 可以做到任務管理 只是任務管理剛好也可以做到打包及編譯

所以才會容易讓人搞混，但如果今天有個文件只需要壓縮但不需要打包，這種情況就可以直接用 Gulp 處理就好。

## 如何使用 webpack

```
npm i webpack webpack-cli --save-dev
```

安裝好之後在專案資料夾下面建立 "webpack.config.js" 檔案

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

- entry: webpack 應該從哪隻檔案去打包
- output (必須要是絕對路徑，所以通常會用\_\_dirname 去取得絕對路徑，但絕對路徑不太方便，所以要用 path.resolve 再轉換成相對路徑)
  - filename: 打包完之後的名稱
  - path: 打包完之後要放到哪裡

現在可以建立一個 "index.js" 的檔案，然後隨便打個語法之後在 terminal 輸入 webpack 就可以得到一個 dist/main.js

但這樣每修改完就要再打包一次很麻煩，所以可以使用監控功能

webpack -w (--watch)

這樣只要有監測到修改，就會自動編譯出一個 main.js 了

或者是可以直接在 config 檔裡面設定 watch:true

## 多個 webpack.config.js

可以直接在 script 設定需要用哪個 config

    webpack --config webpack.config.js // dev
    webpack --config webpack.production.js // production

## 編譯 JS

再建立另一隻 Hello.js

```js
const hello = {
  name: "james",
  sayHi: function() {
    console.log(this);
  },
};

export default chrome;
```

這時候只要在 index.js require hello.js 就可以直接使用 hello.js 裡面的資訊了

```js
// index.js
import hello = require("./hello.js");

hello.sayHi(); // james
```

這樣輸入 webpack 之後就會把兩隻 js 打包成一個 js 了

## 如何 build

    webpack -p

輸入之後就可以得到 product 的 code，然後查看大小就會發現 build 出來的檔案已經做了 minify，所以檔案會變得很小，邏輯部分也會變得很安全。
