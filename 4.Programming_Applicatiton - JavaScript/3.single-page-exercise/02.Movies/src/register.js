import { showHome } from './home.js';

let main;
let section;




async function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let email = formData.get('email');
  let password = formData.get('password');
  let rePass = formData.get('repeatPassword');

  if (email == '' || password == '') {
    return alert('All field are requeired!');
  } else if (password != rePass) {
    return alert("Password don't match!");
  }


  let res = await fetch('http://localhost:3030/users/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });


  if (res.ok) {
    event.target.reset();
    let data = await res.json();
    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);

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





export function setRegister(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;

  let form = section.querySelector('form');
  form.addEventListener('submit', onSubmit);
}

export async function showRegister() {
  main.innerHTML = '';
  main.appendChild(section);
}
