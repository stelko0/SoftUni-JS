function bookLibrary() {
  document.getElementById('loadBooks').addEventListener('click', loadAllBooks);

  document.getElementById('createForm').addEventListener('submit', createBook);

  document.querySelector('table').addEventListener('click', handleTableClick);

  document.getElementById('editForm').addEventListener('submit', updateBook);
}

bookLibrary();

async function request(url, options) {
  let response = await fetch(url, options);

  if (response.ok != true) {
    let error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }

  let data = await response.json();
  return data;
}

async function loadAllBooks() {
  let books = await request(
    'http://localhost:3030/jsonstore/collections/books'
  );

  let rows = Object.entries(books).map(createRow).join('');

  document.querySelector('body > table > tbody').innerHTML = rows;
}

function handleTableClick(event) {
  if (event.target.className == 'deleteBtn') {
    deleteBook(event.target.parentNode.parentNode.id);
  } else if (event.target.className == 'editBtn') {
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    loadBookForEditting(event.target.parentNode.parentNode.id);
  }
}

function createRow([id, book]) {
  return `<tr id="${id}"><td>${book.title}</td> <td>${book.author}</td> <td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td></tr>`;
}

async function createBook(event) {
  event.preventDefault();

  var formData = new FormData(event.target);

  let title = formData.get('title');
  let author = formData.get('author');

  if (title && author) {
    let book = { title: title, author: author };

    event.target.reset();

    await request('http://localhost:3030/jsonstore/collections/books', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    await loadAllBooks();
  }
}

async function updateBook(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  let id = formData.get('id');
  let title = formData.get('title');
  let author = formData.get('author');

  if (title && author) {
    let book = { title: title, author: author };

    event.target.reset();

    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    await loadAllBooks();
  }
}

async function deleteBook(id) {
  await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
    method: 'delete',
  });

  await loadAllBooks();
}

async function loadBookForEditting(bookId) {
  let book = await request(
    `http://localhost:3030/jsonstore/collections/books/${bookId}`
  );

  document.querySelector('#editForm [name="id"]').value = bookId;
  document.querySelector('#editForm [name="title"]').value = book.title;
  document.querySelector('#editForm [name="author"]').value = book.author;
}

function createElement(type, content, attributes = []) {
  let element = document.createElement(type);

  if (content) {
    element.textContent = content;
  }

  if (attributes.length > 0) {
    element.setAttribute(attributes[0], attributes[1]);
  }

  return element;
}
