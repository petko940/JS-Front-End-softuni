window.addEventListener('load', solve);

function solve() {

    const fields = {
        'genre': [],
        'name': [],
        'author': [],
        'date': []
    }

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    const likeCount = document.querySelector('#total-likes p');

    const collectionOfSongs = document.getElementsByClassName('all-hits-container')[0];

    // const savedSongs = document.querySelector(".saved-container>.hits-info");

    const savedSongs = document.getElementsByClassName('saved-container')[0];

    function add(e) {
        e.preventDefault();

        const inputFields = Array.from(document.querySelectorAll('input'));

        for (const field of inputFields) {
            if (field.value === '') {
                return;
            }
        }

        const divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        const img = document.createElement('img');
        img.src = './static/img/img.png';

        const genreh2 = document.createElement('h2');
        genreh2.textContent = "Genre: " + inputFields[0].value;

        const nameh2 = document.createElement('h2');
        nameh2.textContent = "Name: " + inputFields[1].value;

        const authorh2 = document.createElement('h2');
        authorh2.textContent = "Author: " + inputFields[2].value;

        const dateh3 = document.createElement('h3');
        dateh3.textContent = "Date: " + inputFields[3].value;

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', save);

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', like);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        divHitsInfo.appendChild(img);
        divHitsInfo.appendChild(genreh2);
        divHitsInfo.appendChild(nameh2);
        divHitsInfo.appendChild(authorh2);
        divHitsInfo.appendChild(dateh3);
        divHitsInfo.appendChild(saveBtn);
        divHitsInfo.appendChild(likeBtn);
        divHitsInfo.appendChild(deleteBtn);

        collectionOfSongs.appendChild(divHitsInfo);

        for (const field of inputFields) {
            field.value = '';
        }

    }

    function like(e) {
        let newLike = parseInt(likeCount.textContent.split(': ')[1]) + 1;
        likeCount.textContent = `Total Likes: ${newLike}`;

        e.currentTarget.disabled = true;

    }

    function save(e) {

        let div = e.currentTarget.parentElement;
        div.remove();

        let buttons = Array.from(div.querySelectorAll('.save-btn, .like-btn'));
        console.log(buttons);
        buttons.forEach(button => button.remove());

        savedSongs.appendChild(div);
     
    }

    function deleteSong(e) {
        let div = e.currentTarget.parentElement;
        div.remove();
    }


}