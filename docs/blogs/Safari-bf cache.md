---
title: Safari-bf cache
date: 2021-09-19
tags:
  - Safari
categories:
  - 前端
---

## 事情緣由

正常來說進入一個網站(上、下一步)之後一定會先重新讀取。

之前專案碰到的問題是，跳轉到付款頁面之後，客戶輸入完卡號，正常情況會導頁至結帳完成畫面。
但如果此時客戶按了上一頁，正常來說應該要重新讀取了，但是客戶卻說沒有重新讀取，一樣可以按結帳，
但因為流程已經走完了，訂單也已經建立，這時如果再重新按付款就會導致系統錯誤，客戶不會知道自己到底結帳沒。

## 重現邏輯

正常來說 頁面讀取之後會發送request，但客戶說他並沒有重新讀取，連vuex來的資料都完好如初，
所以就先測試電腦的機制，上一頁都是會重新讀取，於是測試手機版，也都滿正常的，後來測試到safari的時候就出事了，
畫面沒有重新讀取，從這邊就知道又是Safari在搞 (又是你)。

## bf cache 

爬文之後發現Safari本身有這個bf cache 機制，

部分瀏覽器（主要是 Safari、Firefox）為了在往返上下一頁有更好的效能，會使用 BFCache 的策略，會把離開前的 DOM 狀態、JavaScript 狀態都保存住。  

當用戶回到上一頁或是進入下一頁時，就會使用記憶體內的 Cache，一切都會像離開前的模樣，好處是可以優化操作體驗，因為都從 Cache 拿，不需要重新 reload 頁面，操作起來就會很迅速，也不需要再藉由網路讀取資料，保留狀態也符合大部分情境的使用者預期，可以回上頁後繼續剛才未完成的操作。

> 資料來源：[BFCache 筆記之你怎麼都沒變啦
](https://chihyang41.github.io/2020/05/03/BFCache-%E7%AD%86%E8%A8%98%E4%B9%8B%E4%BD%A0%E6%80%8E%E9%BA%BC%E9%83%BD%E6%B2%92%E8%AE%8A%E5%95%A6/)

## 解決方式

1. 可以在 HTML 加上下面的 tag，設置後可以避免頁面被 cache。

```html
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
```

但因為我們客戶那邊的伺服器會儲存cache，所以這個方式對我這個case無效 Q_Q  
只好採用第二種方式

2. 在使用 pageshow, pagehide 兩個事件時，event 可以使用 persisted 來判斷是否使用 BFCache，當有使用 BFCache　時，event.persisted 就會回傳 true。

```javascript
if (process.client) {
    window.addEventListener('pageshow', (evt) => {
        if (evt.persisted) {
            window.location.reload();
        }
    });
}

```


