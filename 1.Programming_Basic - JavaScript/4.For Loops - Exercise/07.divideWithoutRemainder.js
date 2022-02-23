function divide(input) {
  let number = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= number; i++) {
    let num = Number(input[i]);
    if (num % 2 === 0) {
      p1++;
    }
    if (num % 3 === 0) {
      p2++;
    }
    if (num % 4 === 0) {
      p3++;
    }
  }

  let p1Result = 0;
  let p2Result = 0;
  let p3Result = 0;

  p1Result = (p1 / number) * 100;
  p2Result = (p2 / number) * 100;
  p3Result = (p3 / number) * 100;

  console.log(p1Result.toFixed(2) + "%");
  console.log(p2Result.toFixed(2) + "%");
  console.log(p3Result.toFixed(2) + "%");
}

divide([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
