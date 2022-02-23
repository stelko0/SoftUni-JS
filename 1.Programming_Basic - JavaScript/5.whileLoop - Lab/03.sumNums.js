function sumNums(input) {
  let finalNum = Number(input[0]);
  let index = 1;
  let sum = 0;

  while (sum < finalNum) {
    let num = Number(input[index]);
    sum += num;
    index++;
  }
  console.log(sum);
}

sumNums(["100", "10", "20", "30", "40"]);
