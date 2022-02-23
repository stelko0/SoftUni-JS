class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }
}

const c = new Circle(4);
console.log(c.getDiameter());

c.setDiameter(5);
