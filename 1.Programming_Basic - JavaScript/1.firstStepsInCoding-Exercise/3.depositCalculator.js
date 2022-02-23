function depositCalculator(input) {
  let deposit = Number(input[0]);
  let depositPeriod = Number(input[1]);
  let yearInterestRate = Number(input[2]);
  let calInterest = deposit * (yearInterestRate * 0.01);
  let month = calInterest / 12;
  let total = deposit + (depositPeriod * month);
  console.log(total);
}

depositCalculator(["200", "3", "5.7"]);

