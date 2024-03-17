The difference between innerText and innerHTML is that innerText will not render HTML elements, but will display the tags and content as raw text.

```js
const targetInputContainer = document.querySelector(
  `#${entryDropdown.value} .input-container`
);
```

模板字符串 (Template Literals) ，动态获取目标输入容器元素

```javascript
// 修改css样式，使结果显示/消失
output.classList.remove("hide");
output.classList.add("hide");
```

```html
<div id="output" class="output hide"></div>
```

修改 css 样式，使结果显示/消失

```js
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
```

添加监听事件 （任何地方都行）
