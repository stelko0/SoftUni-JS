function petShop(input) {
  let pets = Number(input[0]);
  let otherPets = Number(input[1]);
  console.log((pets * 2.50) + (otherPets * 4));
}

petShop(["13", "9"]);