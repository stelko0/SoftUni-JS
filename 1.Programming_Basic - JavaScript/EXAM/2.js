function spaceship(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let avgHeightAstro = Number(input[3]);

  let totalSize = width * length * height;
  let sizeRoom = (avgHeightAstro + 0.4) * 2 * 2;
  let totalAstro = Math.floor(totalSize / sizeRoom);

  if (totalAstro >= 3 && totalAstro <= 10) {
    console.log(`The spacecraft holds ${totalAstro} astronauts.`);
  } else if (totalAstro < 3) {
    console.log(`The spacecraft is too small.`);
  } else if (totalAstro > 10) {
    console.log(`The spacecraft is too big.`);
  }
}

spaceship([3.5, 4, 5, 1.7]);
spaceship([4.5, 4.8, 5, 1.75]);
spaceship([3,
3,
4,
1.68
])
