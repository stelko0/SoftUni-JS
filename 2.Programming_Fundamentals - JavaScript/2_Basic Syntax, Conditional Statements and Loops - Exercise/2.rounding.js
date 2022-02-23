function rounding(number, dot){
  if(dot > 15){
    dot = 15;
  }
  console.log(parseFloat(number.toFixed(dot)));
}
rounding(3.1415926535897932384626433832795, 2);