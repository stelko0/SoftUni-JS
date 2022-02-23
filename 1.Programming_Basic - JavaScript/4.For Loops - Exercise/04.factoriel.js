function factoriel(input){
  let n = Number(input[0]);
  let result = 1;
  for(let i = 2; i <= n; i++){
    result = result * i
  }
  console.log(result);
}

factoriel([4])