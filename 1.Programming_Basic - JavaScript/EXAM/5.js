function gift(input){
  let toys = 0;
  let sweaters = 0;
  let toysPrice = 5;
  let sweatersPrice = 15;
  for(let i = 0; i < input.length; i++){
    let age = input[i];
    if(age === "Christmas"){
      break;
    }
    if(age <= 16){
      toys++;
    }else{
      sweaters++;
    }
  }
  console.log(`Number of adults: ${sweaters}`);
  console.log(`Number of kids: ${toys}`);
  console.log(`Money for toys: ${toys * toysPrice}`);
  console.log(`Money for sweaters: ${sweaters * sweatersPrice}`);
}
gift([16,
20,
46,
12,
8,
20,
49,
"Christmas",
])