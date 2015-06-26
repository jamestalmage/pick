# pick

[![Build Status](https://travis-ci.org/jamestalmage/pick.svg?branch=master)](https://travis-ci.org/jamestalmage/pick)
[![Code Climate](https://codeclimate.com/github/jamestalmage/pick/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/pick)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/pick/badge.svg)](https://coveralls.io/r/jamestalmage/pick)
[![Dependency Status](https://david-dm.org/jamestalmage/pick.svg)](https://david-dm.org/jamestalmage/pick)
[![devDependency Status](https://david-dm.org/jamestalmage/pick/dev-status.svg)](https://david-dm.org/jamestalmage/pick#info=devDependencies)

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