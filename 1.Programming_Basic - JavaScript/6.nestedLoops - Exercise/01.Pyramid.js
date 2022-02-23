function pyramid(input) {
  let num = Number(input[0]);
  let current = 1;
  let flag = false;
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      if (current > num) {
        flag = true;
        break;
      }
      str += current + " ";
      current++;
    }
    console.log(str);
    str = "";
    if (flag) {
      break;
    }
  }
}

pyramid([7]);
