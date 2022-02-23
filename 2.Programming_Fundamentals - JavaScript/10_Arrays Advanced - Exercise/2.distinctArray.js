function distinctArray(array) {
  let newArr = array.slice(0);
  let resultArray = [];
  repeatingNums(array);
  result(newArr);
  console.log(resultArray.join(' '));
  function repeatingNums(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] === newArr[j] && i < j) {
          newArr[j] = 'None';
        }
      }
    }
    return newArr;
  }
  function result(newArr) {
    for (let i of newArr) {
      if (i !== 'None') {
        resultArray.push(i);
      }
    }
    return resultArray;
  }
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
