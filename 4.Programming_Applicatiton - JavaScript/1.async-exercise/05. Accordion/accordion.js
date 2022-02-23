function factory(tag, className = '', content = '') {
  let tagg = document.createElement(tag);
  tagg.className = className;
  tagg.textContent = content;


  return tagg;
}


function template({ _id, title }) {
  let card = factory('div', 'accordion');
  let hDiv = factory('div', 'head');
  let spanTitle = factory('span', '', title);
  let button = factory('button', 'button', 'More');
  let eDiv = factory('div', 'extra');
  eDiv.style.display = 'none';
  let textParagraph = factory('p');
  button.id = _id;


  hDiv.append(spanTitle, button);
  eDiv.appendChild(textParagraph);
  card.append(hDiv, eDiv);


  button.addEventListener('click', async () => {
    if (eDiv.style.display === 'none') {
      let data = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`
      );

      let desData = await data.json();
      button.textContent = 'Less';
      eDiv.style.display = 'block';

      textParagraph.textContent = desData.content;
    } else {
      button.textContent = 'More';
      eDiv.style.display = 'none';
    }
  });

  return card;
}



async function solution() {
  let output = document.getElementById('main');
  let titles = await fetch(
    'http://localhost:3030/jsonstore/advanced/articles/list'
  );

  let desTitles = await titles.json();


  desTitles.forEach((x) => output.appendChild(template(x)));
}


document.addEventListener('DOMContentLoaded', solution);
