(function(){
  var pick = {
    min: min,
    max: max
  };

  function min(array, fn, defaultValue){
    return array.reduce(minReduce, {min:Number.POSITIVE_INFINITY, item:defaultValue, fn:stringToFn(fn)}).item;
  }

  function max(array, fn, defaultValue){
    return array.reduce(maxReduce, {max:Number.NEGATIVE_INFINITY, item:defaultValue, fn:stringToFn(fn)}).item;
  }

  function minReduce(currentValue, item, index, array){
    var value = currentValue.fn(item, index, array);
    if (value < currentValue.min) {
      currentValue.item = item;
      currentValue.min = value;
    }
    return currentValue;
  }

  function maxReduce(currentValue, item, index, array){
    var value = currentValue.fn(item, index, array);
    if (value > currentValue.max) {
      currentValue.item = item;
      currentValue.max = value;
    }
    return currentValue;
  }

  function stringToFn(fn) {
    if ('string' === typeof fn) {
      return function(x) {
        return x[fn];
      }
    }
    return fn;
  }


  /* istanbul ignore next */
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = pick;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return pick;
      });
    }
    else {
      window.pick = pick;
    }
  }
})();
