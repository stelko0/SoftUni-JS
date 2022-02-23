function storage(input) {
  let map = new Map();
  for (let string of input) {
    let token = string.split(' ');
    let product = token[0];
    let count = Number(token[1]);
    if (!map.has(product)) {
      map.set(product, +count);
    } else {
      let currCount = map.get(product);
      let newCount = (currCount += count);
      map.set(product, newCount);
    }
  }
  for (let kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
