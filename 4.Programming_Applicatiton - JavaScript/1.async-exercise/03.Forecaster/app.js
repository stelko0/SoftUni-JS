let getData = async (url) => {
  let data = await fetch(`http://localhost:3030/jsonstore/forecaster/${url}`);

  if (!data.ok) {
    throw new Error();
  }

  let deserialized = data.json();
  if (!deserialized) {
    throw new Error();
  }
  return deserialized;
};

let getCode = (array, n) => {
  let location = array.find((x) => x.name === n);

  if (location === undefined) {
    throw new Error();
  } else {
    return location.code;
  }
};

let symbols = {
  Sunny: '&#x2600;',
  'Partly sunny': '&#x26C5;',
  Overcast: '&#x2601;',
  Rain: '&#x2614;',
  Degrees: '&#176;',
};

function templateTommorow({ forecast, name }) {
  let card = document.createElement('div');
  card.className = 'forecasts';

  card.innerHTML = `<span class="condition symbol">${
    symbols[forecast.condition]
  }</span><span class="condition"><span class="forecast-data">${name}</span><span class="forecast-data">${
    forecast.high
  }&#176;/${forecast.low}&#176;</span><span class="forecast-data">${
    forecast.condition
  }</span></span>`;

  return card;
}

function templateDay({ condition, high, low }) {
  let wrapper = document.createElement('span');
  wrapper.className = 'upcoming';

  wrapper.innerHTML = `<span class="symbol">${symbols[condition]}</span><span class="forecast-data">${high}&#176;/${low}&#176;</span><span class="forecast-data">${condition}</span>`;

  return wrapper;
}

let outputResult = (display) =>
  (document.getElementById('forecast').style.display = display);

let cSections = () => {
  document.querySelector(
    '#current'
  ).innerHTML = `<div class="label">Current conditions</div>`;
  document.querySelector(
    '#upcoming'
  ).innerHTML = `<div class="label">Three-day forecast</div>`;
};

async function displayData(name) {
  let html = {
    tommorowResult: document.getElementById(`current`),
    threeDayResult: document.getElementById(`upcoming`),
    forecastMain: document.getElementById('forecast'),
  };

  outputResult('block');
  cSections();

  try {
    let initialInfo = await getData('locations');
    let code = getCode(initialInfo, name);
    let tomorrowNfo = await getData(`today/${code}`);
    let threeDayNfo = await getData(`upcoming/${code}`);

    html.tommorowResult.appendChild(templateTommorow(tomorrowNfo));

    Object.values(threeDayNfo.forecast).forEach((x) =>
      html.threeDayResult.appendChild(templateDay(x))
    );
  } catch (e) {
    html.tommorowResult.appendChild(document.createTextNode('Error'));
  }
}

function attachEvents() {
  let inputField = document.getElementById('location');

  document
    .getElementById('submit')
    .addEventListener('click', () => displayData(inputField.value));
}

attachEvents();
