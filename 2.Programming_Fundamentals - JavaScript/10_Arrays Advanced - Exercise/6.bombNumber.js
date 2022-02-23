function numbers(arr, numbers) {
  let bombNumbers = numbers[0];
  let power = numbers[1];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === bombNumbers) {
      let firstIndex = i - power;
      if (firstIndex < 0) {
        firstIndex = 0;
      }
      arr.splice(firstIndex, power * 2 + 1);
      i = -1;
    }
  }
  for (let j of arr) {
    result += j;
  }
  console.log(result);
}

numbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
