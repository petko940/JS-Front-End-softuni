window.addEventListener("load", solve);

function solve() {

    data = {
        'first-name': '',
        'last-name': '',
        'age': '',
        'story-title': '',
        'genre': '',
        'story': ''
    }

    const publishButton = document.getElementById('form-btn');
    publishButton.addEventListener('click', publish);

    const previewList = document.getElementById('preview-list');


    function publish(e) {
        e.preventDefault();

        const inputs = Array.from(document.querySelectorAll('input'));
        const textArea = document.getElementById('story');

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const age = document.getElementById('age');
        const storyTitle = document.getElementById('story-title');
        const genre = document.getElementById('genre');

        if (firstName.value.trim() === '' || lastName.value.trim() === '' || age.value.trim() === '' || storyTitle.value.trim() === '') {
            return;
        }

        if (textArea.value.trim() === '') {
            return;
        }

        data['first-name'] = firstName.value;
        data['last-name'] = lastName.value;
        data['age'] = age.value;
        data['story-title'] = storyTitle.value;
        data['genre'] = genre.value;
        data['story'] = textArea.value;


        const li = document.createElement('li');
        li.className = 'story-info';

        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');

        const buttonSave = document.createElement('button');
        buttonSave.className = 'save-btn';
        buttonSave.addEventListener('click', save);

        const buttonEdit = document.createElement('button');
        buttonEdit.className = 'edit-btn';
        buttonEdit.addEventListener('click', edit);

        const buttonDelete = document.createElement('button');
        buttonDelete.className = 'delete-btn';
        buttonDelete.addEventListener('click', deleteStory);

        h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
        p1.textContent = `Age: ${age.value}`;
        p2.textContent = `Title: ${storyTitle.value}`;
        p3.textContent = `Genre: ${genre.value}`;
        p4.textContent = textArea.value;

        buttonSave.textContent = 'Save Story';
        buttonEdit.textContent = 'Edit Story';
        buttonDelete.textContent = 'Delete';

        // article.append(h4, p1, p2, p3, p4);
        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        li.appendChild(article);
        li.appendChild(buttonSave);
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelete);

        previewList.appendChild(li);

        publishButton.disabled = true;

        firstName.value = '';
        lastName.value = '';
        age.value = '';
        storyTitle.value = '';
        genre.value = '';
        textArea.value = '';

    }

    function edit(e) {
        publishButton.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const age = document.getElementById('age');
        const storyTitle = document.getElementById('story-title');
        const genre = document.getElementById('genre');

        firstName.value = data['first-name'];
        lastName.value = data['last-name'];
        age.value = data['age'];
        storyTitle.value = data['story-title'];
        genre.value = data['genre'];

        const textArea = document.getElementById('story');
        textArea.value = data['story'];

    }

    function save() {
        const divMain = document.getElementById('main');
        divMain.innerHTML = '';

        const h1 = document.createElement('h1');
        h1.textContent = 'Your scary story is saved!';

        divMain.appendChild(h1);
    }

    function deleteStory(e) {
        const li = e.currentTarget.parentElement;
        li.remove();

        publishButton.disabled = false;

    }
}
