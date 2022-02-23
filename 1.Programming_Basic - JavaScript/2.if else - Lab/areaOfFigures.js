function figures(input) {
  let result;
  
  if(input[0] == "square"){
    let side = input[1];
    result = Math.pow(side, 2);
  }else if(input[0] == "rectangle"){
    let a = input[1];
    let b = input[2];
    result = a * b;
  }else if(input[0] == "circle"){
    let r = input[1];
    result = Math.PI * Math.pow(r, 2);
  }else if(input[0] == "triangle"){
    let h = Number(input[1]);
    let a = Number(input[2]);
    result = (a*h) / 2;
  }
  console.log(result.toFixed(3));
}

figures(["square", "5"]);
figures(["rectangle", "7", "2.5"]);
figures(["circle", "6"]);
figures(["triangle", "4.5", "20"]);


