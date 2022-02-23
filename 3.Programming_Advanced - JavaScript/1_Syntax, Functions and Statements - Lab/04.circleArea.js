function solve(number) {
  let type = typeof number;
  if (type === 'number') {
    let result = Math.pow(number, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}

solve(5);
solve('name');
