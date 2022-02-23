function search() {
   const list = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;
   let count = 0;
   list.forEach((el) => { 
      if(el.innerHTML.includes(text)){
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         count++;
      } else {
         el.style.textDecoration = '';
         el.style.fontWeight = 'normal';
      }
   })

   document.getElementById('result').textContent = `${count} matches found`;
}
