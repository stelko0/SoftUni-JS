function valid(input){
  let num = Number(input[0]);

  if(num >= 100 && num <= 200 || num == 0){

  }else{
    console.log("invalid");
  }
}

valid(["75"]);
valid(["150"]);
valid(["220"]);
valid(["199"]);
valid(["-1"]);
valid(["100"]);
valid(["200"]);
valid(["0"]);
