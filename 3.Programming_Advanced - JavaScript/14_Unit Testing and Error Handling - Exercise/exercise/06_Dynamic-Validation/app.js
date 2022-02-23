function validate() {
    let inputField = document.getElementById('email');
    let regexMail = /(^[a-z]+@[a-z]+.[a-z]+$)/;
    inputField.addEventListener('change', () => {
        if (!regexMail.test(inputField.value)) {
            inputField.classList.add('error')
        } else {
            inputField.classList.remove('error');
        }
    });
}