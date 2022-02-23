function solve(information, criteria) {
  let [prefix, value] = criteria.split('-');

  let counter = 0;

  JSON.parse(information).forEach((human) => selectByCriteria.call(human));

  function selectByCriteria() {
    if (this[prefix] === value || criteria === 'all') {
      return console.log(
        `${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`
      );
    }
  }
}
