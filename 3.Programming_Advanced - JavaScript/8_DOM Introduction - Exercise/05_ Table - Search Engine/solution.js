function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const input = document.getElementById('searchField')
      let inputText = input.value.toLowerCase();

      let table = Array.from(document.querySelectorAll('tbody tr'));

      table.forEach((el) => {
         let text = el.textContent.toLowerCase();
            if(text.includes(inputText)){
               el.classList.add('select');
            } else {
               el.classList.remove('select');
            }
      })

      input.value = '';
   }
}