function rowNums(input) {
  let num = Number(input[0]);
  let total = 1;
  while (total <= num) {
    console.log(total);
    total = total * 2 + 1;
  }
}

rowNums(["8"]);
