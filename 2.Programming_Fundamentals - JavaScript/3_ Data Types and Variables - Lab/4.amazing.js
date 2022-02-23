function amazing(num){
  let strNum = num.toString();
  let sum = 0;

  for(let i = 0; i < strNum.length; i++){
    sum += Number(strNum[i]);
  }

  let strSum = sum.toString();
  let hasNine = false;

  for(let i = 0; i < strNum.length; i++){
    if(strSum[i] == "9"){
      hasNine = true;
      break;
    }
  }

  console.log(`${num} Amazing? ${hasNine ? "True" : "False"}`);
}

amazing(1233);