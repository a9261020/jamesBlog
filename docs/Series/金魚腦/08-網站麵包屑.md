# 2020-05-29 網站麵包屑

![成品](./completed.jpg)

## 重點整理

- 「+」親代選取器，只會抓取到同層的標籤，以下面的例子來看，li 都是同層，a 是 li 的子層，所以下面 li + li 的寫法，會將第一個以後的所有 li 都變成字是紅色的。

> 補充資料：http://csscoke.com/2013/10/14/was-framed-and-forgotten-ie6-css-selectors/

```html
<ul>
  <li><a href="#">項目一</a></li>
  <li><a href="#">項目二</a></li>
  <li><a href="#">項目三</a></li>
  <li><a href="#">項目四</a></li>
  <li><a href="#">項目五</a></li>
  <li><a href="#">項目六</a></li>
</ul>
```

```css
li + li{
	color:#F00;}
}
```

- 同一個群組的 CSS，可以使用%去宣告變數，也可以直接繼承其他的 css，用@extend 繼承。

編譯前

```scss
%bc-yellow {
  background: #ff0;
}
.txt-yellow {
  color: #ff0;
}

li {
  &:hover {
    @extend %bc-yellow;
    @extend .txt-yellow;
  }
  &:last-of-type {
    @extend %bc-yellow;
    @extend .txt-yellow;
  }
}
```

編譯後

```css
li:hover,
li:last-of-type {
  color: #ff0;
  background: #ff0;
}
```
