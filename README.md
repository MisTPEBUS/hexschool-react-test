# 圖片相簿管理系統實作題｜六角學院｜框架專題班

## 題目：圖片相簿管理系統

**功能描述：**

1. 請 clone 此模板，實作一個圖片相簿管理系統，能夠新增相片、設定標籤與篩選顯示。
2. 實現以下功能：
   - **新增相片、標籤管理：** 輸入圖片網址與標題，以及將每張圖片設定標籤（風景、美食、人物等），然後點選新增相片到相簿
   - **顯示相片、標籤篩選：** 根據標籤篩選顯示相片，可選擇「全部」或特定標籤。
   - **刪除相片：** 可從相簿中移除特定相片。
   - **查看大圖：** 點擊相片可以查看放大版本。

Note：
新增相片功能，使用者需填寫圖片網址、標題，並選擇標籤；如果其中有沒填寫到的欄位，則可顯示「請填寫完整的圖片網址和標題！」、「請選擇標籤！」等等訊息。

## 可參考的文件資源

1. [React 官方文件](https://react.dev/learn)、[React Hooks - useState](https://react.dev/reference/react/useState)
2. [MDN - Array](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)（map, filter）
3. [MDN - 解構賦值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
4. [MDN - 條件渲染](https://react.dev/learn/conditional-rendering)

## 實作題檢核點

1. 使用 useState 管理相片列表與標籤狀態
2. 能夠透過表單新增相片（包含圖片網址、標題、標籤），當標題、圖片網址、標籤其中一個欄位為空時，則無法新增相片
3. 新增相片後表單欄位會自動清空
4. 能夠將相片渲染到畫面中（當相簿為空時，顯示適當的提示訊息）
5. 標籤篩選功能正確運作（全部/風景/美食/人物/其他），在篩選後只顯示符合條件的相片
6. 能夠刪除特定的相片
7. 點擊相片可顯示放大效果或詳細資訊