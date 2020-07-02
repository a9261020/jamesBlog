# 2020-06-07 訂單進度條

![成品](./completed.jpg)

## 重點整理

- top:0; bottom:0 當上下都為 0，用 margin:auto，就是上下起始位置平均分配，可以達到置中的效果

- (+)為同層選取器

以這次的範例來看，會抓取到跟.list li 同層的 li，**但不會抓到自己**

```scss
.list {
  li {
    & + li {
      background-color: #fff;
    }
  }
}
```
