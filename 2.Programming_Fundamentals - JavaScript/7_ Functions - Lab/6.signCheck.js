function check(num1, num2, num3) {
  let total = num1 * num2 * num3; //Try to do this WITHOUT multiplying the 3 numbers.
  return  total < 0 ? "Negative" : "Positive"
}

console.log(check(5, 12, -15));
