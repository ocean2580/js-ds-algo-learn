1. `.toFixed()` is used to format a number using fixed-point notation.

```javascript
 calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }
```
