function move(input) {
  let w = Number(input[0]); // Width
  let l = Number(input[1]); // Length
  let h = Number(input[2]); // Height
  let index = 3;

  let space = w * l * h;

  while (input[index] != "Done") {
    space -= Number(input[index]);
    if (space < 0) {
      console.log(
        `No more free space! You need ${Math.abs(space)} Cubic meters more.`
      );
      break;
    }
    index++;
  }
  if (space >= 0) {
    console.log(`${space} Cubic meters left.`);
  }
}

// move(["10", "10", "2", "20", "20", "20", "20", "122"]);
move(["10", "1", "2", "4", "6", "Done"]);
