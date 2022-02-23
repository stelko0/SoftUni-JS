import { viewDetails } from './details.js';

let main;
let section;
let container;


async function getMovies() {
  let res = await fetch('http://localhost:3030/data/movies');
  let information = await res.json();

  return information;
}



function moviePreview(movie) {
  let element = document.createElement('div');
  element.className = 'card mb-4';

  element.innerHTML = `<img class="card-img-top"
        src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
          </div>
            <div class="card-footer">
            <button id="${movie._id}" type="button" class="btn btn-info movieDetailsLink">Details</button>
            </div>
    </div>`;
  return element;
}




export function setupHome(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
  container = section.querySelector('.card-deck.d-flex.justify-content-center');

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('movieDetailsLink')) {
      viewDetails(e.target.id);
    }
  });
};



export async function showHome() {
  container.innerHTML = 'Loading&hellip;';
  main.innerHTML = '';
  main.appendChild(section);

  let movies = await getMovies();
  let cards = movies.map(moviePreview);

  let part = document.createDocumentFragment();
  cards.forEach((c) => part.appendChild(c));

  container.innerHTML = '';
  container.appendChild(part);
}
