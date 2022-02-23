function oddIndex(array) {
  console.log(
    array
      .filter((num, index) => index % 2 == 1)
      .map((num) => num * 2)
      .reverse()
      .join(' ')
  );
}
oddIndex([10, 15, 20, 25]);
