var Gmtry = require('../app/main');

describe('Point', function () {
  it('Exists', function () {
    expect(Gmtry.Point).toBeDefined();
  });

  it('has a shift method', function () {
    expect(Gmtry.Point.prototype.shift).toBeDefined();
  });
});

describe('A point', function () {
  it('is instantiated', function () {
    var point = new Gmtry.Point(0, 0);
    expect(point).toBeDefined();
  });

  it('has an X coordinate', function () {
    var point = new Gmtry.Point(50, 0);
    expect(point.x).toBe(50);
  });

  it('has a Y coordinate', function () {
    var point = new Gmtry.Point(0, 50);
    expect(point.y).toBe(50);
  });

  it('can be shifted on the X axis', function () {
    var point = new Gmtry.Point(0, 50);
    var shiftedPoint = point.shift(50, 0);
    expect(shiftedPoint.x).toBe(50);
  });

  it('can be shifted on the Y axis', function () {
    var point = new Gmtry.Point(50, 150);
    var shiftedPoint = point.shift(0, -50);
    expect(shiftedPoint.y).toBe(100);
  });
});

describe('Line', function () {
  it('exists', function () {
    expect(Gmtry.Line).toBeDefined();
  });
});

describe('A line', function () {
  it('has a slope', function () {
    var line = new Gmtry.Line(0, 0);
    expect(line.slope).toBe(0);
  });
});
