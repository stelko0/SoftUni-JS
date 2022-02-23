import { e } from './dom.js';
import { showHome } from './home.js';
import { showEdit } from './edit.js';

let main;
let section;

async function getLikesByMovie(id) {
  let res = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
  );
  let information = await res.json();
  return information;
}



async function getOwnLIkesByMovie(id) {
  let userId = sessionStorage.getItem('userId');
  let res = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`
  );
  let information = await res.json();
  return information;
}



async function getMovieBy(id) {
  let res = await fetch('http://localhost:3030/data/movies/' + id);
  let information = await res.json();
  return information;
}




function newMovieCard(movie, likes, ownLikes) {
  // Control
  let ctrl = e(
    'div',
    { className: 'col-md-4 text-center' },
    e('h3', { className: 'my-3' }, 'Movie Description'),
    e('p', {}, movie.description)
  );

  let userId = sessionStorage.getItem('userId');
  if (userId != null) {
    if (userId == movie._ownerId) {
      ctrl.appendChild(
        e(
          'a',
          {
            className: 'btn btn-danger',
            href: '#',
            onClick: (e) => onDelete(e, movie._id),
          },
          'Delete'
        )
      );

      ctrl.appendChild(
        e(
          'a',
          {
            className: 'btn btn-warning',
            href: '#',
            onClick: () => showEdit(movie._id),
          },
          'Edit'
        )
      );
    } else if (ownLikes.length == 0) {
      ctrl.appendChild(
        e(
          'a',
          { className: 'btn btn-primary', href: '#', onClick: likeMovie },
          'Like'
        )
      );
    }
  }

  let spanLikes = e(
    'span',
    { className: 'enrolled-span' },
    likes + ' like' + (likes == 1 ? '' : 's')
  );
  ctrl.appendChild(spanLikes);



  let divElement = document.createElement('div');
  divElement.className = 'container';



  divElement.appendChild(
    e(
      'div',
      { className: 'row bg-light text-dark' },
      e('h1', {}, `Movie title: ${movie.title}`),
      e(
        'div',
        { className: 'col-md-8' },
        e('img', { className: 'img-thumbnail', src: movie.img })
      ),
      ctrl
    )
  );



  async function likeMovie(ev) {
    let res = await fetch('http://localhost:3030/data/likes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('authToken'),
      },
      body: JSON.stringify({ movieId: movie._id }),
    });

    if (res.ok) {
      ev.target.remove();
      likes++;
      spanLikes.textContent = likes + ' like' + (likes == 1 ? '' : 's');
    }
  }

  return divElement;
}

async function onDelete(e, id) {
  
  e.preventDefault();


  let confirmeed = confirm('Are you sure you want to delete this movie ?');


  if (confirmeed) {
    let res = await fetch('http://localhost:3030/data/movies/' + id, {
      method: 'delete',
      headers: { 'X-Authorization': sessionStorage.getItem('authToken') },
    });


    if (res.ok) {
      alert('Movie deleted');
      showHome();
    } else {
      let error = await res.json();
      alert(error.message);
    }
  }
}


export function setDetails(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
}



export async function viewDetails(id) {
  section.innerHTML = '';
  main.innerHTML = '';
  main.appendChild(section);

  let [movie, likes, ownLike] = await Promise.all([
    getMovieBy(id),
    getLikesByMovie(id),
    getOwnLIkesByMovie(id),
  ]);

  
  let card = newMovieCard(movie, likes, ownLike);
  section.appendChild(card);
}
