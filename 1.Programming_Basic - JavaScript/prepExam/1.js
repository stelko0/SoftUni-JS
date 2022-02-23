function moon(input) {
  let avgSpeed = Number(input[0]);
  let fuel = Number(input[1]);

  let totalDistance = 384400 * 2;
  let time = Math.ceil(totalDistance / avgSpeed);
  let totalTime = time + 3;
  let totalFuel = (fuel * totalDistance) / 100;

  console.log(totalTime);
  console.log(totalFuel);
}

moon(["10000", "5"]);
moon(["5000", "7"]);
moon(["15000", "4"]);
