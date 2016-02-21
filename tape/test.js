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
});
