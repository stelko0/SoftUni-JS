function meetings(input) {
  let meeting = {};
  let weekday,
    name = null;
  for (let line of input) {
    [weekday, name] = line.split(' ');
    if (meeting.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meeting[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for(let key in meeting){
    console.log(`${key} -> ${meeting[key]}`);
  }
}

// for (let key in phonebook) {
//   console.log(`${key} -> ${phonebook[key]}`);
// }

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
