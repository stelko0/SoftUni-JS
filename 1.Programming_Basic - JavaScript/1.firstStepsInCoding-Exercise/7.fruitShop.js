function fruitShop(input) {
  // Prices
  let berries = Number(input[0]);
  let raspberries = berries / 2;
  let bananas = raspberries - raspberries * 0.8;
  let oranges = raspberries - raspberries * 0.4;

  // Amounts 
  let amountBanans = Number(input[1]);
  let amountOranges = Number(input[2]);
  let amountRaspberries = Number(input[3]);
  let amountBerries = Number(input[4]);
  
  // AmountByKg
  let totalBananas = amountBanans * bananas;
  let totalOranges = amountOranges * oranges;
  let totalBerries = amountBerries * berries;
  let totalRaspberries = amountRaspberries * raspberries;
  
  // Total Price
  let totalPrice = totalBananas + totalBerries + totalOranges + totalRaspberries;
  console.log(totalPrice);
}

// fruitShop(["48","10","3.3","6.5","1.7"]);
// fruitShop(["63.5","3.57","6.35","8.15","2.5"]);

