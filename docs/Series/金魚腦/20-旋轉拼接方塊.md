# 2020-06-14 旋轉拼接方塊

![成品](./completed.jpg)

## 實現步驟

1. 先做出 9 個方塊
2. 用::before || ::after 做出方塊 並且轉 45deg
3. 將第二排的物件都向右偏移

## 重點整理

- line-height

只有單行的資料，可以使用 line-height = 外容器的高度，這樣就會將資料垂直置中。

- nth-child(n+4)

n 代表由 0 開始遞增的數字，所以上面的意思是：**0+4、1+4、2+4…以此類推**

> 補充資料：http://csscoke.com/2013/09/21/%E4%BD%BF%E7%94%A8css3-nth-childn-%E9%81%B8%E5%8F%96%E5%99%A8%E8%A9%B3%E8%A7%A3/
