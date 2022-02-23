function sortStrings(array) {
  array.sort();
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        let asString = array.splice(j, 1);
        let temp = array.splice(i);
        array.push(asString);
        for (let k of temp) {
          array.push(k);
        }
      }
    }
  }
  console.log(array.join('\n'));
}

sortStrings(['alpha', 'beta', 'gamma']);
