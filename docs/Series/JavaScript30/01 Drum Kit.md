---
title: 01 Drum Kit
date: 2020-06-30
tags:
  - JavaScript
  - CSS
categories:
  - 前端
---

## 最終結果

    按下按鈕後觸發audio，並且改變css。

## 步驟拆解

1. 先監聽鍵盤被按下的時候
2. 按下之後要觸發 audio 播放音樂，並新增 css
3. 音樂結束後，移除 css

## 實現

1. 新增  addEventListener 利用  keydown  監聽鍵盤動作

```
window.addEventListener("keydown",playSound);
```

2. 建立  function playSound  
   1.  利用傳入事件的  keyCode  來對應取得的  audio  及  div  
   2.  判斷  keyCode  是否有對應到  audio，若無則退出  
   3.  使對應的  div  加上  class playing，產生特效  
   4.  將對應的  audio  播放時間設為  0  
   5.  播放對應的音檔

3. 建立  transitionend listener

   1. 監聽所有  class="key"的  DOM
   2. 當觸發  transitionend  的時候，就要呼叫  removeTransition

4. 建立  function removeTransition
   1. 判斷傳入事件的  propertyName  是否為  transform，若否則退出
   2. 若為  transform，則移除  playing  這個  class

## JavaScript 語法

element.classList
這個語法會回傳  element  的  class  值，範例中使用了  add,remove

```js
classList.add("aaa", "bbb", "ccc");
//新增多個className
classList.remove("aaa", "bbb", "ccc");
//移除多個className
```

若  DOM  元素為  audio，可以使用  play()、pause()的方法來使用播放及暫停，範例中使用了

```js
element.play();
element.currentTime = 0;
```

將 currentTime  設為  0  是達到可以連續播放的效果

## keyup、keydown、keypress 的差異
    
    keydown (不會區分大小寫，可以拿特殊案件)

- 監聽鍵盤壓下去的那瞬間
- 按住不放會連續觸發該事件
- 不分大小寫(a,A=65)
- 可取得特殊按鍵(enter,space…等)

---

    keypress (會區分大小寫，不能拿特殊按鍵)

- 按住會連續觸發該事件
- 無法取得特殊按鍵
- 會區分大小寫
- 但無法取得特殊按鍵

---

    keyup

- 監聽鍵盤放開的那瞬間，不會有連續的狀況發生
- 取得的東西基本上跟  keydown  一樣，**只有在  keyup  上可以取的  input  的最新資料**。

如果我們針對同個元素同時綁定了這三個鍵盤事件，那麼這三個事件執行的順序會是：

1. keydown

2. keypress

3. keyup  