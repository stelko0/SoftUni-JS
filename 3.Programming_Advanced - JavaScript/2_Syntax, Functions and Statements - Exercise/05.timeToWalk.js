function solve(steps, meterPerStep, speed) {
  let distance = meterPerStep * steps;
  let time = distance / 1000 / speed;
  let dt = new Date(0, 0);
  dt.setSeconds(time * 60 * 60 + 1);
  dt.setMinutes(dt.getMinutes() + Math.floor(distance / 500));

  return dt.toTimeString().slice(0, 8);
}
console.log(solve(4000, 0.6, 5));
