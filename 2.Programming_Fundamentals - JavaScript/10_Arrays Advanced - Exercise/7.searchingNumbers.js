function searching(arr1, arr2) {
  let arrLength = arr2[0];
  let arrDelete = arr2[1];
  let searchNum = arr2[2];

  let arrNew = arr1.slice(0, arrLength);
  while (arrDelete !== 0) {
    arrNew.shift();
    arrDelete--;
  }
  let matching = 0;
  for (let i of arrNew) {
    if (i === searchNum) {
      matching++;
    }
  }
  console.log(`Number ${searchNum} occurs ${matching} times.`);
}

searching([5, 2, 3, 4, 1, 6], [5, 2, 3]);
