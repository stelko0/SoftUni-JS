function deleteByEmail() {
    let input = document.querySelector('input[name="email"]').value;
    let table = Array.from(document.querySelector('tbody').children);
    let deleted = false;
    for(let row of table){
        if(row.children[1].textContent == input){
            row.remove();
            deleted = true;
        }
    }
    if(deleted){
        document.getElementById('result').textContent = "Deleted."
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}