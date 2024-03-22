1. `reduce()` executes a provided function for each value of the array, resulting in a single output value.

```javascript
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);
```

2. Both `some()` and `every()` are array methods that are used to check whether elements in an array satisfy certain conditions.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Check if at least one number is greater than 3
const result1 = numbers.some((number) => number > 3);
console.log(result1); // Output: true

// Check if all numbers are greater than 0
const result1 = numbers.every((number) => number > 0);
console.log(result1); // Output: true
```
