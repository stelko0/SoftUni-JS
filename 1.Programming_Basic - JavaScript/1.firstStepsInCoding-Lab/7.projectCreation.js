function projectCreation(input) {
  let name = (input[0]);
  let countProjects = Number(input[1]);
  let result = countProjects * 3;
  console.log(`The architect ${name} will need ${result} hours to complete ${countProjects} project/s.`);
}

projectCreation(["George", "4"]);