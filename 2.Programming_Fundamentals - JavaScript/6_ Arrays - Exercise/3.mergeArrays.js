function mergeArrays(firstList, secondList) {
  let thirdList = [];
  for (let i = 0; i < firstList.length; i++) {
    let num = 0;
    let first = Number(firstList[i]);
    let second = Number(secondList[i]);
    if (i % 2 === 0) {
      num = first + second;
    } else {
      num = firstList[i] + '' + secondList[i];
    }
    thirdList.push(num);
  }
  console.log(thirdList.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
