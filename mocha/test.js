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

  it('can be shifted on the X axis', function () {
    var point = new Gmtry.Point(0, 50);
    var shiftedPoint = point.shift(50, 0);
    assert.equal(shiftedPoint.x, 50);
  });

  it('can be shifted on the Y axis', function () {
    var point = new Gmtry.Point(50, 150);
    var shiftedPoint = point.shift(0, -50);
    assert.equal(shiftedPoint.y, 100);
  });
});

describe('Line', function () {
  it('should be a function', function () {
    assert.equal(typeof Gmtry.Line, 'function');
  });
});

describe('A line', function () {
  it('should have a slope', function () {
    var line = new Gmtry.Line(0, 0);
    assert.equal(line.slope, 0);
  });

  it('should have an offset', function () {
    var line = new Gmtry.Line(0, 2);
    assert.equal(line.offset, 2);
  });

  it('has a method to intersect the line at x', function () {
    var line = new Gmtry.Line(1, 3);
    var intersectPoint = line.intersectX(5);
    assert.equal(intersectPoint.x, 5);
    assert.equal(intersectPoint.y, 8);
  });
});
