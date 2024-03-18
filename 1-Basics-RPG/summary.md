```js
let xp = 0;
```

普通变量

```javascript
const button1 = document.querySelector("#button1");
```

对象变量

```javascript
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  ...
]

// 类型
const locations: {
    name: string;
    "button text": string[];
    "button functions": (() => void)[];
    text: string;
}[]
```

对象数组 []或.引用；<br/>
对象里用键值对表示，值可以是函数。

```css
#monsterStats {
  display: none;
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
}
```

```js
const monsterStats = document.querySelector("#monsterStats");
monsterStats.style.display = "block";
```

修改是否显示

```js
button1.innerText = location["button text"][0];
```

修改对象文字
