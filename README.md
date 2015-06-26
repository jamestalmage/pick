# pickit

[![Build Status](https://travis-ci.org/jamestalmage/pickit.svg?branch=master)](https://travis-ci.org/jamestalmage/pickit)
[![Code Climate](https://codeclimate.com/github/jamestalmage/pickit/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/pickit)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/pickit/badge.svg?branch=master)](https://coveralls.io/r/jamestalmage/pickit?branch=master)
[![Dependency Status](https://david-dm.org/jamestalmage/pickit.svg)](https://david-dm.org/jamestalmage/pickit)
[![devDependency Status](https://david-dm.org/jamestalmage/pickit/dev-status.svg)](https://david-dm.org/jamestalmage/pickit#info=devDependencies)

```javascript
var pick = require('pickit');

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

`pickit` requires that `Array.prototype.reduce` be implemented (`IE 9` or greater).
A copy of the standard polyfill is included for your convenience (`reduce-polyfill.js`).