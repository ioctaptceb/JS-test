function Geometry() {

  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  return {
    Point: Point
  }
}

module.exports = Geometry();
