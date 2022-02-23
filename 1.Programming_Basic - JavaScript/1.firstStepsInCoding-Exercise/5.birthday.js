function birthday(input) {
  let rent = Number(input[0]);
  let cake = rent * 0.20;
  let drinks = cake * 0.55;
  let animator = rent / 3;
  console.log(rent + cake + drinks + animator);
}

birthday(["2250"]);