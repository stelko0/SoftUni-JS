function convertToObject(str) {
  let person = JSON.parse(str);
  let strArr = Object.entries(person);
  for (let [key, value] of strArr) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
