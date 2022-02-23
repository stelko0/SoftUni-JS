function outfit(input) {
  let temperature = Number(input[0]);
  let time = input[1];
  let shoes;
  let outfit;

  switch(time){
    case "Morning":
        if(temperature >= 10 && temperature <= 18){
          outfit = "Sweatshirt";
          shoes = "Sneakers";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }else if(temperature > 18 && temperature <= 24){
          outfit = "Shirt";
          shoes = "Moccasins";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }else if(temperature >= 25){
          outfit = "T-Shirt";
          shoes = "Sandals";
          console.log(
            `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
          );
        }
      break;
    case "Afternoon":
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (temperature >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    case "Evening":
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (temperature >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${temperature} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
  }
}

outfit(["16", "Morning"]);
outfit(["22", "Afternoon"]);
outfit(["28", "Evening"]);