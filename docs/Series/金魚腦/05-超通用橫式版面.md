# 2020-05-24 超通用橫式版面

![成品](./completed.jpg)

## 重點整理

- 把 img 跟 txt 分開，可以比較好去做變化
- 當圖片變形(放大、縮小)的時候，可以在 img 使用 object-fit 去調整成跟容器一樣大

```css
img {
  object-fit: cover;
}
```

> 補充資料：https://blog.camel2243.com/2017/01/21/css-object-fit-object-position-%E8%AA%BF%E6%95%B4%E7%BD%AE%E6%8F%9B%E5%85%83%E7%B4%A0img-%E7%AD%89%E7%9A%84%E5%85%A7%E5%AE%B9/

- flex 的次軸在預設中都會將整個容器填滿，這時候只要將對 align-item / align-self 做設定就好了

- margin:auto 就是把剩下的空間全部拿來做分配
