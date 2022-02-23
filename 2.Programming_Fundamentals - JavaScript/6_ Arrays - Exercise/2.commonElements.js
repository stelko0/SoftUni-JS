function commontElements(firstList, secondList) {
  for (let i = 0; i < firstList.length; i++) {
    let firstElement = firstList[i];

    for (let j = 0; j < secondList.length; j++) {
      let secondElement = secondList[j];
      if (firstElement === secondElement) {
        console.log(firstElement);
      }
    }
  }
}

commontElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);
