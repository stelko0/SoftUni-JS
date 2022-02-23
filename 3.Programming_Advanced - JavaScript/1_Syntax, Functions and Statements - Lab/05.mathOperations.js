function solve(num1, num2, oper) {
  let result = 0;
  if (oper == '+') {
    result = num1 + num2;
  } else if (oper == '-') {
    result = num1 - num2;
  } else if (oper == '*') {
    result = num1 * num2;
  } else if (oper == '/') {
    result = num1 / num2;
  } else if (oper == '%') {
    result = num1 % num2;
  } else if (oper == '**') {
    result = num1 ** num2;
  }
  console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');

// : '+', '-', '*', '/', '%', '**'.
