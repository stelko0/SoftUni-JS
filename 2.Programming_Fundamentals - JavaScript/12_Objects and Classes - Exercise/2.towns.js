function townFunction(listInfo) {
  for (let element of listInfo) {
    let tokens = element.split(' | ');
    let town = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitude = Number(tokens[2]).toFixed(2);

    let townObj = {
      town,
      latitude,
      longitude,
    };
    console.log(`{ town: '${townObj.town}', latitude: '${townObj.latitude}', longitude: '${townObj.longitude}' }`);
  }
}

townFunction([
  'Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625',
]);
