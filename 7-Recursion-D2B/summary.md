1. `parseInt()`

```javascript
const inputInt = parseInt(numberInput.value);
```

2. recursion

```javascript
// 递归
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    // 终止条件
    return String(input);
  } else {
    // 继续
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

3. `setTimeout()` is to execute a function or evaluate an expression after a specified period of time.

```javascript
// 结果
setTimeout(() => {
  result.textContent = decimalToBinary(5);
}, 20000);
```
