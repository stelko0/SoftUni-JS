class Person {
  constructor(firstName, lastName, age, email) {
    Object.assign(this, {
      firstName,
      lastName,
      age,
      email
    });
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, emal: ${this.email})`
  }
}

// const guy = new Person('John', 'Smith', 32, 'john@smith.com');
let guy = new Person('Peter', 'Marinov', 18, 'pesho18@abv.bg');

console.log(guy.toString());
