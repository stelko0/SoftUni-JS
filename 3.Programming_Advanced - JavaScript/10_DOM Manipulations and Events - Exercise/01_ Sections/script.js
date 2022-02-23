function create(words) {
   const content = document.getElementById('content');
   words.forEach((el) => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', clicked);
      content.appendChild(div);
   })

   function clicked(ev){
      ev.target.children[0].style.display = '';
   }
}