function magicSum(array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == number && i < j) {
        console.log(array[i] + ' ' + array[j]);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
