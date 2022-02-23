function vacantion(input) {
  let index = 0;
  let needCash = Number(input[index]);
  index++;
  let cash = Number(input[index]);
  index++;

  let countDays = 0;
  let count = 0;

  while (cash < needCash) {
    let action = input[index];
    index++;
    countDays++;
    let temporarily = Number(input[index]);
    index++;

    if (action === "save") {
      cash += temporarily;
      count = 0;
    } else {
      cash -= temporarily;
      if(cash < 0){
        cash = 0;
      }
      count++;
    }
    if (count === 5) {
      console.log("You can't save the money.");
      console.log(`${countDays}`);
        break;
    }
  }

  if (cash >= needCash) {
    console.log(`You saved the money for ${countDays} days.`);
  }
}

// vacantion(["2000", "1000", "spend", "1200", "save", "2000"]);
// vacantion([
//   "110",
//   "60",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
// ]);

// vacantion(["110",
// "60",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10"]);

// vacantion(["2000", "1000", "spend", "1200", "save", "2000"]);
vacantion([110,
60,
"spend",
10,
"spend",
10,
"spend"])
