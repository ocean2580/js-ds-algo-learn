1. `fetch()`

```javascript
fetch("url") // api for the get request
  .then((response) => response.json())
  .then((data) => console.log(data));
  .catch(error => {
    console.error('Fetch error:', error);
  });
```
