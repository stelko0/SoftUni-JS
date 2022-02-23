function solve(fruit, weight, price) {
  const convert = weight / 1000;
  console.log(
    `I need $${(convert * price).toFixed(2)} to buy ${convert.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve('orange', 2500, 1.8);
