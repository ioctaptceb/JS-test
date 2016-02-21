function Geometry() {
  function Point(x) {
    this.x = x;
  }

  return {
    Point: Point
  }
}

module.exports = Geometry();
