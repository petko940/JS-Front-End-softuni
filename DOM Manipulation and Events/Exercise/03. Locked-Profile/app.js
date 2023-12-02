function lockedProfile() {

    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(element => {
        element.addEventListener('click', showBtn);
    })

    function showBtn(e) {
        let btn = e.target;
        let profile = btn.parentElement;

        let radioUnlocked = profile.children[4];
        let addInfo = profile.children[9];

        if (!radioUnlocked.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            addInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else {
            addInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }

    }

}