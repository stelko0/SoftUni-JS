function attachGradientEvents() {
    const gradient = document.getElementById('gradient').
    addEventListener('mousemove', onMove);
    let output = document.getElementById('result');

    function onMove(ev) {
        const box = ev.target;
        const offset = Math.floor((ev.offsetX / box.clientWidth) * 100);

        output.textContent = `${offset}%`
    }
}
