function create(words) {

    const content = document.getElementById('content');

    for (const word of words) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = word;
        p.style.display = 'none';
        div.appendChild(p);
        content.appendChild(div);

        div.addEventListener('click', onClick);
    }

    function onClick(e) {

        const p = e.target.children[0];
        console.log(p);
        p.style.display = '';

    }

}