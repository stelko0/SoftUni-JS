function solve(a, b, c, d) {
  return d.bind(undefined, a, b, c);
}

let dollarFormatter = solve(',', '$', true, solve);
console.log(solve(5345)); // $ 5345,00
console.log(solve(3.1429)); // $ 3,14
console.log(solve(2.709)); // $ 2,71
