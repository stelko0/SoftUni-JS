function fishTank(input) {
  let lenght = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let rate = Number(input[3]);

  let size = lenght * width * height;
  let totalLitres = size * 0.001;
  let percentage = rate * 0.01;

  let litres = totalLitres * (1 - percentage);
  console.log(litres);
}

fishTank(["85", "75", "47", "17"]);
