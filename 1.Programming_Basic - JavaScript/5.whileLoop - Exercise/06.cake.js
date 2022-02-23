function cake(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;

  let length = Number(input[index]);
  index++;

  let fullCake = width * length;
  let command = input[index];
  index++;

  while (command !== "STOP") {
    let pieces = Number(command);
    fullCake -= pieces;

    if (fullCake < 0) {
      break;
    }

    command = input[index];
    index++;
  }
  // console.log(fullCake);
  if (fullCake >= 0) {
    console.log(`${fullCake} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(fullCake)} pieces more.`
    );
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
