function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let partOfBudget = 0;
  let bg = "Bulgaria";
  let balkans = "Balkans";
  let eu = "Europe";
  let camp = "Camp";
  let hotel = "Hotel";

  //Bulgaria <= 100BGN
  if (budget <= 100) {
    if (season == "summer") {
      partOfBudget = budget * 0.3;
      console.log(`Somewhere in ${bg}`);
      console.log(`${camp} - ${partOfBudget.toFixed(2)}`);
    } else {
      partOfBudget = budget * 0.7;
      console.log(`Somewhere in ${bg}`);
      console.log(`${hotel} - ${partOfBudget.toFixed(2)}`);
    }
  }

  //Balkans 1000BGN or < 1000BGN
  if (budget >= 101 && budget <= 1000) {
    if (season == "summer") {
      partOfBudget = budget * 0.4;
      console.log(`Somewhere in ${balkans}`);
      console.log(`${camp} - ${partOfBudget.toFixed(2)}`);
    } else {
      partOfBudget = budget * 0.8;
      console.log(`Somewhere in ${balkans}`);
      console.log(`${hotel} - ${partOfBudget.toFixed(2)}`);
    }
  }

  //Europe > 1000BGN
  if (budget > 1000) {
    if (season == "summer" || season == "winter") {
      partOfBudget = budget * 0.9;
      console.log(`Somewhere in ${eu}`);
      console.log(`${hotel} - ${partOfBudget.toFixed(2)}`);
    } 
  }
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);