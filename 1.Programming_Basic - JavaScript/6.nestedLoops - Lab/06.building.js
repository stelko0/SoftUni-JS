function buildings(input) {
  let first = Number(input[0]);
  let second = Number(input[1]);

  for (let i = first; i > 0; i--) {
    let str = "";
    for (let k = 0; k < second; k++) {
      if (i == first) {
        str += `L${i}${k} `;
      } else {
        if(i % 2 == 0) {
        str += `O${i}${k} `;
      } else {
        str += `A${i}${k} `;
      }
    }
  }
    console.log(str);
  }
}

buildings(["6", "4"]);
