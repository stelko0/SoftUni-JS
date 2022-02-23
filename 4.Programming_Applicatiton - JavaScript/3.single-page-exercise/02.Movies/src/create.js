import { viewDetails } from './details.js';

let main;
let section;


async function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let movie = {
    title: formData.get('title'),
    description: formData.get('description'),
    img: formData.get('imageUrl'),
  };

  if (movie.title == '' || movie.description == '' || movie.img == '') {
    return alert('All field are required!');
  }

  let res = await fetch('http://localhost:3030/data/movies', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': sessionStorage.getItem('authToken'),
    },
    body: JSON.stringify(movie),
  });

  if (res.ok) {
    let movie = await res.json();
    viewDetails(movie._id);
  } else {
    let error = await res.json();
    alert(error.message);
  }
}


export function setCreate(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  let form = section.querySelector('form').addEventListener('submit', onSubmit);
};



export async function viewCreate() {
  main.innerHTML = '';
  main.appendChild(section);
};
