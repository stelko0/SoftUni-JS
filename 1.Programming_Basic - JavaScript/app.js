function hello() {
  console.log("Hello SoftUni");

}

/// hello();


function numsFrom1To10() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8); 
  console.log(9);
  console.log(10);
}

/// numsFrom1To10();


function readName(input) {
  let name = input[0];
  console.log(name);
}

/// readName(["Softuni"]);


function squareArea(input) {
  let side = Number(input[0]);
  let area = side * side;
  console.log(area);
}

/// squareArea([10]);

function readNum(input) {
  let test = Number(input[0]);
  let result = test + input[1]; //
}

/// readNum(["5", 5])



function printName(input) {
  let name = input[0];
  let result = "Hello, " + name;
  console.log(result);
}

/// printName(["Stelian Hristov"])


function stringTest() {
  let a = 5;
  console.log("Ivan is " + a + " years old.") // Ivan is 5 years old.
  console.log(`Ivan is ${a} years old ${a + 10}`);
 }
 // stringTest();

 function printName(input) {
   let firstName = input[0];
   let lastName = input[1];
   let age = Number(input[2]);
   let city = input[3];


   // let test = 10 * (3 + 2);
   console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);
   
 }
 printName(["Petar", "Petrov", "24", "Sofia"]);