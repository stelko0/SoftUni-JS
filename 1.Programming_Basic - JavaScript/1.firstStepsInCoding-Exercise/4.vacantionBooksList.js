function books(input) {
  let pages = Number(input[0]);
  let pagesByHour = Number(input[1]);
  let countDays = Number(input[2]);

  let timeReadBook = pages / pagesByHour;
  let result = timeReadBook / countDays;
  console.log(result);
 }
 
books(["212", "20", "2"]);

