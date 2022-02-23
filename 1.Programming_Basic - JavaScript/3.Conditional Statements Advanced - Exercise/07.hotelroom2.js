function hotelRoom(input) {
  let month = input[0];
  let countNights = Number(input[1]);

  let priceA = 0;
  let priceS = 0;

  if (month == "May" || month == "October") {
    priceS = 50;
    priceA = 65;

    if (countNights > 14) {
      priceS *= 0.7;
      priceA *= 0.9;
    } else if (countNights > 7) {
      priceS *= 0.95;
    }
  } else if (month == "June" || month == "September") {
    priceS = 75.2;
    priceA = 68.7;

    if (countNights > 14) {
      priceS *= 0.8;
      priceA *= 0.9;
    }
  } else if (month == "July" || month == "August") {
    priceS = 76;
    priceA = 77;

    if (countNights > 14) {
      priceA *= 0.9;
    }
  }
  console.log(`Apartment: ${(priceA * countNights).toFixed(2)} lv.`);
  console.log(`Studio: ${(priceS * countNights).toFixed(2)} lv.`);
}
