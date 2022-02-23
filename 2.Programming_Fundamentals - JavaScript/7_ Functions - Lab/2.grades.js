function grades(grade) {
  let description = '';
  if (grade < 3) {
    description = 'Fail';
  } else if (grade >= 3 && grade < 3.5) {
    description = 'Poor';
  } else if (grade >= 3.5 && grade < 4.5) {
    description = 'Good';
  } else if (grade >= 4.5 && grade < 5.5) {
    description = 'Very good';
  } else if (grade >= 5.5) {
    description = 'Excellent';
  }
  if (grade < 3) {
    console.log('Fail (2)');
  } else {
    console.log(`${description} (${grade.toFixed(2)})`);
  }

}

grades(3.33);
grades(4.5);
grades(2.99);
