import { loadTopic } from './topic.js';

export async function loadHome() {
  let main = document.querySelector('main');
  let divNewTopic = document.querySelector('.new-topic-border');

  let response = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/posts'
  );
  let information = await response.json();

  main.innerHTML = '';

  let part = document.createDocumentFragment();
  Object.values(information)
    .map(crreateDiv)
    .forEach((d) => part.appendChild(d));

  main.appendChild(divNewTopic);
  main.appendChild(part);
}







function crreateDiv(post) {
  let divTopic = document.createElement('div');
  divTopic.className = 'topic-container';
  divTopic.innerHTML = `<div class="topic-name-wrapper">
    <div class="topic-name">
    <input type="hidden" id="inputId" value="${post._id}">
        <a href="#" class="normal">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
            <p>Date: <time>${post.time}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>
        </div>
    </div>
    </div>`;

  divTopic.addEventListener('click', (event) => {
    if (event.target.tagName == 'H2') {
      let id =
        event.target.parentNode.parentNode.querySelector('#inputId').value;
      loadTopic(id);
    }
  });

  return divTopic;
};
