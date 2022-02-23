function addItem() {
    let input = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let item = document.createElement('li');
    item.textContent = input;
    list.appendChild(item)
}