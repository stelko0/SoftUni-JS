function employeesFunction(employeeList) {
  for (let employee of employeeList) {
    let data = {
      name: employee,
      number: employee.length,
    };
    console.log(`Name: ${data.name} -- Personal Number: ${data.number}`);
  }
}

employeesFunction([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
