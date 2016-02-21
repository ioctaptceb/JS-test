function Geometry() {
  Point.prototype.shift = function shiftPoint (x, y) {
    return new Point(this.x + x, this.y + y);
  }

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  return {
    Point: Point
  }
}

module.exports = Geometry();
