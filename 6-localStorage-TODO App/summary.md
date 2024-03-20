1. `LocalStorage` is a web storage feature of JavaScript that lets you persist data by storing the data as a `key:value` pair. to be in string format.`JSON.stringify()` is to make object into string, while `JSON.parse()` is to make string object.

```javascript
const taskData = JSON.parse(localStorage.getItem("data")) || [];

localStorage.setItem("data", JSON.stringify(taskData));
```

2. The `toggle()` method will add the class if it is not present on the element, and remove the class if it is present on the element.

```javascript
taskForm.classList.toggle("hidden");
```

3. `unshift()` is an array method that is used to add one or more elements to the <strong>beginning</strong> of an array.

```javascript
taskData.unshift(taskObj);
```

4. `this` is a keyword that refers to the current context. In this case, this points to the element that triggers the event – the buttons.

```html
<button type="button" class="btn" onclick="editTask(this)">Edit</button>
```

5. `findIndex()` is to find the index of the first element in an array that satisfies a provided testing function. If no element satisfies the testing function, -1 is returned.

```javascript
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
};
```

6. `splice()` is an array method that <strong>modifies</strong> arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements.

```javascript
taskData.splice(dataArrIndex, 1);
```
