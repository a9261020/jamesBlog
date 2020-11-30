---
title: JS-valueAsNumber
date: 2020-11-30
tags:
  - Html
  - JavaScript
categories:
  - 前端
---

當你想要取到input裡面的value時，用e.taget.value，通常都會取到string型態，
如果用valueAsNumber的方法就可以直接取到number型態。

### 但是這種寫法只支援input[type="number"]的情況。

```javascript
const input = document.querySelector("input");
let qty;
// Bad Code
qty = parseFloat(input.value);
// Good Code
qty = input.valueAsNumber;
```

> 資料來源:[You can get the value of an input element as a number](https://www.30secondsofcode.org/blog/s/javascript-value-as-number)