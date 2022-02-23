function numbers(input) {
  let first = Number(input[0]);
  let second = Number(input[1]);
  let result = 0;
  let resultS = "";

  for (let i = first; i <= second; i++) {
    if (i % 9 == 0) {
      result += i;
      resultS = resultS + i + "\n";
    }
  }
  console.log(`The sum: ${result}`);
  console.log(resultS);
}

numbers(["100", "200"]);
