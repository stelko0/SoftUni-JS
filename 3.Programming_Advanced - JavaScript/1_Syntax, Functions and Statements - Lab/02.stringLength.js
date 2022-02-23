function solve(par1, par2, par3) {
  let par1Length = par1.length;
  let par2Length = par2.length;
  let par3Length = par3.length;

  let total = par1Length + par2Length + par3Length;
  let avg = Math.floor(total / 3);

  console.log(total);
  console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
