function exam(input) {
  let goodRate = 0;
  let badGrade = 0;
  let sumGrade = 0;
  let lastExercise = "";
  let index = 1;
  let poor = false;

  while (badGrade < input[0]) {
    let currentTask = input[index];
    let currentGrade = Number(input[index + 1]);
    if (input[index] == "Enough") {
      console.log(
        `Average score: ${(
          sumGrade /
          (badGrade + goodRate)
        ).toFixed(2)}`
      );
      console.log(`Number of problems: ${goodRate + badGrade}`);
      console.log(`Last problem: ${lastExercise}`);
      poor = true;
      break;
    }
    sumGrade += currentGrade;
    lastExercise = currentTask;

    index += 2;

    if (currentGrade <= 4) {
      badGrade++;
    } else {
      goodRate++;
    }
  }
  if (!poor) {
    console.log(`You need a break, ${badGrade} poor grades.`);
  }
}

exam([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
