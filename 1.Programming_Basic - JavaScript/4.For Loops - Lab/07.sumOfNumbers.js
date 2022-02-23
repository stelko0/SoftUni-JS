function sum(input){
  let num = input[0];
  let result = 0;
  
  for(let i = 0; i < num.length; i++){
    let current = Number(num[i]);
    result = result + current;
  }
  console.log(`The sum of the digits is:${result}`);
}

sum(1234);