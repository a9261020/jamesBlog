# 2020-06-06 收合式側邊選單

![成品](./completed.jpg)

## 實現步驟

1. 加上收合的箭頭區

2. 讓他可以收放

3. 填加控制收回的控制器

## 重點整理

- 用 input:checkbox，去當作控制，然後要設置 id，之後 label 才有辦法控制

```html
<input type="checkbox" id="side-menu-switch" />
```

- 新增 label 去對 input 做控制，所以 for 要跟 input 的 id 一樣

```html
<label for="side-menu-switch">箭頭</label>
```

- label 定位在 side-menu 上面

- 確認 input 被 check 的 css 這樣寫

```scss
input:checked {
  .checked {
    color: red;
  }
}
```
