function firstAndLast(array) {
  let count = array.shift();
  console.log(array.slice(0, count).join(' '));
  console.log(array.slice(array.length - count, array.length).join(' '));
}
firstAndLast([2, 7, 8, 9]);
