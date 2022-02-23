function minNum(input) {
  let index = 0;
  let inputData = input[index];
  let maximumNumber = Number(inputData);
  while (inputData != "Stop") {
    let inputNumber = Number(inputData);
    if (maximumNumber > inputNumber) {
      maximumNumber = inputNumber;
    }
    index++;
    inputData = input[index];
  }
  console.log(maximumNumber);
}

minNum(["100", "99", "80", "70", "Stop"]);
