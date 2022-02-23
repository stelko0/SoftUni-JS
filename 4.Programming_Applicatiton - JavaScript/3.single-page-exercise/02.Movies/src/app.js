import { setupHome, showHome } from './home.js';
import { setDetails } from './details.js';
import { showLogin, setLogin } from './login.js';
import { setRegister, showRegister } from './register.js';
import { setCreate, viewCreate } from './create.js';
import { setupEdit } from './edit.js';

let main = document.querySelector('main');



let hrefs = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
  createLink: viewCreate,
};



setupSection('home-page', setupHome);
setupSection('add-movie', setCreate);
setupSection('movie-details', setDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setLogin);
setupSection('form-sign-up', setRegister);

setupNavigation();

showHome();

function setupSection(sectionId, setup) {
  let section = document.getElementById(sectionId);
  setup(main, section);
}

function setupNavigation() {
  let email = sessionStorage.getItem('email');
  if (email != null) {
    document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
    [...document.querySelectorAll('nav .user')].forEach(
      (l) => (l.style.display = 'block')
    );
    [...document.querySelectorAll('nav .guest')].forEach(
      (l) => (l.style.display = 'none')
    );
  } else {
    [...document.querySelectorAll('nav .user')].forEach(
      (l) => (l.style.display = 'none')
    );
    [...document.querySelectorAll('nav .guest')].forEach(
      (l) => (l.style.display = 'block')
    );
  }

  document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
      let view = hrefs[event.target.id];
      if (typeof view == 'function') {
        event.preventDefault();
        view();
      }
    }
  });

  document.getElementById('createLink').addEventListener('click', (event) => {
    event.preventDefault();
    viewCreate();
  });

  document.getElementById('logoutBtn').addEventListener('click', logout);
}

async function logout() {
  let token = sessionStorage.getItem('authToken');
  let res = await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: { 'X-Authorization': token },
  });

  if (res.ok) {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');

    [...document.querySelectorAll('nav .user')].forEach(
      (l) => (l.style.display = 'none')
    );
    [...document.querySelectorAll('nav .guest')].forEach(
      (l) => (l.style.display = 'block')
    );

    showHome();
  } else {
    let error = await res.json();
    alert(error.message);
  }
}
