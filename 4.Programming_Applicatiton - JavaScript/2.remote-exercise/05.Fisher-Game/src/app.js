let userInfo = null;

window.addEventListener('DOMContentLoaded', () => {
  let logginOut = document.querySelector('#logout');
  userInfo = localStorage.getItem('userInfo');
  let btnLoad = document.querySelector('.load');
  let formAdd = document.getElementById('addForm');

  btnLoad.addEventListener('click', onLoad);
  formAdd.addEventListener('submit', onCreate);

  logginOut.addEventListener('click', logout);

  let user = JSON.parse(userInfo);
  if (userInfo != null) {
    document.querySelector('#guest').style.display = 'none';
    document.querySelector('#addForm .add').disabled = false;
    document.querySelector('.email > span').textContent = user.email;
  } else {
    document.querySelector('#user').style.display = 'none';
    document.querySelector('#guest').style.display = 'block';
  }

  document.querySelector('#catches').addEventListener('click', (e) => {
    let id = e.target.parentNode;
    let catchId = id.getAttribute('data-set');

    if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Update') {
      let fields = e.target.parentElement.querySelectorAll('input');
      let values = [...fields].reduce((acc, current) => {
        acc[current.className] = current.value;
        return acc;
      }, {});
      let isEmpty = Object.values(values).some((x) => x == '');
      if (isEmpty) {
        throw new Error('All Fileds are required!');
      }
      console.log(values);
      onUpdate(catchId, values);
    } else if (
      e.target.tagName == 'BUTTON' &&
      e.target.textContent == 'Delete'
    ) {
      onDelete(catchId);
    }
  });
});

// Load function
async function onLoad() {
  let allCatches = document.querySelector('#catches');
  let response = await fetch('http://localhost:3030/data/catches');
  let information = await response.json();
  let result = information.map((x) => createCatch(x));
  allCatches.replaceChildren(...result);
}

//Update function
async function onUpdate(id, content) {
  let userToken = JSON.parse(userInfo).token;

  let res = await fetch('http://localhost:3030/data/catches/' + id, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userToken,
    },
    body: JSON.stringify(content),
  });
  let data = await res.json();

  onLoad();
}

//Delete function
async function onDelete(id) {
  let userToken = JSON.parse(userInfo).token;
  let res = await fetch('http://localhost:3030/data/catches/' + id, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userToken,
    },
  });
  let information = await res.json();

  onLoad();
}

function createCatch(item) {
  let owner = userInfo && JSON.parse(userInfo).id == item._ownerId;
  //
  let div = document.createElement('div');
  div.classList.add('catch');
  div.setAttribute('data-set', item._id);
  //
  let anglerLabel = document.createElement('label');
  anglerLabel.textContent = 'Angler';
  //
  let anglerInput = document.createElement('input');
  anglerInput.classList.add('angler');
  anglerInput.disabled = !owner ? true : '';
  anglerInput.value = item.angler;
  //
  let weigthLabel = document.createElement('label');
  weigthLabel.textContent = 'Weight';
  //
  let weigthInput = document.createElement('input');
  weigthInput.classList.add('weigth');
  weigthInput.value = item.weigth;
  weigthInput.disabled = !owner ? true : '';
  //
  let speciesLabel = document.createElement('label');
  speciesLabel.textContent = 'Species';
  //
  let speciesInput = document.createElement('input');
  speciesInput.classList.add('species');
  speciesInput.value = item.species;
  speciesInput.disabled = !owner ? true : '';
  //
  let locationLabel = document.createElement('label');
  locationLabel.textContent = 'Location';
  //
  let locationInput = document.createElement('input');
  locationInput.classList.add('location');
  locationInput.value = item.location;
  locationInput.disabled = !owner ? true : '';
  //
  let baitLabel = document.createElement('label');
  baitLabel.textContent = 'Bait';

  let baitInput = document.createElement('input');
  baitInput.classList.add('bait');
  baitInput.value = item.bait;
  baitInput.disabled = !owner ? true : '';

  let labelCaptureTime = document.createElement('label');
  labelCaptureTime.textContent = 'Capture Time';
  //
  let inputCaptureTime = document.createElement('input');
  inputCaptureTime.classList.add('captureTime');
  inputCaptureTime.value = item.captureTime;
  inputCaptureTime.disabled = !owner ? true : '';
  //
  let btnUpdate = document.createElement('button');
  btnUpdate.textContent = 'Update';
  btnUpdate.classList.add('update');
  btnUpdate.disabled = !owner ? true : '';
  //
  let btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete';
  btnDelete.classList.add('delete');
  btnDelete.disabled = !owner ? true : '';
  //
  div.appendChild(anglerLabel);
  div.appendChild(anglerInput);
  div.appendChild(weigthLabel);
  div.appendChild(weigthInput);
  div.appendChild(speciesLabel);
  div.appendChild(speciesInput);
  div.appendChild(locationLabel);
  div.appendChild(locationInput);
  div.appendChild(baitLabel);
  div.appendChild(baitInput);
  div.appendChild(labelCaptureTime);
  div.appendChild(inputCaptureTime);
  div.appendChild(btnUpdate);
  div.appendChild(btnDelete);

  return div;
}
//CREATE
async function onCreate(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let userToken = JSON.parse(userInfo).token;
  let information = [...formData.entries()].reduce(
    (a, [key, value]) => Object.assign(a, { [key]: value }),
    {}
  );
  try {
    let empty = Object.values(information).some((x) => x == '');
    if (empty) {
      throw new Error('All Fileds are required!');
    }
    let response = await fetch('http://localhost:3030/data/catches', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userToken,
      },
      body: JSON.stringify(information),
    });
    if (response.ok != true) {
      let error = await response.json();
      throw new Error(error.message);
    }
    let res = await response.json();
    e.target.reset();
    onLoad();
  } catch (error) {
    alert(error);
  }
}

//Logout function
function logout() {
  localStorage.removeItem('userInfo');
  window.location = './index.html';
}
