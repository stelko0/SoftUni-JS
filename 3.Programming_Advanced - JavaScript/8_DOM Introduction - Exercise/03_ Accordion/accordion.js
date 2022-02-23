function toggle() {
    const btn = document.querySelector('.button');
    const extra = document.getElementById('extra');
    
    btn.textContent = btn.textContent == "More" ? "Less" : "More";
    extra.style.display =
        extra.style.display == "none" || extra.style.display == "" ?
            extra.style.display = "block" : extra.style.display = "none";
}