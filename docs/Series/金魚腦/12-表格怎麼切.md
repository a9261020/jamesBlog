# 2020-06-04 表格怎麼切

![成品](./completed.jpg)

## 重點整理

- td 的專用屬性 colspan(跨欄)、rowspan(跨列)

```html
<table>
  <tr>
    <td colspan="2">跨了兩欄</td>
  </tr>
  <tr>
    <td rowspan="2">跨了兩列</td>
  </tr>
</table>
```

- caption(表格的標題、註解)

無障礙網頁必須要使用的東西，用 caption-side 的屬性控制要出現在上面還是下面

```html
<table>
  <caption>
    表格的標題
  </caption>
</table>
```

```css
caption {
  caption-side: bottom;
}
```

- border-radius 的角度 (左上，右上，右下，左上)

- :nth-child(n) 選定特定行數

可使用 odd(基數)、even(偶數)，也可以在 n 裡面直接做運算

```css
tr:nth-child(3n + 1) {
  background-color: #69c;
}
```

> 補充資料：http://csscoke.com/2013/09/21/%E4%BD%BF%E7%94%A8css3-nth-childn-%E9%81%B8%E5%8F%96%E5%99%A8%E8%A9%B3%E8%A7%A3/
