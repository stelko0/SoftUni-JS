function sum(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  let result = 0;
  for (let num of array) {
    if (num % 2 == 0) {
      result += num;
    }
  }
  console.log(result);
}

sum([1, 2, 3, 4, 5, 6]);
