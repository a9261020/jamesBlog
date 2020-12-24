---
title: JS-Set & tabindex
date: 2020-12-24
tags:
    - JavaScript
categories:
    - 前端
    - JavaScript
---

## Set

Set 有點像是陣列 (array)，Set 中的元素 (element) 可以是任何資料型態，兩者不同的地方在於 Set 中所有的值都是唯一的 (unique values)，不會有重複的值，當你存入重複值 (duplicate values) 會被忽略。

### 基本用法

```JavaScript
// Set裡面可以是任何值，但通常會用來操作陣列及物件
const isAry = [1,1,2,2,3,3,4,5,5];
const isSet = new Set(isAru);
console.log(isSet)
/* Set {
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
} 
會自動過略重複的值
*/

```

### add

```JavaScript
// add本身會返回一個Set，所以可以用Chaining的方式操作
isSet.add(isAry).add(6);
console.log(isSet)
/* Set {
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6,
} 
會自動過略重複的值
*/
```

### has

```JavaScript
// 用來判斷set裡面是否有這個值
isSet.has(1) // true
isSet.has(5) // true
isSet.has(7) // false
```

### size

```JavaScript
// 用來判斷set的資料長度
isSet.size // 6
```

### Set轉陣列

```JavaScript
const setToAry = [...isSet];
console.log(setToAry) // [1, 2, 3, 4, 5, 6];
```

### 使用Set過濾陣列相同值

```JavaScript
const ary = [1,2,2,3,5,5,7,7,8,8];
const isSet = new Set(ary);
const setToAry = [...isSet];
console.log(setToAry) // [1, 2, 3, 5, 7, 8];
```

### 使用Set過濾物件相同值

```JavaScript
const bills = [
  { date: "2018-01-20", amount: "220", category: "Electricity" },
  { date: "2018-01-20", amount: "20", category: "Gas" },
  { date: "2018-02-20", amount: "120", category: "Electricity" }
]

const categories = [...new Set(bills.map(bill =### bill.category))]

console.log(categories) // ["Electricity", "Gas"];
```

> 參考資料：  
> [JavaScript ES6 Set and WeakSet Object 物件
](https://www.fooish.com/javascript/ES6/Set-and-WeakSet.html)  
> [How to get the unique properties of a set of objects in a JavaScript array](https://flaviocopes.com/how-to-get-unique-properties-of-object-in-array/)

## tabindex

### 無法focus && blur

前幾天要寫focus跟blur的功能才發現，原來onblur && onfocus只能套用在某些特定的element上(input, select, button, a)，所以其他的element(div, span, table)⋯⋯等都是不支援focus, blur func的。

### 如何處理

在這種不支援focus的element可以使用HTML attribute 處理這種狀況，也就是今天要介紹的 **tabindex**。

```html
<ul>
    <li tabindex="0">0</li>
    <li tabindex="1">1</li>
    <li tabindex="3">3</li>
    <li tabindex="2">2</li>
    <li tabindex="-1">-1</li>
</ul>
```

複製上面的HTML之後，再使用tab去觀察變化，就會發現tab會先跳到1 -> 2 -> 3 ，我們就可以在上面去做focus && blur 了

> 例外狀況

- <font color="#fff">tabindex="0"</font>  
    會被放在 tabindex >= 1 的元素後面，也就是他是tab的最後一個。

- <font color="#fff">tabindex="-1"</font>  
    這種狀況按tab會被瀏覽器自動忽略，只能使用JavaScript去操作focus && blur。

> 參考資料  
> [javascript.info 聚焦：focus/blur](https://zh.javascript.info/focus-blur)