function min(numbers) {
  let smallestNumber = Number(numbers[1]);

  for (let i = 2; i < Number(numbers[0]) + 1; i++) {
    let currentNumber = Number(numbers[i]);
    if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber;
    }
  }
  console.log(smallestNumber);
}

min(["2", "100", "99"]);
// min([100, 10, 20, 30, 40]);
