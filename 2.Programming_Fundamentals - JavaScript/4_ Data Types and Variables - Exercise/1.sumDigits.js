function sumDigits(num) {
  numAsString = num.toString();
  let sum = 0;
  for (let digits of numAsString) {
    sum += Number(digits);
  }
  console.log(sum);
}
sumDigits(543);
