function solve(width, height, c) {
  return {
    width,
    height,
    color: c[0].toUpperCase() + c.slice(1),
    calcArea: function () {
      return this.width * this.height;
    },
  };
}
