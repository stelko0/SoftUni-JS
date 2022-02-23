function isExcellent(gradeArr) {
  let grade = Number(gradeArr[0]);
  if (grade >= 5.50) {
    console.log("Excellent!");
  }
}

isExcellent(["5.50"]);
isExcellent(["5.49"]);