import { loadHome } from './home.js';

let id;

export async function createTopic(event) {
  event.preventDefault();
  let form = event.target.parentNode.parentNode;

  let formInformation = new FormData(form);
  let title = formInformation.get('topicName');
  let username = formInformation.get('username');
  let postText = formInformation.get('postText');
  let time = new Date().toLocaleString();
  //

  if (title == '' || username == '' || postText == '') {
    return alert('All field must be filled!');
  }

  let res = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/posts',
    {
      method: 'post',
      headers: { 'Content-Type': 'applicaton/json' },
      body: JSON.stringify({ title, username, postText, time }),
    }
  );

  if (res.ok == false) {
    let error = await res.json();
    return alert(error.message);
  } else {
    loadHome();
  }

  form.reset();
}

export async function loadTopic(postId) {
  let main = document.querySelector('main');
  id = postId;
  let postResponse = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/posts/' + id
  );
  let data = await postResponse.json();
  let title = data.title;
  let time = data.time;
  let username = data.username;
  let postText = data.postText;

  let shard = document.createDocumentFragment();
  shard.appendChild(addTitle(title, time));

  shard.appendChild(createComment(username, time, postText));

  let comments = await loadComments(id);
  comments.forEach((c) => shard.appendChild(c));

  shard.appendChild(addCommentSection());

  main.innerHTML = '';
  main.appendChild(shard);
}

function addTitle(title, time) {
  let topicDiv = document.createElement('div');
  topicDiv.className = 'topic-content';
  topicDiv.innerHTML = `
    <div class="theme-title">
      <div class="theme-name-wrapper">
       <div class="theme-name">
           <h2>${title}</h2>
           <p>Date: <time>${time}</time></p>
       </div>
   </div>
    </div>`;
  return topicDiv;
}

function createComment(username, time, text) {
  let commentDiv = document.createElement('div');
  commentDiv.className = 'comment';
  commentDiv.innerHTML = `
    <header class="header">
    <p><span>${username}</span> posted on <time>${time}</time></p>
    </header>
    <div class="comment-main">
    <div class="userdetails">
        <img src="./static/profile.png" alt="avatar">
    </div>
    <div class="post-content">
        <p>${text}</p>
    </div>
    </div>`;
  return commentDiv;
}

function addCommentSection() {
  let divComment = document.createElement('div');
  divComment.className = 'answer-comment';
  divComment.innerHTML = `
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>`;

  divComment.querySelector('form').addEventListener('submit', onSubmit);

  return divComment;
}

async function onSubmit(event) {
  event.preventDefault();

  let formData = new FormData(event.target);
  let text = formData.get('postText');
  let username = formData.get('username');
  let time = new Date().toLocaleString();

  let res = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/comments',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId: id, text, username, time }),
    }
  );



  if (res.ok == false) {
    let error = await res.json();
    return alert(error.message);
  } else {
    loadTopic(id);
  };
};



async function loadComments(id) {
  let commentRes = await fetch(
    'http://localhost:3030/jsonstore/collections/myboard/comments'
  );
  let allComments = await commentRes.json();
  let comments = Object.values(allComments)
    .filter((x) => x.postId == id)
    .map((c) => createComment(c.username, c.time, c.text));
  return comments;
};
