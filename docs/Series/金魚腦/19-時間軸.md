# 2020-06-14 時間軸

![成品](./completed.jpg)

## 實現步驟

1. 先設定一個 wrap 拿來裝 h1、p 跟 ul.timeline
2. 每個 li 都設定成 width:50%，然後在 a 上面做樣式(這樣點到的時候才會有 link)
3. 接著用 float，把基偶數分別飄到左邊跟右邊
4. 在基數 li 使用(::before || ::after)做出中間的線
5. 接著在每個 li 使用(第 4 點 用 before 這邊就用 after，反之)做出中間的點
6. 在 h2 使用(::before || ::after)做出每個 li 的連線

- 第五點，因為每個項目都只能有一個 before && after 第四點如果用 before，再用的話就會被蓋過去

## 重點整理

- float 屬性的使用時機

使用諸如 div 之類的區塊元素排版時，預設的排列方式都是由左至右、由上至下。但如果我們今天想要做的是多欄式排版，或是讓多個區塊元素並排時，就需要使用 float 屬性。

- float 完之後要清除

可以在組件最下面設定一個 div.clearfix，css 設定成 clear:both，也可以將父組件設定成 overflow:hidden。

- a display

tag a 原本的 display 預設為 inline，導致無法設定寬高，所以必須先設定成 block 之後才能設定樣式

- li 的線條做出來之後，選到最後一個項目，並將高度設定為 50%

- emmet

子層 child : >

同層 sibling : +

父層 climb-up : ^

重複 : \*

綁在一起 () ： (nav>ul>li)+(article>h3>p)

屬性寫法：[] img[src='test.jpg' alt='test']

編號 ： \$

ul>li.item\$\*4

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
</ul>
```

設定初始值：@
ul>li.item\$@5\*4

```html
<ul>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
  <li class="item8"></li>
</ul>
```

內容：{}
p{This is}

```html
<p>This is</p>
```
