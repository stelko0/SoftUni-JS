function profileTemplate({ username, email, age }, id) {
  let card = document.createElement('div');
  card.className = 'profile';

  
  let button = document.createElement('button');
  button.innerText = 'Show more';



  card.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
    <label>Lock</label>
    <input type="radio" name="user${id}Locked" value="lock" checked="">
    <label>Unlock</label>
    <input type="radio" name="user${id}Locked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="user${id}Username" value=${username} disabled="" readonly="">
    <div id="user${id}HiddenFields">
    <hr>
    <label>Email:</label>
    <input type="email" name="user${id}Email" value=${email} disabled="" readonly="">
    <label>Age:</label>
    <input type="email" name="user${id}Age" value=${age} disabled="" readonly="">
    </div>`;



  button.addEventListener('click', () => {
    let checkBox = card.querySelector('input[type=radio]:checked');

    if (checkBox && checkBox.value === 'unlock') {
      if (button.innerText === 'Show more') {
        card.querySelector(`#user${id}HiddenFields`).style.display = 'block';
        button.textContent = 'Hide it';
      } else {
        card.querySelector(`#user${id}HiddenFields`).style.display = 'none';
        button.textContent = 'Show more';
      }
    }
  });

  card.appendChild(button);

  return card;
}



async function lockedProfile() {
  let data = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
  let dataPerPerson = await data.json();

  let main = document.querySelector('main');
  main.innerHTML = '';

  Object.values(dataPerPerson).forEach((a, b) =>
    main.appendChild(profileTemplate(a, b + 1))
  );
}
