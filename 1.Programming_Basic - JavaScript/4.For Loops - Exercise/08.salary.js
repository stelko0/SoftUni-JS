function salary(input) {
  let tabs = Number(input[0]);
  let currentSalary = Number(input[1]);
  let isLostSalary = false;
  // console.log(input.length);

  for (let i = 2; i < input.length; i++) {
    let name = input[i];
    if (name == "Facebook") {
      currentSalary -= 150;
    } else if (name == "Instagram") {
      currentSalary -= 100;
    } else if (name == "Reddit") {
      currentSalary -= 50;
    }
  }

  if (currentSalary <= 0) {
    isLostSalary = true;
    console.log("You have lost your salary.");
  } else{
    console.log(currentSalary.toFixed(0));
  }

  // if (currentSalary > 0) {
  //   console.log(currentSalary.toFixed(0));
  // }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);

// salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
