function gift(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let s = Number(input[2]);
  let str = " ";

  for (let i = m; i >= n; i--) {
    if (i % 3 == 0 && i % 2 == 0) {
      if (i === s) {
        break;
      }
      str += ` ${i}`;
    }
  }
  console.log(str);
}
// gift([1, 30, 15]);
// gift([1, 36, 12]);
gift([20,
1000,
36,
])
