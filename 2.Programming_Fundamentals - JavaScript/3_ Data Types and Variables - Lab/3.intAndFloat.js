function floatOrInt(num1, num2, num3) {
  let result = num1 + num2 + num3;
  if (result % 1 == 0) {
    console.log(`${result} - Integer`);
  } else {
    console.log(`${result} - Float`);
  }
}

floatOrInt(100, 200, 303);
