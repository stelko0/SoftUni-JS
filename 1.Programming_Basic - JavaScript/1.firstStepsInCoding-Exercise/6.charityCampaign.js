function charity(input) {
  let days = Number(input[0]);
  let cooks = Number(input[1]);
  let cakes = Number(input[2]);
  let waffles = Number(input[3]);
  let pancakes = Number(input[4]);

  // Prices
  let cakePrice = 45;
  let wafflesPrice = 5.80;
  let pancakesPrice = 3.20;

  let countCakes = cakes * cakePrice;
  let countWaffles = waffles * wafflesPrice;
  let countPancakes = pancakes * pancakesPrice;
  let total = (countCakes + countWaffles + countPancakes) * cooks;
  let collectAll = total * days;
  
  let costRecovery = collectAll - (collectAll / 8);
  console.log(costRecovery);
}

charity(["131", "5", "9", "33", "46"]);

