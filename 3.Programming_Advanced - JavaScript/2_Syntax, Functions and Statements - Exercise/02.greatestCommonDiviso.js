function solve(...numbers) {
  let result = 1;
  for (let i = 2; i < 9; i++) {
    result = numbers.every((x) => x % i === 0) ? i : result;
  }

  console.log(result);
}

solve(15, 5);
