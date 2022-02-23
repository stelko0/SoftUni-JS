function aluminumJoinery(input) {
  let count = Number(input[0]);
  let size = input[1];
  let delivery = input[2];
  let money = 0;

  if (count <= 10) {
    console.log("Invalid order");
    return;
  }

  switch (size) {
    case "90X130":
      if (count > 99) {
        money = count * 110 * 0.92;
      } else if (count > 30) {
        money = count * 110 * 0.95;
      } else if (count > 60) {
        money = count * 110 * 0.92;
      }
      break;
    case "100X150":
      if (count > 99) {
        money = count * 140 * 0.9;
      } else if (count > 40) {
        money = count * 140 * 0.94;
      } else if (count > 80) {
        money = count * 140 * 0.90;
      }
      break;
    case "130X180":
      if (count > 99) {
        money = count * 190 * 0.88;
      } else if (count > 20) {
        money = count * 190 * 0.93;
      } else if (count > 50) {
        money = count * 190 * 0.88;
      }
      break;
    case "200X300":
      if (count > 99) {
        money = count * 250 * 0.86;
      } else if (count > 25) {
        money = count * 250 * 0.91;
      } else if (count > 50) {
        money = count * 250 * 0.86;
      }
      break;
  }

  if (delivery === "With delivery") {
    money += 60;
  }

  if (count > 99) {
    money = money * 0.96;
  }

    console.log(`${money.toFixed(2)} BGN`);
}

// aluminumJoinery([40, "90X130", "Without delivery"]);
// aluminumJoinery([105, "100X150", "With delivery"]);
// aluminumJoinery([105, "100X150", "With delivery"]);
aluminumJoinery([5, "100X150", "With delivery"]);
