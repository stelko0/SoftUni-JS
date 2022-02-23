function foo(name, population, t) {
  class City {
    constructor(name, population, t) {
      this.name = name;
      this.population = population;
      this.treasury = t;
      this.taxRate = 10;
    }

    collectTaxes = () =>
      Math.round((this.treasury += this.population * this.taxRate));
    applyGrowth = (percentage) =>
      Math.round((this.population += (this.population * percentage) / 100));
    applyRecession = (percentage) =>
      Math.round((this.treasury -= (this.treasury * percentage) / 100));
  }

  return new City(name, population, treasury);
}
