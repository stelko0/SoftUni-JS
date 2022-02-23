function solve(input) {
  return input
    .sort((x, y) => x - y)
    .slice(0, 2)
    .join(' ');
}

solve([30, 15, 50, 5]);