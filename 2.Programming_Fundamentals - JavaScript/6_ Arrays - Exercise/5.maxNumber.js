function maxNumber(list) {
  let topNumbers = [];

  for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];
    let bigNum = true;

    for (let j = i + 1; j < list.length; j++) {
      let biggerNumber = list[j];

      if (biggerNumber >= currentNum) {
        bigNum = false;
        break;
      }
    }

    if (bigNum) {
      topNumbers.push(currentNum);
    }
  }
  console.log(topNumbers.join(' '));
}

maxNumber([1, 4, 3, 2]);
