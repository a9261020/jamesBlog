---
title: JS-Optional Chaining 和 Nullish Coalescing
date: 2020-11-30
tags:
  - JavaScript
categories:
  - 前端
---

## Before Optional Chaining

主要是用來處理，避免你進入一個undefined物件的prop。

簡單來說

```javascript
const articles = [
    {
        id: 1,
        title: "article 1",
        aurthor: {
            gender: "male",
            name: "James"
        }
    },
    {
        id: 2,
        title: "article 2",
    },
]

articles.forEach(article => {
    const aurthorName = article.aurthor.name
})
```

可以看到，在articles[1]中並沒有aurthor這個物件，更別提進入的name，這種狀況如果程式執行到，就會噴出紅字，***因為你無法進入undefined的prop。***

以前的解決方法會這樣寫
```javascript
const aurthorName = article && article.aurthor 
? article.aurthor.name
: undefined; 
```

先去判斷前面的物件是否存在，有存在的話才會去給值，這樣就可以避免直接取值所發生的錯誤，但是如果每個類型都要這樣寫的話，資料一堆可讀性就會下降。

## After Optional Chaining

有了Optional Chaining之後就可以將第一段的程式這樣改寫

```javascript
const aurthorName = article?.aurthor?.name
```

從原本的 "." 改為 "?."，意思是「當?.左邊的值不為null || undefined 才會往右邊繼續走，否則回傳undefined」

---

## Nullish Coalescing

```javascript
const response = await fetch(GET_CONFIG_API);
const itemHeight = response?.data?.height || 300;
document.getElementById('item').style.height = `${itemHeight}px`;
```

從上面的例子來看，這段程式會先呼叫api，然後判斷height的值，如果沒有就給default 300。

但因為 JS falsy 的特性，如果回傳值真的是 0 ，這樣0就會被當成false，執行後面的300，所以itemHeight就會變成300。

為了避免這種狀況發生，可以將上面的程式改寫成

```javascript
const itemHeight = response?.data?.height ?? 300;
```

?? 的意思是指，當左邊為null || undefined的時候，就會繼續執行後面的值，所以用這種寫法可以確保itemHeight一定是null || undefiend以外的型態。

> 資料來源：[來談 JavaScript 的 Optional Chaining 和 Nullish Coalescing (Part I)](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/%E4%BE%86%E8%AB%87-javascript-%E7%9A%84-optional-chaining-%E5%92%8C-nullish-coalescing-part-i-992625a1861d)