function solve(x, y, x1, y1) {
  const validDist = (x, y, x1, y1) =>
    Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0;
  const pairs = [
    [x, y, 0, 0],
    [x1, y1, 0, 0],
    [x, y, x1, y1],
  ];
  const print = (a, b, c, d, validity) =>
    `{${a}, ${b}} to {${c}, ${d}} is ${validity}`;
  pairs.forEach((x, i) =>
    console.log(
      validDist(...pairs[i]) ? print(...x, 'valid') : print(...x, 'invalid')
    )
  );
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
