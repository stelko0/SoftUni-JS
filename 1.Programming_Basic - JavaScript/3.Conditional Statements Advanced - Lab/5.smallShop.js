function shop(input){
  let product = input[0];
  let city = input[1];
  let count = input[2];
  let totalPrice = 0;

  switch (product){
    case "coffee":
      switch (city) {
        case "Sofia":
          totalPrice = count * 0.5;
          break;
        case "Plovdiv":
          totalPrice = count * 0.4;
          break;
        case "Varna":
          totalPrice = 0.45 * count;
          break;
      }
      break;

    case "water":
      switch (city) {
        case "Sofia":
          totalPrice = count * 0.8;
          break;
        case "Plovdiv":
          totalPrice = count * 0.7;
          break;
        case "Varna":
          totalPrice = count * 0.7;
      }
      break;

    case "beer":
      switch (city) {
        case "Sofia":
          totalPrice = count * 1.2;
          break;
        case "Plovdiv":
          totalPrice = count * 1.15;
          break;
        case "Varna":
          totalPrice = count * 1.1;
          break;
      }
      break;

    case "sweets":
      switch (city) {
        case "Sofia":
          totalPrice = count * 1.45;
          break;
        case "Plovdiv":
          totalPrice = count * 1.3;
          break;
        case "Varna":
          totalPrice = count * 1.35;
          break;
      }
      break;

    case "peanuts":
      switch (city) {
        case "Sofia":
          totalPrice = count * 1.6;
          break;
        case "Plovdiv":
          totalPrice = count * 1.5;
          break;
        case "Varna":
          totalPrice = count * 1.55;
          break;
      }
      break;

  }
  console.log(totalPrice);
  
}

shop(["coffee", "Varna", "2"]);
shop(["peanuts", "Plovdiv", "1"]);
shop(["beer", "Sofia", "6"]);
shop(["water", "Plovdiv", "3"]);
shop(["sweets", "Sofia", "2.23"]);
