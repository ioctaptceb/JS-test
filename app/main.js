function Geometry() {
  Point.prototype.shift = function shiftPoint (x, y) {
    return new Point(this.x + x, this.y + y);
  }

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Line.prototype.intersectX = function intersectX (x) {
    var y;

    function multiplySlopes(term, index, terms) {
      var power = terms.length - (index + 1);
      return term * Math.pow(x, power);
    }

    function sumSlopes(sum, t) {
      return sum + t
    }

    y = this.terms.map(multiplySlopes).reduce(sumSlopes, 0);

    return new Point(x, y);
  }

  function Line() {
    this.terms = Array.prototype.slice.call(arguments);
    this.offset = arguments[arguments.length - 1];
  }

  return {
    Point: Point,
    Line: Line
  };
}

module.exports = Geometry();
