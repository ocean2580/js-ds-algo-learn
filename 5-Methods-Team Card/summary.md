1. object destructuring syntax

```javascript
const developerObj = {
  name: "Jessica Wilkins",
  isDeveloper: true,
};

// Object destructuring
const { name, isDeveloper } = developerObj;
```

2. arg `e` in an arrow function

```javascript
playersDropdownList.addEventListener("change", (e) => {});
```

e represents an object which contains the information for that event.

3. freeze()

```javascript
// 防止修改内容
Object.freeze(myFavoriteFootballTeam);
```

4. Destructure

```javascript
const { sport, team, year, players } = myFavoriteFootballTeam;
```

To extract values from objects (or arrays) and assign them to variables in a convenient way.
