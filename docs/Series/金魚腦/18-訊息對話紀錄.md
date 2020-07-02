# 2020-06-13 訊息對話紀錄

![成品](./completed.jpg)

## 實現步驟

1. 用一個對話方塊(.dialogue)包住 user 兩端(remote,local)
2. user 端都會有.avatar(selfie,name) .txt(聊天訊息)
3. 每個 txt 旁邊都會有個小箭頭(用 ::before || ::after 都可以)

## 重點整理

- flex 的特性

會讓物件隨著內容縮小、放大，如果不要這個設定的話，在不想要跟著縮小放大的物件內設定：flex-shrink:0 (如果沒設定的話，訊息一堆就會將原本設定好的 avatar 撐開)

次軸預設會撐滿(stretch)，如果沒有設定的話，原本的 txt 會撐滿變得很大

- overflow:hidden

將父組件設定這個屬性，如果裡面子組件超過的話，就會消失

- flex:order

local 端的大頭會在右邊，所以將 local 端的 txt 設定為 order:-1，flex 的順序就會變成

> .txt(-1) -> .avatar(0)

這種狀況的話文字就會一直在右邊

- jusify-content:flex-end

要把 local 端一直設定在 flex 容器的最右邊，所以要設定 jusify-content:flex-end，不然內容不夠滿的話會無法靠右對齊
