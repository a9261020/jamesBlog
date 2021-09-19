---
title: Safari-userAgent
date: 2021-09-19
tags:
  - Safari
categories:
  - 前端
---

## 事情緣由

有一個專案是採用AWD架構(Desktop, Mobile, Pad)，所以會在一開始SSR的時候判斷UA，一開始都滿正常的，
結果客戶說Pad的版本怪怪的，我們拿來公司的測試機都是正常的，後來經過詢問之後發現客戶使用的是新版的iPad

## 問題

[User Agent in Safari on iPadOS](https://developer.apple.com/forums/thread/119186)

iPad在iOS13以上的話 userAgent就會變成 

```javascript
// 以前Macintosh的字樣是iPad
const userAgent = 'Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15'
```

是因為Safari在iPad13的時候會默認使用桌機版預覽網頁，所以UA會變得跟電腦一樣，這種機制導致在iPad13的時候無法判斷現在這個裝置是電腦還是iPad。

## 解決方式

- 透過裝置的的最大點擊

```javascript
// BTW iPad13 maxTouchPoints === 5
const isiPad = (navigator.userAgent.match(/(iPad)/) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
```

不過這種解決方式是用navigator判斷  
所以只能用在client端  
目前在server端仍舊是無解的狀態

> 參考資料  
> [User Agent in Safari on iPadOS](https://developer.apple.com/forums/thread/119186)  
> [iOS13 苹果“偷摸地“改了iPad的userAgent，你被坑过吗](https://juejin.cn/post/6865658712665620494)
> [Front end access to mobile phone and device types
](https://developpaper.com/front-end-access-to-mobile-phone-and-device-types/)

