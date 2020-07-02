# 2020-05-31 方塊酥版面

![成品](./completed.jpg)

## 重點整理

- CSS 中的(~)選取器會影響後方全部元素

```html
<div>
  <div>001</div>
  <div><p>002</p></div>
  <p>003</p>
  <p>004</p>
</div>
```

```css
div ~ p {
  font-size: 20px;
  color: #000;
}
```

003 004 都會變成黑色的字體

- float 會將該屬性飄浮起來，所以裡面的容器將偵測不到 float 的物件，必須要用 clear:both，去清除後才有辦法抓到，這邊在父層掛上 overflow:hidden 為偷懶的做法。

> 補充資料：https://audilu.com/2011/02/19/css-overflow-clear-float/
