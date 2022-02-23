function diffArray(array1, array2) {
  let isTrue = true;
  let indexDiff = 0;

  for (let index = 0; index < array1.length; index++) {
    let first = array1[index];
    let second = array2[index];

    if (first !== second) {
      isTrue = false;
      indexDiff = index;
      break;
    }
  }
  if (isTrue) {
    let sum = 0;
    for (let index = 0; index < array1.length; index++) {
      sum += Number(array1[index]);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${indexDiff} index`
    );
  }
}
diffArray(['10', '20', '30'], ['10', '20', '30']);
