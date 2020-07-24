---
title: CSS-文字換行(word-wrap)、空白換行(white-space)
date: 2020-07-24
tags:
  - Front-end
  - CSS
categories:
  - 前端
---

今天要來介紹三個 css 的文字處理屬性

- word-break
- word-wrap
- white-space

## word-break：決定單詞如何斷行

```css
word-break: normal(default) | break-all | keep-all | break-word | initial | inherit;
```

normal：以單詞斷行

不會碰到 Eng 跟 lish 被分開的狀況，不是一起在上、就是一起往下

中文的話則以字斷行

break-all：任意斷行 (設定這個之後 word-wrap 不會生效)

會碰到最後變成 Eng 但是 lish 被分到下一行的狀況

keep-all：以詞斷行

## word-wrap：斷行 overflow 該如何處理

```css
word-wrap: normal(default) | break-word | initial | inherit;
```

normal：保持在同一行

break-word：斷詞且換行

    如果已經設定 word-break:break-all 就不會overflow，所以word-wrap會沒作用

## white-space：決定如何處理元素中的空白及斷行

```css
white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;
```

normal：碰到換行符號就換行

nowrap：打死都不換行，除非碰到<br / >

pre：保留原本的空白，碰到 overflow 也不會換行

pre-line：保留原空白，碰到 overflow 自動換行

pre-wrap：保留原排版，合併多餘的空白，overflow 自動換行

> 參考資料：  
> [word-break、word-wrap(overflow-wrap) 及 white-space 的差別與用法](https://blog.camel2243.com/2016/10/02/css-word-break%E3%80%81word-wrapoverflow-wrap-%E5%8F%8A-white-space-%E7%9A%84%E5%B7%AE%E5%88%A5%E8%88%87%E7%94%A8%E6%B3%95/)  
> [CSS 語法，文字換行，強迫不換行。](https://www.puritys.me/docs-blog/article-31-CSS-%E8%AA%9E%E6%B3%95%EF%BC%8C%E6%96%87%E5%AD%97%E6%8F%9B%E8%A1%8C%EF%BC%8C%E5%BC%B7%E8%BF%AB%E4%B8%8D%E6%8F%9B%E8%A1%8C%E3%80%82.html)
