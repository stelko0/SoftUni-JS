function year(input){
  let firstYear = Number(input[0]);
  let secondYear = Number(input[1]);

  for(let i = firstYear; i <= secondYear; i+=4){
    console.log(i);
  }
}

year(["1908", "1919"]);