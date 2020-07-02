# 2020-06-07 登入表單

![成品](./completed.jpg)

## 重點整理

- button 的 display 預設為 inline-block，所以 button 裡面的空格會被當成文字，所以父層的 font-size 如果沒設定為 0 的話，button 的後面就會有空白

- background-size 的屬性

bg-size = auto | length | percentage | cover | contain

auto：原始長度

length：固定大小

percentage：根據父層大小調整

cover：當背景圖小於父層，卻又要覆蓋整個父層的時候使用。 **但圖片可能會因為放大而失真**

contain：跟 cover 相反，圖片大於父層是縮小到整個父層

> 補充資料：https://www.kip.com.tw/modules/news/article.php?storyid=35

- backdrop-filter vs filter

filter：是對元素本身去做 blur、bright…等處理

backdrop-filter：是為元素後面添加效果，適用於背後的所有元素，為了看到效果，父層的背景必須設定為透明。

backdrop-filter 為新的屬性，目前能支援的瀏覽器有限，要使用@supports 來支援

```css
/* 默认情况下的样式，如：不支持 backdrop-filter 甚至不支持 @supports 的情况下 应用此效果 */
.element {
  background-color: #fff;
}
@supports (-webkit-backdrop-filter: brightness(150%) blur(30px)) or
  (backdrop-filter: brightness(150%) blur(30px)) {
  /* 支持 backdrop-filter 时应用的效果，记得把一些属性覆盖掉 */
  .element {
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: brightness(150%) blur(30px);
    backdrop-filter: brightness(150%) blur(30px);
  }
}
```

> 補充資料：  
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter > https://get233.com/archives/css3-backdrop-filter.html
