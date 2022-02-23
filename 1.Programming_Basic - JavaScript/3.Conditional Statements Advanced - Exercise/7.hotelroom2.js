function hotel(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let sPrice = 0;
  let aPrice = 0;
  let totalPrice = 0; 

  //May and Octomber
  if(month == "May" || month == "Octomber" ){
    sPrice = 50;
    aPrice = 65;
    if (nights > 14 ) {
      sPrice *= 0.70;
      aPrice *= 0.90;
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    } else if (nights > 14) {
      sPrice = sPrice - sPrice * 0.3;
      aPrice = aPrice - aPrice * 0.1;
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    } else {
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    }
  } else if(month == "June" || month == "September"){
    sPrice = 75.20;
    aPrice = 68.70;
    if (nights > 14) {
      sPrice = sPrice - sPrice * 0.2;
      aPrice = aPrice - aPrice * 0.1;
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    } else {
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    }
  } else if(month == "July" || month == "August"){
    if(nights > 14){
      sPrice = 76;
      aPrice = 77;
      aPrice = aPrice - aPrice * 0.1;
      sPrice = sPrice;
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
    } else {
      console.log(`Apartment: ${(aPrice * nights).toFixed(2)} lv.`);
      console.log(`Studio: ${(sPrice * nights).toFixed(2)} lv.`);
      
    }
  }
}

//hotel(["May", "15"]);
hotel(["August", "20"]);
//hotel(["June", "14"]);

