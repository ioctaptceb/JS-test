var test = require('tape');
var Gmtry = require('../app/main')

test('Point class exists', function (t) {
    t.equal(typeof Gmtry.Point, 'function');
    t.end();
});

test('A point is instantiated', function (t) {
    var point = new Gmtry.Point(0, 0);
    t.equal(typeof point, 'object');
    t.end();
});

test('A point has an X coordinate', function (t) {
    var point = new Gmtry.Point(50, 0);
    t.equal(point.x, 50);
    t.end();
});

test('A point as a Y coordinate', function (t) {
  var point = new Gmtry.Point(0, 50);
  t.equal(point.y, 50);
  t.end();
});
