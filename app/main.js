function Geometry() {
  Point.prototype.shift = function shiftPoint (x, y) {
    return new Point(this.x + x, this.y + y);
  }

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  function Line() {
  }

  return {
    Point: Point,
    Line: Line
  };
}

module.exports = Geometry();
