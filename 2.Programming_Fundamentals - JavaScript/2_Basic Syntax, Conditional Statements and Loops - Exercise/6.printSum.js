function printAndSum(start, end) {
  let str = '';
  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    str += ' ' + i;
    totalSum += i;
  }
  console.log(str);
  console.log(`Sum: ${totalSum}`);
}

printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);
