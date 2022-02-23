function dogFood(input) {
  let foodWeight = Number(input[0]);
  let foodKg = foodWeight * 1000;

  let command = 0;
  let eatFood = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] == "Adopted") {
      break;
    }
    eatFood += input[i];
  }
  if (foodKg >= eatFood) {
    console.log(`Food is enough! Leftovers: ${foodKg - eatFood} grams.`);
  } else {
    console.log(`Food is not enough. You need ${eatFood - foodKg} grams more.`);
  }
}

dogFood([4, 130, 345, 400, 180, 230, 120, "Adopted"]);
dogFood([3, 1000, 1000, 1000, "Adopted"]);
dogFood([2, 999, 456, 999, 999, 123, 456, "Adopted"]);
