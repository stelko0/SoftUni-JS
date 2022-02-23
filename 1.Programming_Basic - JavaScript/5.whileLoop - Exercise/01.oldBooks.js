function books(input) {
  let fav = input[0];
  let index = 1;
  let findBook = false;
  let nextTitleBook = input[index];

  while (nextTitleBook !== "No More Books") {
    if (nextTitleBook === fav) {
      findBook = true;
      break;
    }
    index++;
    nextTitleBook = input[index];
  }

  if (findBook == false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}

books(["Troy", "Stronger", "Life Style", "Troy"]);
books([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
