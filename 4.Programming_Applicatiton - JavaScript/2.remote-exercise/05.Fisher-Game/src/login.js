window.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', onLogin);
});

async function onLogin(ev) {
  ev.preventDefault();
  let formData = new FormData(ev.target);
  let email = formData.get('email');
  let password = formData.get('password');

  try {
    let res = await fetch('http://localhost:3030/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok != true) {
      let error = await res.json();
      throw new Error(error.message);
    }

    let information = await res.json();
    let userInfo = {
      id: information._id,
      email: information.email,
      token: information.accessToken,
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location = './index.html';
  } catch (err) {
    alert(err.message);
  }
}
