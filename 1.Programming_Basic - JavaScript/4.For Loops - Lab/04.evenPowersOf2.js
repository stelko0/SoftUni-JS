function powerOfTwo(input) {
  let num = Number(input);
    for(let i = 0; i <= num; i+=2){
      console.log(Math.pow(2, i));
  }
}

powerOfTwo(2)