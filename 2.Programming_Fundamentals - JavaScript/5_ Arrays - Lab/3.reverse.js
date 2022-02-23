function reverseNumbers(n, array){
  let total = [];
  for(let i = n - 1; i >= 0; i--){
    total.push(array[i]);
  }
  console.log(total.join(' '));
}