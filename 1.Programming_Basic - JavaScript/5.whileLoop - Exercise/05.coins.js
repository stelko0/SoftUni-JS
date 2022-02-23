function coins(input) {
  let cashLv = Number(input[0]);
  let cashCoins = Math.floor(cashLv * 100);
  let coinCounter = 0;

  while (cashCoins > 0) {
    if (cashCoins >= 200) {
      cashCoins -= 200;
      coinCounter++;
    } else if (cashCoins >= 100) {
      cashCoins -= 100;
      coinCounter++;
    } else if (cashCoins >= 50) {
      cashCoins -= 50;
      coinCounter++;
    } else if (cashCoins >= 20) {
      cashCoins -= 20;
      coinCounter++;
    } else if (cashCoins >= 10) {
      cashCoins -= 10;
      coinCounter++;
    } else if (cashCoins >= 5) {
      cashCoins -= 5;
      coinCounter++;
    } else if (cashCoins >= 2) {
      cashCoins -= 2;
      coinCounter++;
    } else if (cashCoins >= 1) {
      cashCoins -= 1;
      coinCounter++;
    }
  }
  console.log(coinCounter);
}

coins([1.23]);
