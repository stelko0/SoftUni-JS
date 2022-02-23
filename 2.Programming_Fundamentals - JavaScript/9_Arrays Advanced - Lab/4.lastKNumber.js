function lastNumber(n, k) {
  [n, k] = [n, k].map(Number);

  let resutl = [1];

  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let currnet = resutl.slice(start, start + k).reduce((a, b) => a + b, 0);
    resutl.push(currnet);
  }
  console.log(resutl.join(' '));
}
console.log(lastNumber(6, 3));
