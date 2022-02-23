function solve(year, month, day) {
  // let dt = new Date(year, month, day);
  // console.log(month);

  // dt.setDate(dt.getDate() - 1);
  // console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`);
  let dateString = year + '-' + month + '-' + day;
  let event = new Date(dateString);

  event.setDate(day - 1);
  console.log(
    event.getFullYear() +
      '-' +
      (Number(event.getMonth()) + 1) +
      '-' +
      event.getDate()
  );
}
solve(2016, 10, 1);
// solve(2016, 9, 30);

// );
