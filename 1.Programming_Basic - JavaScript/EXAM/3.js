function catLife(input) {
  let type = input[0];
  let gender = input[1];
  let personMonth = 0;
  let catMonths = 0;
  let flag = false;

  switch (type) {
    case "British Shorthair":
      if (gender === "m") {
        personMonth = 13 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 14 * 12;
        catMonths = personMonth / 6;
      }
      break;
    case "Siamese":
      if (gender === "m") {
        personMonth = 15 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 16 * 12;
        catMonths = personMonth / 6;
      }
      break;
    case "Persian":
      if (gender === "m") {
        personMonth = 14 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 15 * 12;
        catMonths = personMonth / 6;
      }
      break;
    case "Ragdoll":
      if (gender === "m") {
        personMonth = 16 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 17 * 12;
        catMonths = personMonth / 6;
      }
      break;
    case "American Shorthair":
      if (gender === "m") {
        personMonth = 12 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 13 * 12;
        catMonths = personMonth / 6;
      }
      break;
    case "Siberian":
      if (gender === "m") {
        personMonth = 11 * 12;
        catMonths = personMonth / 6;
      } else if (gender === "f") {
        personMonth = 12 * 12;
        catMonths = personMonth / 6;
      }
      break;
    default:
      flag = true;
      console.log(`${type} is invalid cat!`);
      break;
  }
  if(!flag){
  console.log(`${Math.floor(catMonths)} cat months`);
  }
}

// catLife(["Persian", "m"]);
// catLife(["Siamese", "f"]);
// catLife(["Siberian", "m"]);
catLife(["Tom",
"m"])
