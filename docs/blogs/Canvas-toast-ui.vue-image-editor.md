---
title: Canvas-toast-ui.vue-image-editor
date: 2021-09-19
tags:
  - Front-end
  - Canvas
categories:
  - 前端
---

## toast-ui.vue-image-editor

github: [toast-ui.vue-image-editor](https://github.com/nhn/toast-ui.vue-image-editor)

在公司專案有碰到一個需求是需要做賀卡之類的東西，所以需要做一個編輯圖片的編輯器。
在多方爬文之後只找到這個套件比較適合使用，今天就是要來介紹我踩過的坑(?)

### 使用方式

有兩種使用方式
- 套件原生樣式
- 套用套件API

如果單純是需要編輯功能，沒有樣式上考量的話，可以直接使用套件原生的樣式，還是有提供部分樣式的修改，但相對手刻來說沒有那麼彈性。

> 相關的樣式調整可以看這邊 [Theme](https://github.com/nhn/tui.image-editor/blob/master/apps/image-editor/examples/js/theme/black-theme.js)

但今天的重點不是原生的套件，因為要配合客戶的設計稿，所以只能自己手刻套用API 哭啊Q_Q

### 本文開始

相關的安裝都可以直接看這邊 [基本操作](https://github.com/nhn/toast-ui.vue-image-editor/blob/master/docs/Basic-Tutorial.md)

今天要來說明如何使用它的原生API [API SPEC](http://nhn.github.io/tui.image-editor/latest/ImageEditor)

所以大部分的時間只要看Instance Methods就好了

最基本的使用方式，要使用invoke的方法才能套用他的原生API

範例如下

``` html
<template>
  <ImageEditor
    ref="tuiImageEditor"
    :options="options"
    :class="tuiImageEditorClass"
  ></ImageEditor>
  <button @click="uploadImage(image)">upload Image</button>
</tempalte>
```

```javascript
<script>
export default {
  data: {
    options: {
      includeUI: false,
      cssMaxWidth: 0,
      cssMaxHeight: 0,
      selectionStyle: {
        borderColor: '#fff',
        cornerStyle: 'circle',
        cornerColor: '#fff',
        cornerSize: 12,
      },
    },
  },
  methods: {
    uploadImage(image) {
      const { url, name } = image;
      // 要用this.$refs.tuiImageEditor.invoke
      // invoke第一個參數為Instance Methods的名稱
      // 基本上所有的用法都是這樣使用
      this.$refs.tuiImageEditor.invoke('loadImageFromURL', url, name).then(objectProps => {
        console.log(objectProps)
      })
    }
  }
}
</script>
```

### 特殊的狀況

如果是碰到轉換模式、裁切圖片的時候，一定要先使用
1. stopDrawingMode
2. startDrawingMode (你需要使用的模式)
之後才可以順利使用，不然你就會一直收到錯誤訊息，哭啊。