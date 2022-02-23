function numbers3(input){
  let num = Number(input[0]);

  for(let i = 1; i <= num; i+=3){
    console.log(i);
  }
}

numbers3(["10"]);
numbers3(["7"]);
numbers3(["15"]);