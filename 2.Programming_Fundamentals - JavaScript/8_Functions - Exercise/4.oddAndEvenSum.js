function oddAndEvenSum(num) {
  let asNumber = String(num).split('');
  let evenSum = 0;
  let oddSum = 0;
  for (let i of asNumber) {
    i = Number(i);
    if (i % 2 == 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum('3495892137259234'));
