```js
const exampleArrowFunction = (param) => {
  return param;
};
```

1. arrow function

```js
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
```

2. The `map()` method is to iterate over an array and transform each element in the array according to a provided callback function. It <strong>returns</strong> a new array containing the results of applying the callback function to each element of the original array.

```js
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"
```

3. The `join()` method is used to concatenate all the elements of an array into a single string. (as opposed to `split()`)

```js
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
```

4. Optional chaining `?.` helps prevent errors when accessing nested properties that might be null or undefined.

```js
const fruits = [
  { name: "Apples", price: 0.99 },
  { name: "Blueberries", price: 1.49 },
  { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
  if (a.name < b.name) {
    return -1; // a before b
  }

  if (a.name > b.name) {
    return 1; // b before a
  }

  return 0; // nothing
});

userData?.songs.sort(() => Math.random() - 0.5); // [-0.5, 0.5)
```

5. The `sort()` function rearranges the elements based on the return values of this comparison function, resulting in a shuffled array.

```js
const animals = ["dog", "cat", "horse"];
animals.indexOf("cat"); // 1
```

6. The `indexOf()` array method returns the first index at which a given element can be found in the array, or -1 if the element is not present.

```js
`Play ${song.title}`;
```

7. Template literals `...` allow for easier string interpolation`${}` and multiline strings.

```js
const numArr = [1, 10, 8, 3, 4, 5];
const numsGreaterThanThree = numArr.filter((num) => num > 3);

console.log(numsGreaterThanThree); // Output: [10, 8, 4, 5]
```

8. The `filter()` method keeps only the elements of an array that satisfy the callback function passed to it

```js
// 暂存数据
let userData = {
  // 操作一个副本
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};
```

9. [...allSongs] employs the spread operator `...`, which copies all elements from the allSongs array into a new array, rather than referencing the allSongs array itself.

```js
const song = userData?.songs.find((song) => song.id === id);
```

10. The `find()` method is a built-in JavaScript function that is used to search for an element in an array that satisfies a specified condition.

```javascript
const playButton = document.getElementById("play");
playButton.classList.add("playing");
playButton.classList.remove("playing");
```

11. `classList.add()` method is called on playButton to add/remove the class "playing" to it.

```javascript
playlistSongElements.forEach((songEl) => {
  songEl.removeAttribute("aria-current");
});
```

12. `forEach()` is used when you want to perform an action on each element of an array without creating a new array
