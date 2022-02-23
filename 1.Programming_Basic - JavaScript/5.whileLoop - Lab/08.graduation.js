function school(input) {
  let name = input[0];
  let grade = 0;
  let sumRating = 0;
  let fail = 0;
  let year = 1;

  while (year <= 12) {
    let nowGrade = Number(input[year]);
    year++;
    if (nowGrade >= 4) {
      grade++;
      sumRating += nowGrade;
    } else {
      fail++;
      if (fail > 1) {
        console.log(
          `${name} has been excluded at ${grade + 1} grade`
          );
        break;
      }
    }
  }

  if (grade == 12) {
    console.log(
      `${name} graduated. Average grade: ${(sumRating / 12).toFixed(2)}`
    );
  }
}

school([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);

// school(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
