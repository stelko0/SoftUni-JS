function posOrNeg(array) {
  array = array.map(Number);
  let result = [];
  for (let element of array) {
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }

  result.forEach((el) => console.log(el));
}
console.log(posOrNeg([7, -2, 8, 9]));
