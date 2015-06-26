# pick
Pick a single item from an array.

### usage

```javascript
var pick = require('pick');

var array = [
  {name: 'James', age: 36, siblings: 3},
  {name: 'Susan', age: 40, siblings: 2},
  {name: 'Noah', age: 4, siblings: 1}
];

// supply a callback
pick.max(array, function (x) {return x.age;}); // {name: 'Susan', ...}

// or a string property name
pick.max(array, 'siblings');                   // {name: 'James', ...}
pick.min(array, 'siblings')/                   // {name: 'Noah', ...}
```

### polyfill

`pick` requires that `Array.prototype.reduce` be implemented (`IE 9` or greater).
A copy of the standard polyfill is included at `node_modules/pick/reduce-polyfill.js`.