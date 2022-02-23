function solve(input) {
  let counts = 0;
  input.forEach((x) =>
    x.reduce((a, b) => {
      if (a === b) {
        counts += 1;
      }
      return b;
    })
  );

  for (let i = 0; i < input.length - 1; i++) {
    input[i].forEach((_, j) => {
      if (input[i][j] === input[i + 1][j]) {
        counts += 1;
      }
    });
  }
  return counts;
}

console.log(
  solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
  ])
);
