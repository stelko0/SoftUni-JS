function condense(numbers) {
  let condensed = [];
  while (numbers.length > 1) {
    for (let index = 0; index < numbers.length - 1; index++) {
      let current = numbers[index];
      let next = numbers[index + 1];
      condensed.push(current + next);
    }
    numbers = condensed;
    condensed = [];
  }
  console.log(numbers[0]);
}
