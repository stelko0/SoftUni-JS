function boat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let count = input[2];
  let price = 0;

  switch(season){
    case "Spring":
        price = 3000;
        if(count <= 6){
          price = price * 0.9;
        }else if(count >= 7 && count <= 11){
          price = price * 0.85;
        }else{
          price = price * 0.75;
        }
        if(count % 2 === 0){
          price = price * 0.95;
        }
      break;
    case "Summer":
    case "Autumn":
        price = 4200;
        if (count <= 6) {
          price = price * 0.9;
        } else if (count >= 7 && count <= 11) {
          price = price * 0.85;
        } else {
          price = price * 0.75;
        }
        if (count % 2 === 0 && season !== "Autumn")  {
          price = price * 0.95;
        }
      break;
    case "Winter":
        price = 2600;
        if (count <= 6) {
          price = price * 0.9;
        } else if (count >= 7 && count <= 11) {
          price = price * 0.85;
        } else {
          price = price * 0.75;
        }
        if (count % 2 === 0) {
          price = price * 0.95;
        }
      break;
  }
  if(budget >= price){
    let diff = budget - price;
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  }else{
    let diff = Math.abs(budget - price);
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

boat(["3000", "Summer", "11"]);
boat(["3600", "Autumn", "6"]);
boat(["2000", "Winter", "13"]);
