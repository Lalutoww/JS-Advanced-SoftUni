function filterEmployees(JSONString, filter) {
  const employeesToArr = JSON.parse(JSONString);
  const [searchCriteria, criteria] = filter.split("-");
  let resultArr = [];

  for (const employee of employeesToArr) {
    if (employee[searchCriteria] === criteria)
      resultArr.push(
        `${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
  }
  for (let i = 0; i < resultArr.length; i++) {
    console.log(`${i}. ${resultArr[i]}`);
  }
}
filterEmployees(
  `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
    }, {"id": "2",
    "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female"
    }, {
    "id": "3",
    "first_name": "Evanne", "last_name": "Maldin",
    "email": "emaldin2@hostgator.com", "gender": "Male"
    }, {
    "id": "4",
    "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male"
    }]`,
  "last_name-Johnson"
);
