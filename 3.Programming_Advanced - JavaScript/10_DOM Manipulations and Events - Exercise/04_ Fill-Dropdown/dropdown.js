function addItem() {
    // Get elements from html
    let selectMenu = document.getElementById('menu');
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    // Create <option> </option> in <select> </select>
    let option = document.createElement('option');
    // if(inputText.value != null && inputValue != null){
        option.textContent = inputText.value;
        option.value = inputValue.value;
        selectMenu.appendChild(option);
        console.log(inputText.value + '|' + inputValue.value);
    // }
    
    // Clear fields
    inputText.value = "";
    inputValue.value = "";
}