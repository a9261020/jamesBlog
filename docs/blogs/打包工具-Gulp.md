---
title: 打包工具-Gulp
date: 2020-07-23
tags:
  - Front-end
categories:
  - 前端
---

## Gulp 是什麼？

Gulp 是一個前端任務管理工具

## 用了可以得到什麼

透過 Gulp 可以做到以下事情

- 編譯 SASS、SCSS
- 壓縮 .css .js 圖檔
- 其他 ⋯

## 如何使用

這篇會介紹最簡單的使用方式

## 安裝區

1. 先建立環境

- 安裝 NODE、NPM 環境 [按我下載](https://nodejs.org/en/)

2.安裝 Gulp

- 到終端機輸入

```js
// 全域安裝
npm install --global gulp-cli
```

- 接著建立一個資料夾，開啟專案的資料夾之後輸入

```js
// 安裝到專案資料夾裡面
npm install --save-dev gulp
```

- 輸入 gulp --version 如果有跳出 CLI & Local 的版本代表正確安裝

> 補充資料：[gulp 官方網站](https://gulpjs.com/docs/en/getting-started/quick-start)

## 正式操作

先在專案資料夾底下建立一個 gulp 的設定檔 gulpfile.js

gulp 的基本結構就是 task

```js
var gulp = require("gulp");

gulp.task("sayHi", function() {
  console.log("Hello everyone");
});
```

先載入 gulp 之後就可以透過 task 這個方法建立 task，好了之後在終端機輸入

```js
gulp sayHi
// 就可以得到 Hello everyone
```

gulp 基本 function

- task
- src
- pipe
- dest
- watch

### task

    定義任務名稱跟裡面該做的事情

### src

    檔案/資料來源，放編譯前的檔案

### pipe

    將任務串接

### dest

    定義編譯完之後的檔案要放在哪裡

### watch

    監控路徑的檔案如果變更，就要做什麼動作

```js
// gulpfile.js
var gulp = require("gulp");

gulp.task("compile", function() {
  return gulp.src("js/*.js").pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("js/*.js", ["compile"]);
});

gulp.task("default", ["watch"]);
// 輸入default代表啟動時不用輸入任務名稱
```

以上面的例子來看，意思就是

1. 先載入 gulp
2. 定義一個任務叫做 compile // gulp.task("compile","compile 會做的事情")
3. gulp.src("js/\*.js") js 資料夾裡面所有的 js 檔案都編譯
4. .pipe 結束上面的編譯之後會做的事情
5. gulp.dest("build") 編譯之後的檔案要放到 build 這個資料夾
6. 定義一個任務叫做 watch 用來監控路徑(js/\*.js)裡面的檔案，如果有變化就要做 compile 這個任務
7. 接著定義 default，之後只要在終端機輸入 gulp 就會直接執行 default 裡面的任務

接著有空的話會再寫 sass 的 pre-processor
