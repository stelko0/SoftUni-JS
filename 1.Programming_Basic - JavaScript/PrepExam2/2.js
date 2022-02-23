function addBags(input) {
  let priceKgOver20 = Number(input[0]);
  let kgBag = Number(input[1]);
  let daysToTrip = Number(input[2]);
  let countDay = Number(input[3]);

  if (kgBag <= 10) {
    priceKgOver20 = priceKgOver20 * 0.2;
  } else if (kgBag >= 10 && kgBag <= 20) {
    priceKgOver20 = priceKgOver20 * 0.5;
  } else if (kgBag > 20) {
    priceKgOver20 = priceKgOver20;
  }

  if (daysToTrip > 30) {
    priceKgOver20 = priceKgOver20 * 1;
  } else if (daysToTrip > 7 && daysToTrip <= 30) {
    priceKgOver20 = priceKgOver20 * 1.15;
  } else if (daysToTrip < 7) {
    priceKgOver20 = priceKgOver20 * 1.4;
  }

  console.log(
    `The total price of bags is: ${(priceKgOver20 * countDay).toFixed(2)} lv.`
  );
}
addBags([25.5, 5, 36, 6]);
