function scholarship(input) {
  let incomeInCash = Number(input[0]);
  let grades = Number(input[1]);
  let minSalary = Number(input[2]);

  if (incomeInCash < minSalary && grades > 4.5) {
    if (grades >= 5.5 && minSalary * 0.35 < grades * 25)
      console.log(
        `You get a scholarship for excellent results ${Math.floor(
          grades * 25
        )} BGN`
      );
    else
      console.log(
        `You get a Social scholarship ${Math.floor(minSalary * 0.35)} BGN`
      );
  } else if (incomeInCash > minSalary && grades >= 5.5)
    console.log(
      `You get a scholarship for excellent results ${Math.floor(
        grades * 25
      )} BGN`
    );
  else console.log(`You cannot get a scholarship!`);
}
