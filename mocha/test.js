var assert = require('assert');
var Gmtry = require('../app/main');

describe('Point Class', function () {
  it('should Exist', function () {
    assert.equal(typeof Gmtry.Point, 'function');
  });

  it('should have a shift method', function () {
    assert.equal(typeof Gmtry.Point.prototype.shift, 'function');
  });
});

describe('A point', function () {
  it('should be instantiated', function () {
    var point = new Gmtry.Point(0, 0);
    assert.equal(typeof point, 'object');
  });

  it('has an X coordinate', function () {
    var point = new Gmtry.Point(50,0);
    assert.equal(point.x, 50);
  });

  it('has a Y coordinate', function () {
    var point = new Gmtry.Point(0, 50);
    assert.equal(point.y, 50);
  });

});
