function trainTheTrainers(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;

  let command = input[index];
  index++;
  let count = 0;
  let rateAvg = 0;
  while (command !== "Finish") {
    count++;
    let title = command;
    let tempAvgRate = 0;
    for (let i = 0; i < n; i++) {
      let rateByN = Number(input[index]);
      index++;
      tempAvgRate += rateByN;
    }
    tempAvgRate = tempAvgRate / n;
    console.log(`${title} - ${tempAvgRate.toFixed(2)}.`);

    command = input[index];
    index++;
    rateAvg += tempAvgRate;
  }
  rateAvg = rateAvg / count;
  console.log(`Student's final assessment is ${rateAvg.toFixed(2)}.`); 
}

trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
