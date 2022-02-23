function sumSeconds(input){
  let firstTime = Number(input[0])
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);
  
  let totaltime = firstTime + secondTime + thirdTime;

  let m = Math.floor(totaltime / 60);
  let s = totaltime % 60;

  if(s < 10){
    console.log(`${m}:0${s}`);
  }else{
    console.log(`${m}:${s}`);
  }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);

