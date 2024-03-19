# 1. Palindrome Checker

You'll need to remove all `non-alphanumeric` characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

```js
const isPalindrome = (text) => {
  const newText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const newTextReverse = text
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (newText === newTextReverse) return true;
  else return false;
};
```
