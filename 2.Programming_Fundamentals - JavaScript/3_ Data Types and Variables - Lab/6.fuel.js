function fuelMoney(distance, passagers, price) {
  let fuel = (distance / 100) * 7;
  fuel += passagers * 0.1;
  let neededMoney = fuel * price;
  console.log(`Needed money for that trip is ${neededMoney}lv.`);
}



function solve(distance, passagers, price){
  let neededFuel = (distance / 100) * 7;
  neededFuel += passagers * 0.100;
  let money = neededFuel * price;
  console.log(`Needed money for that trip is ${money}.`);
}
fuelMoney(260, 9, 2.49);
