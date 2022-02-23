function attachEvents() {
  let cInputs = (arr) => arr.forEach((x) => (x.value = ''));

  let url = 'http://localhost:3030/jsonstore/messenger';

  document.querySelector(`#submit`).addEventListener('click', async () => {
    let author = document.querySelector(
      '#controls > input[type=text]:nth-child(2)'
    );
    let content = document.querySelector(
      '#controls > input[type=text]:nth-child(5)'
    );

    let raw = { author: author.value, content: content.value };

    let response = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(raw),
    });

    cInputs([author, content]);

    return response;
  });

  document.querySelector('#refresh').addEventListener('click', async () => {
    let information = await fetch(url);
    let deserialized = await information.json();

    document.querySelector(`#messages`).innerHTML = Object.values(deserialized)
      .map((x) => `${x.author}: ${x.content}`)
      .join('\n');
  });
}

attachEvents();
