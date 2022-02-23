function evenOddPosition(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let str = "";
  for (let i = a; i <= b; i++) {
    let current = "" + i;
    let odd = 0;
    let even = 0;
    for (let k = 0; k < current.length; k++) {
      let digit = Number(current.charAt(k));
      if (k % 2 == 0) {
        even += digit;
      } else {
        odd += digit;
      }
    }
    if (odd === even) {
      str += `${i} `;
    }
  }
  console.log(str);
}
evenOddPosition(["100000", "100050"]);
