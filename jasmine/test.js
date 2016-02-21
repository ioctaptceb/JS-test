var G = require('../app/main');

describe('Point', function () {
  it('Exists', function () {
    expect(G.Point).toBeDefined();
  });
});

describe('A point', function () {
  it('is instantiated', function () {
    var point = new G.Point(0, 0);
    expect(point).toBeDefined();
  });

  it('has an X coordinate', function () {
    var point = new G.Point(0, 0);
    expect(point.x).toBe(0);
  });
});
