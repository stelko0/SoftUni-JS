function solve(n) {
  let line = '';
  for (let i = 0; i < n; i++) {
    line += '* ';
  }
  for (let j = 0; j < n; j++) {
    console.log(line);
  }
}
// solve(1);
solve(5);
// solve(5);
