function solve(cakes, a, b) {
  return cakes.slice(cakes.indexOf(a), cakes.indexOf(b) + 1);
}

console.log(
  solve(
    [
      'Pumpkin Pie',
      'Key Lime Pie',
      'Cherry Pie',
      'Lemon Meringue Pie',
      'Sugar Cream Pie',
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
  )
);
