if ('function' === typeof require) {
  var chai = require('chai');

  var pick = require('..');
}

describe('pick', function() {

  var expect = chai.expect;

  var array;

  beforeEach(function(){
    array = [
      {name: 'James', age: 36, siblings: 3},
      {name: 'Susan', age: 40, siblings: 2},
      {name: 'Noah', age: 4, siblings: 1}
    ];
  });

  describe('min - finds the minimum ', function () {
    it('using a callback function', function() {
      expect(pick.min(array, function(x){return x.age;}).name).to.equal('Noah');
    });

    it('using a string property name', function() {
      expect(pick.min(array, 'siblings').name).to.equal('Noah');
    });
  });

  describe('max - finds the maximum ', function () {
    it('using a callback function', function() {
      expect(pick.max(array, function(x){return x.age;}).name).to.equal('Susan');
    });

    it('using a string property name', function() {
      expect(pick.max(array, 'siblings').name).to.equal('James');
    });
  });
});