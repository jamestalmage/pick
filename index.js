/* globals define: false, module: false */
(function(){
  var pickit = {
    min: make(min, Number.POSITIVE_INFINITY),
    max: make(max, Number.NEGATIVE_INFINITY)
  };

  function min(a, b){
    return a < b;
  }

  function max(a, b){
    return a > b;
  }

  function make(test, startValue) {
    return function(array, fn, defaultValue) {
      return array.reduce(reduceFn, {value:startValue, item:defaultValue, fn:stringToFn(fn)}).item;
    };

    function reduceFn(currentValue, item, index, array) {
      var value = currentValue.fn(item, index, array);
      if (test(value, currentValue.value)) {
        currentValue.item = item;
        currentValue.value = value;
      }
      return currentValue;
    }
  }

  function stringToFn(fn) {
    if ('string' === typeof fn) {
      return function(x) {
        return x[fn];
      };
    }
    return fn;
  }

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = pickit;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return pickit;
      });
    }
    else {
      window.pickit = pickit;
    }
  }
})();
