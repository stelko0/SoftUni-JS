function solve(input) {
  const calcDiagonal = (input) => input.reduce((a, b, i) => a + b[i], 0);

  return `${calcDiagonal(input)} ${calcDiagonal(input.reverse())}`;
}

solve([
  [20, 40],
  [10, 60],
]);
