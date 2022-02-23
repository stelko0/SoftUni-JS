function sumOdd(n) {
  let count = 0;
  let sum = 0;
  while (n > count) {
    for (let i = 1; i < 100; i += 2) {
      console.log(i);
      sum += i;
      count++;
      if (count == n) {
        break;
      }
    }
  }
  console.log(`Sum: ${sum}`);
}

sumOdd(5);
