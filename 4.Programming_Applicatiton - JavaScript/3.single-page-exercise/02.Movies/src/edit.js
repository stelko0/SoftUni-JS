import { viewDetails } from './details.js';

let main;
let section;

async function onSubmit(data) {
  let token = sessionStorage.getItem('authToken');
  try {
    let response = await fetch(
      'http://localhost:3030/data/movies/' + data.id,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': token,
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          img: data.imageUrl,
        }),
      }
    );

    if (response.ok) {
      viewDetails(data.id);
    } else {
      throw new Error(await response.json());
    }
  } catch (err) {
    console.error(err.message);
  }
}

async function getMovieById(id) {
  let res = await fetch('http://localhost:3030/data/movies/' + id);
  let movie = await res.json();

  return movie;
}

export function setupEdit(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  let form = section.querySelector('form');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    onSubmit(
      [...formData.entries()].reduce(
        (p, [k, v]) => Object.assign(p, { [k]: v }),
        {}
      )
    );
  });
}




export async function showEdit(id) {
  main.innerHTML = '';
  main.appendChild(section);

  let movie = await getMovieById(id);

  section.querySelector('[name="id"]').value = id;
  section.querySelector('[name="title"]').value = movie.title;
  section.querySelector('[name="description"]').value = movie.description;
  section.querySelector('[name="imageUrl"]').value = movie.img;
}
