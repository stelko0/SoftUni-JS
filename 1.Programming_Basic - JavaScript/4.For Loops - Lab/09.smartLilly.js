function Lilly(input) {
  let age = Number(input[0]);
  let priceWasher = Number(input[1]);
  let priceToy = Number(input[2]);

  let toy = 0;
  let money = 0;
  let giftMoney = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      giftMoney += 10;
      money = money + giftMoney;
      money--;
    } else {
      toy++;
    }
  }
  money += toy * priceToy;

  if (money >= priceWasher) {
    console.log(`Yes! ${(money - priceWasher).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWasher - money).toFixed(2)}`);
  }
}

Lilly(["10", "170", "6"]);
// Lilly(["21", "1570.98", "3"]);
