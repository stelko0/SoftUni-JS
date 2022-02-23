function nxnMatrix(number) {
  let num = Number(number);
  let line = '';
  for (let j = 1; j <= num; j++) {
    line += num + ' ';
  }
  for (let i = 1; i <= num; i++) {
    console.log(line);
  }
}
nxnMatrix(7);
