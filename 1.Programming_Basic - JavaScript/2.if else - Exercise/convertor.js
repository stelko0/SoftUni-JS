function convertor(input) {
  let num = input[0];
  let firstUnit = input[1];
  let secondUnit = input[2];
  let result;

  if (firstUnit == "mm" && secondUnit == "m") {
    result = num / 1000;
    console.log(result.toFixed(3));
  } else if (firstUnit == "m" && secondUnit == "mm") {
    result = num * 1000;
    console.log(result.toFixed(3));
  } else if (firstUnit == "cm" && secondUnit == "m") {
    result = num / 100;
    console.log(result.toFixed(3));
  } else if (firstUnit == "m" && secondUnit == "cm") {
    result = num * 100;
    console.log(result.toFixed(3));
  } else if (firstUnit == "mm" && secondUnit == "cm") {
    result = num / 10;
    console.log(result.toFixed(3));
  } else if (firstUnit == "cm" && secondUnit == "mm") {
    result = num * 10;
    console.log(result.toFixed(3));
  }
}

convertor(["12", "mm", "m"]);
convertor(["45", "cm", "mm"]);
convertor(["150", "m", "cm"]);
