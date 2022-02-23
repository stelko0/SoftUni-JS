function cityFunc(city) {
  console.log(`name -> ${city.name}`);
  console.log(`area -> ${city.area}`);
  console.log(`population -> ${city.population}`);
  console.log(`country -> ${city.country}`);
  console.log(`postCode -> ${city.postCode}`);
}

let city = {
  name: 'Targovishte',
  area: 20,
  population: 50,
  country: 'Bulgaria',
  postCode: 7700,
};

cityFunc(city);
