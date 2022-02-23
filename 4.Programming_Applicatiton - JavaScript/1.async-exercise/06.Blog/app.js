let cache = { posts: null, comments: null };
let url = 'http://localhost:3030/jsonstore/blog/';

function optionCreate({ id, title }) {
  let optionn = document.createElement('option');
  optionn.textContent = title;
  optionn.id = id;

  return optionn;
}

let cOutput = (...arr) => arr.forEach((x) => (x.innerHTML = ''));

async function getData(uri) {
  let data = await fetch(`${url}${uri}`);

  return await data.json();
}

async function loadInfo(type) {
  if (cache[type] === null) {
    let data = await getData(type);
    cache[type] = data;
  }
}

async function loadPosts() {
  await loadInfo('posts');
  let selectElement = document.getElementById(`posts`);
  selectElement.innerHTML = '';

  Object.values(cache.posts).forEach((x) =>
    selectElement.appendChild(optionCreate(x))
  );
}

async function viewPosts() {
  await loadInfo('comments');
  let html = {
    postTitle: document.querySelector(`#post-title`),
    postBody: document.querySelector(`#post-body`),
    postComments: document.querySelector(`#post-comments`),
    selectElement: document.querySelector(`#posts`),
  };
  
  let selected = html.selectElement.options[html.selectElement.selectedIndex];
  let comments = Object.values(cache.comments).filter(
    (x) => x.postId === selected.id
  );

  cOutput(html.postTitle, html.postBody, html.postComments);

  html.postTitle.textContent = selected.value;
  html.postBody.textContent = cache.posts[selected.id].body;
  html.postComments.innerHTML = comments
    .map((x) => `<li id=${x.id}>${x.text}</li>`)
    .join('');
}

function attachEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let btns = {
        btnViewPost: viewPosts,
        btnLoadPosts: loadPosts,
      };

      btns[e.target.id]();
    }
  });
}

attachEvents();
