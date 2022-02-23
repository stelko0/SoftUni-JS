function histogram(input) {
  let num = Number(input[0]);
  let p = input[1];

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= num; i++) {
    let number = Number(input[i]);
    if (number < 200) {
      p1++;
    } else if (number >= 200 && number <= 399) {
      p2++;
    } else if (number >= 400 && number <= 599) {
      p3++;
    } else if (number >= 600 && number <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let p1Result = (p1 / num) * 100;
  let p2Result = (p2 / num) * 100;
  let p3Result = (p3 / num) * 100;
  let p4Result = (p4 / num) * 100;
  let p5Result = (p5 / num) * 100;

  console.log(p1Result.toFixed(2) + "%");
  console.log(p2Result.toFixed(2) + "%");
  console.log(p3Result.toFixed(2) + "%");
  console.log(p4Result.toFixed(2) + "%");
  console.log(p5Result.toFixed(2) + "%");
}
histogram(["3", "1", "2", "999"]);
