function beerAndChips(input) {
  let name = input[0];
  let budget = Number(input[1]);
  let countBeer = Number(input[2]);
  let countChips = Number(input[3]);
  // PriceBeer = 1.20   // PriceChips = 45% from total BeerPrice
  let totalBeerPrice = countBeer * 1.2;
  let ChipsPrice = totalBeerPrice * 0.45;
  let totalChipsPrice = Math.ceil(ChipsPrice * countChips);
  let total = totalBeerPrice + totalChipsPrice;

  if (total <= budget) {
    console.log(
      `${name} bought a snack and has ${(budget - total).toFixed(2)} leva left.`
    );
  } else {
    console.log(`${name} needs ${(total - budget).toFixed(2)} more leva!`);
  }
}
beerAndChips(["George", "10", "2", "3"]);
beerAndChips(["Valetin", 5, 2, 4]);
