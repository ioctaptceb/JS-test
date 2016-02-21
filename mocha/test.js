var assert = require('assert');
var G = require('../app/main');

describe('Point Class', function () {
  it('should Exist', function () {
    assert.equal(typeof G.Point, 'function');
  });
});

describe('A point', function () {
  it('should be instantiated', function () {
    var point = new G.Point(0, 0);
    assert.equal(typeof point, 'object');
  });

  it('has an X coordinate', function () {
    var point = new G.Point(0,0);
    assert.equal(point.x, 0);
  });
});
