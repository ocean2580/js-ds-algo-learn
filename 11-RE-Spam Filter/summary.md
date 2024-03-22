1. `match()` vs `test()`

```javascript
const str = "The quick brown fox jumps over the lazy dog";
const matches = str.match(/o/g);
console.log(matches); // Output: [ 'o', 'o', 'o' ]

const regex = /fox/;
const str = "The quick brown fox jumps over the lazy dog";
const result = regex.test(str);
console.log(result); // Output: true
```

2. nested function

```javascript
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
```
