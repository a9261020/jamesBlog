---
title: video介紹
date: 2020-07-25
tags:
  - Front-end
  - Html
categories:
  - 前端
---

因為之前被告知未來可能要在網頁中放影片，所以今天無聊研究，最後發現實作中的 autoplay 沒有辦法使用，最後有找到一個特別的解法，所以特別寫一篇來記錄

    video是html5才加入的新標籤，用來擺放影片檔的tag。

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <!-- 如果瀏覽器不支援mp4的話就會顯示下面的ogg-->
  <source src="movie.ogg" type="video/ogg" />
  <!-- 如果還是不行就會顯示下面的文字 無法支援video tag-->
  Your browser does not support the video tag.
</video>
```

```html
<video autoplay loop controls width height muted src preload></video>
```

- autoplay：自動播放
- loop：無限循環
- controls：出現控制面板 (暫停、靜音、全螢幕)
- width、height：調整寬高
- muted：靜音
- src：影片來源
- preload：預先加載

如果有多種格式的話，裡面就要加上<source\>tag，不同的影片格式就要對應不同的 type

## 特別的 Bug(?)

目前的 chrome 因為瀏覽器本身的關係，靜止自動播放有音樂的影片，所以如果要自動播方的話一定要加上 muted，才有辦法自動播放。

> 引用資料：  
> [解決 chrome 無法自動播放](http://www.nooong.com/docs/chrome_video_autoplay.htm)  
> [Html5 Video Autoplay 影片自動播放
> ](https://dometi.com.tw/blog/html5-video-autoplay/)
