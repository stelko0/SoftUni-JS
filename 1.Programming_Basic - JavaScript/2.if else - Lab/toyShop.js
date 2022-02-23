function toyShop(input) {
  let priceTravel = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzlePrice = 2.60;
  let dollPrice = 3;
  let bearPrice = 4.10;
  let minionPrice = 8.20;
  let truckPrice = 2;

  let totalToys = puzzles + dolls + bears + minions + trucks;
  let totalSum = puzzles * puzzlePrice + dolls * dollPrice + bears * bearPrice + minions * minionPrice + trucks * truckPrice;
  if(totalToys >= 50){
    totalSum = totalSum - (totalSum * 0.25);
  }
  totalSum = totalSum - (totalSum * 0.10);

  if(totalSum >= priceTravel){
    console.log(`Yes! ${(totalSum - priceTravel).toFixed(2)} lv left.`)
  }else{
    console.log(`Not enough money! ${(priceTravel - totalSum).toFixed(2)} lv needed.`)
  }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);