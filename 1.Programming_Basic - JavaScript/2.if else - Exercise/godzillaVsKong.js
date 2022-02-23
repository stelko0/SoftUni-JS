function movie(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let clothing = Number(input[2]);

  let decor = budget * 0.10;
  if(extras > 150){
    clothing = clothing * 0.90;
  }
  let sumClothing = clothing * extras;
  let sumMovie = sumClothing + decor;
  let diff = budget - sumMovie;

  if(diff >= 0){
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }else{
    diff = Math.abs(diff);
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  }
}

movie(["20000", "120", "55.5"]);
movie(["15437.62", "186", "57.99"]);
movie(["9587.88", "222", "55.68"]);


