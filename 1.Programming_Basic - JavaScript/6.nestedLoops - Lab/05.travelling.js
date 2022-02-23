function travel(input) {
  let country = "";
  let budget = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "End") {
      break;
    }
    country = input[i++];
    budget = Number(input[i]);
    let saveCash = 0;
    while (saveCash < budget) {
      i++;
      saveCash += Number(input[i]);
    }
    console.log(`Going to ${country}!`);
  }
}

travel([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
