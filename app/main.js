function Geometry() {
  Point.prototype.shift = function shiftPoint (x, y) {
    return new Point(this.x + x, this.y + y);
  }

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Line.prototype.intersectX = function intersectX (x) {
    var y = this.slope * x + this.offset;
    return new Point(x, y);
  }

  function Line(slope, offset) {
    this.slope = slope;
    this.offset = offset;
  }

  return {
    Point: Point,
    Line: Line
  };
}

module.exports = Geometry();
