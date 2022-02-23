let baseUrl = `http://localhost:3030/jsonstore/phonebook`;

function createLiElement({ person, phone, _id }) {
  let element = document.createElement('li');
  element.id = _id;
  element.innerHTML = `${person}: ${phone}`;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.className = 'remove';

  element.appendChild(deleteBtn);

  return element;
}

async function creatingData() {
  let [person, phone] = [
    document.querySelector('#person').value,
    document.querySelector('#phone').value,
  ];

  let res = await fetch(baseUrl, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ person, phone }),
  });

  return await res.json();
}

async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();

  return Object.values(data);
}

function displayData(data) {
  let output = document.querySelector('#phonebook');
  output.innerHTML = '';
  data.forEach((x) => output.appendChild(createLiElement(x)));
}

async function deletingData(element, id) {
  let res = await fetch(`${baseUrl}/${id}`, {
    method: 'delete',
  });

  element.outerHTML = '';
}

function addEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let actions = {
        btnLoad: async () => displayData(await getData(baseUrl)),
        btnCreate: async () => {
          await creatingData();
          displayData(await getData(baseUrl));
        },
        remove: () => deletingData(e.target.parentNode, e.target.parentNode.id),
      };

      e.target.id ? actions[e.target.id]() : actions[e.target.className]();
    }
  });
}

addEvents();
