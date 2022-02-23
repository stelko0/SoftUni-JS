function orders(product, count){
  let price = 0;
  switch(product){
    case "coffee":
      price = 1.50 * count;
      break;
    case "water":
      price = 1.00 * count;
      break;
    case "coke":
      price = 1.40 * count;
      break;
    case "snacks":
      price = 2.00 * count;
      break;
  }
  console.log(price.toFixed(2))
}

orders("water"
,5
)