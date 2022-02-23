function candyShop(input) {
  let sweets = input[0];
  let countOrders = Number(input[1]);
  let day = Number(input[2]);

  let price = 0;
  let total = 0;
  let promotion = 0;

  switch (sweets) {
    case "Cake":
      if (day <= 15) {
        price = countOrders * 24;
      } else if (day >= 24) {
        price = countOrders * 28.7;
      }
      break;
    case "Souffle":
      if (day <= 15) {
        price = countOrders * 6.66;
      } else if (day >= 24) {
        price = countOrders * 9.8;
      }
      break;
    case "Baklava":
      if (day <= 15) {
        price = countOrders * 12.6;
      } else if (day >= 24) {
        price = countOrders * 16.98;
      }
      break;
  }
  if (price >= 100 && price <= 200) {
    promotion = price * 0.15;
  } else if (price > 200) {
    promotion = price * 0.25;
  }

  let money = price - promotion;
  if (day <= 15) {
   price = money - money * 0.1;
  }
  console.log(price.toFixed(2));
}

candyShop(["Cake", 10, 15]);
candyShop(["Souffle",
20,
24
])
