function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');

    if (btn.textContent === "More") {
        btn.textContent = "Less"
        text.style.display = 'block'
    } else {
        btn.textContent = "More"
        text.style.display = "none"
    }

}