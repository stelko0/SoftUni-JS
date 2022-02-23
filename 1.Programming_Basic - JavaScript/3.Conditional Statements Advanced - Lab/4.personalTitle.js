function title(input) {
  let age = Number(input[0]);
  let gender = input[1];
 
  if(gender == "f"){
    if(age >= 16){
      console.log("Ms.");
    }
    else{
      console.log("Miss")
    }
  }else{
    if(age >= 16){
      if(gender == "m");
      console.log("Mr.");
    }else{
      console.log("Master");
    }
  }
}

title(["12", "f"]); //Miss
title(["17", "m"]); // Mr.
title(["25", "f"]); // Ms.
title(["13.5", "m"]); // Master

