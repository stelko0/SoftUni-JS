function addItem() {
    // Get text from input field
    let input = document.getElementById('newItemText');

    // Create 'li' element
    let li = document.createElement('li');

    // Set li text content from input field
    li.textContent = input.value;

    //Create Delete Button
    let btn = document.createElement('a');
    btn.textContent = '[Delete]';
    btn.href = "#";
    btn.addEventListener('click', remove);

    li.appendChild(btn);

    document.getElementById('items').appendChild(li);

    input.value = '';
    
    function remove(ev){
        const parent = ev.target.parentNode;
        parent.remove();
    }
}
