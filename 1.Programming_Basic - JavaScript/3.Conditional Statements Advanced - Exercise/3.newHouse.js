function newHouse(input){
  let type = input[0];
  let amount = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;
  switch(type){
    case "Roses":
      price = amount * 5;
        if(amount > 80){
          price = price * 0.9;
        }
        break;

    case "Dahlias":
      price = amount * 3.8;
      if(amount > 90){
        price = price * 0.85;
      }
        break;

    case "Tulips":
      price = amount * 2.8;
      if(amount > 80){
        price = price * 0.85;
      }
        break;

    case "Narcissus":
      price = amount * 3;
      if(amount < 120){
        price = price * 1.15;
      }
        break;

    case "Gladiolus":
      price = amount * 2.5;
      if(amount < 80){
        price = price * 1.20;
      }
  }
  if( budget >= price){
    let diff = budget - price;
    console.log(`Hey, you have a great garden with ${amount} ${type} and ${diff.toFixed(2)} leva left.`);
  }else{
    let diff = Math.abs(budget - price);
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);


