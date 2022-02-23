function shop(input){
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  let weekend = ["Saturday", "Sunday"]
  let validFruits = ["banana", "apple", "orange", "grapefruit", "kiwi", "pineapple", "grapes"]
  let total = 0;


  if(validFruits.includes(fruit)){
    if(weekDays.includes(day)){

      let price = {
        banana: 2.50,
        apple: 1.20,
        orange: 0.85,
        grapefruit: 1.45,
        kiwi: 2.70,
        pineapple: 5.50,
        grapes: 3.85,
      };
      
      total = price[fruit] * count;

      console.log(total.toFixed(2));
    }else if(weekend.includes(day)){
        let price = {
        banana: 2.70,
        apple: 1.25,
        orange: 0.90,
        grapefruit: 1.60,
        kiwi: 3.00,
        pineapple: 5.60,
        grapes: 4.20,
      };

      total = price[fruit] * count;

      console.log(total.toFixed(2));

    }else{
      console.log("error")
    }
    }else{
    console.log("error");
    }
  }

shop(["apple", "Tuesday", "2"]);
shop(["orange", "Sunday", "3"]);
shop(["kiwi", "Monday", "2.5"]);
shop(["grapes", "Saturday", "0.5"]);
shop(["tomato", "Monday", "0.5"]);
