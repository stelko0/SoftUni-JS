function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let totalMin = hours * 60 + minutes;
  let totalMinAfter = totalMin + 15;

  let finalHours = Math.floor(totalMinAfter / 60);
  if(finalHours > 23){
    finalHours = 0;
  }
  let finalMinutes = totalMinAfter % 60;
  if(finalMinutes < 10){
    console.log(`${finalHours}:0${finalMinutes}`);
  }else{
    console.log(`${finalHours}:${finalMinutes}`);
  }
}

time(["23", "59"]);