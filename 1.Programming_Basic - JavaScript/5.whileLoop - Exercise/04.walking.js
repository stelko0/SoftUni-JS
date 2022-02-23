function walking(input) {
  let target = 10000;
  let index = 0;
  let totalSteps = 0;
  let command = input[index];
  index++;

  while (totalSteps <= target) {
    if (command === "Going home") {
      totalSteps += Number(input[index]);
      index++;
      break;
    }
    let steps = Number(command);
    totalSteps += steps;
    command = input[index];
    index++;
  }
  if (totalSteps >= target) {
    console.log(`Goal reached! Good job!`);
    console.log(`${totalSteps - target} steps over the goal!`);
  } else {
    console.log(`${target - totalSteps} more steps to reach goal.`);
  }
}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
