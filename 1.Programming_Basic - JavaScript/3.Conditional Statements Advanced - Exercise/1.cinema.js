function cinema(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let money = 0;

  switch (type){
    case "Premiere":
          money = rows * columns * 12.00;
        break;
    case "Normal":
            money = rows * columns * 7.50;
        break;
    case "Discount":
            money = rows * columns * 5.00;
        break;
  }
  console.log(`${money.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);


