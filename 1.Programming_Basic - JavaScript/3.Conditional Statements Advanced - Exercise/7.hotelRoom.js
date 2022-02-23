function hotel(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let priceS = 0;
  let priceA = 0;

  if (month == "May" || month == "October") {
    priceS = 50;
    priceA = 65;
    if (nights > 7 && nights <= 14) {
      priceS = priceS - priceS * 0.05;
      priceA = priceA;
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    } else if (nights > 14) {
      priceS = priceS - priceS * 0.3;
      priceA = priceA - priceA * 0.1;
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    }
  } else if (month == "June" || month == "September") {
    priceS = 75.2;
    priceA = 68.7;
    if (nights > 14) {
      priceS = priceS - priceS * 0.2;
      priceA = priceA - priceA * 0.1;
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    } else {
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    }
  } else if (month == "July" || month == "August") {
    priceS = 76;
    priceA = 77;
    if (nights > 14) {
      priceS = priceS;
      priceA = priceA - priceA * 0.1;
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    } else {
      console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
    }
  }
}

hotel(["May", "15"]);
hotel(["June", "14"]);

