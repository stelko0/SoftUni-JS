function solve(input) {
  return input.sort((x, y) => x - y).slice(-Math.ceil(input.length / 2));
}

solve([4, 7, 2, 5]);