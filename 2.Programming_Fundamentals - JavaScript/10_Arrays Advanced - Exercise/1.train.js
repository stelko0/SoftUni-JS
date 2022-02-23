function ExerciseWithTrain(arr) {
  let wagons = arr.shift().split(' ').map(Number);
  let maxCapacity = Number(arr.shift());

  for (let commands of arr) {
    let tokens = commands.split(' ');

    if (tokens[0] === 'Add') {
      let passangers = Number(tokens[1]);
      wagons.push(passangers);
    } else {
      let passangers = Number(tokens[0]);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + passangers <= maxCapacity) {
          wagons[i] += passangers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(' '));
}

ExerciseWithTrain([
  '32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75',
]);
