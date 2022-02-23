let cFields = (array) => array.forEach((x) => (x.value = ''));

function dataValid(data) {
  return data.every(([_, value]) => value !== '');
}

function displayStudents(studentsData) {
  let table = document.querySelector('#results > tbody');
  table.innerHTML = '';

  Object.values(studentsData).forEach((student) => {
    let tr = document.createElement('tr');

    Object.entries(student).forEach(([key, value]) => {
      let td = document.createElement('td');

      if (key !== '_id') {
        td.innerHTML = value;
        tr.appendChild(td);
      }
    });
    table.appendChild(tr);
  });
}

async function getStudents() {
  let res = await fetch(
    'http://localhost:3030/jsonstore/collections/students'
  );

  return await res.json();
}


async function studentPost(information) {
  let res = await fetch(
    'http://localhost:3030/jsonstore/collections/students',
    {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(information)),
    }
  );

  return await res.json();
}

document.addEventListener('submit', async (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  let information = [...formData.entries()];

  if (dataValid(information)) {
    await studentPost(information);
    displayStudents(await getStudents());
    cFields([
      ...document.querySelectorAll('#form > div.inputs > input[type=text]'),
    ]);
  }
});
