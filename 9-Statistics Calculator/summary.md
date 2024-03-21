1.  implicit return syntax

```javascript
const addImplicit = (a, b) => a + b;
```

2. The `.sort()` method mutates the array it's called on. It is generally bad practice to mutate a function parameter, which array is.

```javascript
const sorted = array.slice().sort((a, b) => a - b);
```

To fix this, add an empty `.slice()` call before your .sort() method. The empty .slice() call will make a shallow copy of the array, which you are free to mutate.

3. `reduce()` is for iterating over an array and reducing its elements to a single value.

```javascript
array.reduce(function (accumulator, currentValue, currentIndex, array) {
  // return result from executing something on accumulator and currentValue
}, initialValue);

array.reduce((acc, el) => acc + el, 0) / array.length;
```
