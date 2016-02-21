var test = require('tape');
var Gmtry = require('../app/main')

test('Point', function (suite) {
  suite.test('Point exists', function (t) {
    t.equal(typeof Gmtry.Point, 'function');
    t.end();
  });

  suite.test('Point prototype has a shift method', function (t) {
    t.equal(typeof Gmtry.Point.prototype.shift, 'function');
    t.end();
  });

  suite.end();
});

test('A point', function(suite) {
  suite.test('A point is instantiated', function (t) {
    var point = new Gmtry.Point(0, 0);
    t.equal(typeof point, 'object');
    t.end();
  });

  suite.test('A point has an X coordinate', function (t) {
      var point = new Gmtry.Point(50, 0);
      t.equal(point.x, 50);
      t.end();
  });

  suite.test('A point as a Y coordinate', function (t) {
    var point = new Gmtry.Point(0, 50);
    t.equal(point.y, 50);
    t.end();
  });

  suite.test('A point can be shifted on the x axis', function (t) {
    var point = new Gmtry.Point(0, 50);
    var shiftedPoint = point.shift(50, 0);
    t.equal(shiftedPoint.x, 50);
    t.end();
  });

  suite.test('A point can be shifted on the y axis', function (t) {
    var point = new Gmtry.Point(50, 150);
    var shiftedPoint = point.shift(0, -50);
    t.equal(shiftedPoint.y, 100);
    t.end();
  });

  suite.end();
});

test('Line', function (suite) {
  suite.test('exists', function (t) {
    t.equal(typeof Gmtry.Line, 'function');
    t.end();
  });

  suite.end();
});

test('A line', function (suite) {
  suite.test('has a slope', function (t) {
    var line = new Gmtry.Line(0, 0);
    t.equal(line.terms[0], 0);
    t.end();
  });

  suite.test('has an offset', function (t) {
    var line = new Gmtry.Line(0, 2);
    t.equal(line.offset, 2);
    t.end()
  });

  suite.test('has a method to intersect at x', function (t) {
    var line = new Gmtry.Line(1, 3);
    var intersectPoint = line.intersectX(5);
    t.equal(intersectPoint.x, 5);
    t.equal(intersectPoint.y, 8);
    t.end()
  });

  suite.test('has multiple slopes', function (t) {
    var line = new Gmtry.Line(2, 4, 5, 9);
    var intersectPoint = line.intersectX(5);
    t.equal(intersectPoint.x, 5);
    t.equal(intersectPoint.y, 384);
    t.end();
  });

  suite.end();
});
