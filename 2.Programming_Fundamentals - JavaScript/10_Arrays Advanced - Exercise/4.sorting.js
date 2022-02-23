function sorting(arr) {
  let slicedArray = arr.slice();
  let biggest = arr.sort((x, y) => y - x);
  let lowest = slicedArray.sort((x, y) => x - y);
  let resultArray = [];

  biggest.forEach((x, i) => {
    resultArray.push(x);
    resultArray.push(lowest[i]);
  });

  console.log(
    resultArray
      .splice(resultArray.length / 2)
      .reverse()
      .join(' ')
  );
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
