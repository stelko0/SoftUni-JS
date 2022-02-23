function solve(array, command) {
  array.sort(sorting);
  function sorting(a, b) {
    if (command == 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  }
  return array;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

// if (command == 'asc') {
//   array.sort(smallest);
// } else if (command == 'desc') {
//   array.sort(largest);
// }
// return array;
// function smallest(a, b) {
//   return a - b;
// }
// function largest(a, b) {
//   return b - a;
// }