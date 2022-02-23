function bus(input) {
  let passagers = Number(input[0]);
  let countStops = Number(input[1]);
  let index = 1;

  for (let i = 2; i <= countStops * 2; i++) {
    if (index % 2 == 1) {
      passagers += 2;
    }
    if (index % 2 == 0) {
      passagers -= 2;
    }
    index++;
    passagers -= Number(input[i]);
    i++;
    passagers += Number(input[i]);
  }
  console.log(`The final number of passangers is : ${passagers}`);
}

bus([20, 2, 10, 5, 5, 3]);
bus([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8]);
bus([17, 3, 6, 7, 8, 9, 3, 4]);
