var test = require('tape');
var G = require('../app/main')

test('Point class exists', function (t) {
    t.equal(typeof G.Point, 'function');
    t.end();
});

test('A point is instantiated', function (t) {
    var point = new G.Point(0, 0);
    t.equal(typeof point, 'object');
    t.end();
});

test('A point has an X coordinate', function (t) {
    var point = new G.Point(0, 0);
    t.equal(point.x, 0);
    t.end();
});
