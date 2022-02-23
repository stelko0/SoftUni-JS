import { createTopic } from './topic.js';
import { loadHome } from './home.js';

function addEvents() {
    document.querySelector('.public').addEventListener('click', createTopic);

    document.querySelector('.cancel').addEventListener('click', (ev) => {
        let form = ev.target.parentNode.parentNode;
        form.reset();
    });
}

loadHome();
addEvents();