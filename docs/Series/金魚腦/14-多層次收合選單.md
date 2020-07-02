# 2020-06-06 多層次收合選單

![成品](./completed.jpg)

## 重點整理

- <a></a> 裡面是沒有辦法再包超連結的，如果要做出多層選單，結構必須
  在 a 後面再包一個 ul

```html
<nav>
  <ul>
    <li>
      <a>第一層</a>
      <ul>
        <li>
          <a>第二層</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

- 當子選單跟主選單的線對得太準，會不知道是哪一個 a 的 ul，所以會建議偏移一點點

- (>) 子層選取器，會直接選到子層的東西

```html
<div class="container">
  <div>This is the first child</div>
  <div><p>This is the second child</p></div>
  <p>This is the third child</p>
</div>
```

```css
.container p {
  font-size: 50px;
  /* 
  This is the second child
  This is the third child
  都會被放大，因為他們都是包在.container裡面的p
  */
}

.container > p {
  font-size: 50px;
  /* 
   這時候只有third child會套用，
   因為他是.container的子層
   */
}
```

以金魚的範例來說，在.nav 裡面的每個 li 被觸碰到時，都會對子層的 a 去加背景色

```html
<ul class="nav">
  <li>
    <a href="">
      <i class="fas fa-users"></i>
      鐵人賽</a
    >
    <ul>
      <li>
        <a href="">金魚都能懂的網頁設計入門</a>
        <ul>
          <li><a href="">Day 1</a></li>
          <li><a href="">Day 2</a></li>
          <li><a href="">Day 3</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css
.nav li:hover > a {
  background: rgba(255, 255, 255, 0.6);
}
```

> 補充資料：https://pjchender.blogspot.com/2015/07/css.html
