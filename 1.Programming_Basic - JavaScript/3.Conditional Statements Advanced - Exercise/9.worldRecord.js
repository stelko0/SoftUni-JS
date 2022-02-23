function worldSwimmingRecord(input) {
  let recordSec = Number(input[0]);
  let distanceMeter = Number(input[1]);
  let timeSecPerMeter = Number(input[2]);

  let timeNeeded = distanceMeter * timeSecPerMeter;
  let timeResistance = Math.floor(distanceMeter / 15).toFixed(0) * 12.5;
  let totalTime = timeNeeded + timeResistance;
  let difference = Math.abs(totalTime - recordSec);

  if (recordSec > totalTime) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${difference.toFixed(2)} seconds slower.`
    );
  }
}
