import { showHome } from './home.js';

let main;
let section;

async function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let email = formData.get('email');
  let pass = formData.get('password');

  let res = await fetch('http://localhost:3030/users/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: pass }),
  });





  if (res.ok) {
    event.target.reset();
    let information = await res.json();
    sessionStorage.setItem('authToken', information.accessToken);
    sessionStorage.setItem('userId', information._id);
    sessionStorage.setItem('email', information.email);

    document.querySelector('#welcome-msg').textContent = `Welcome, ${email}`;



    [...document.querySelectorAll('nav .user')].forEach(
      (l) => (l.style.display = 'block')
    );


    [...document.querySelectorAll('nav .guest')].forEach(
      (l) => (l.style.display = 'none')
    );

    showHome();


  } else {
    let error = await res.json();
    alert(error.message);
  }
}




export function setLogin(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  let form = section.querySelector('form');
  form.addEventListener('submit', onSubmit);
}


//
export async function showLogin() {
  main.innerHTML = '';
  main.appendChild(section);
}

