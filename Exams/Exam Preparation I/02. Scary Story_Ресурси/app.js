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

        for (const input of inputs) {
            if (input.id === 'form-btn') {
                input.value = 'Publish';
            } else if (input.value.trim() === '') {  // Trim whitespace and check for emptiness
                return;
            }
        }
        
        if (textArea.value.trim() === '') {
            return;
        }

        data['first-name'] = inputs[0].value;
        data['last-name'] = inputs[1].value;
        data['age'] = inputs[2].value;
        data['story-title'] = inputs[3].value;
        data['genre'] = inputs[4].value;
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

        h4.textContent = `Name: ${inputs[0].value} ${inputs[1].value}`;
        p1.textContent = `Age: ${inputs[2].value}`;
        p2.textContent = `Title: ${inputs[3].value}`;
        p3.textContent = `Genre: ${inputs[4].value}`;
        p4.textContent = textArea.value;

        buttonSave.textContent = 'Save Story';
        buttonEdit.textContent = 'Edit Story';
        buttonDelete.textContent = 'Delete';


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

        for (const input of inputs) {
            if (input.id === 'form-btn') {
                continue;
            }
            input.value = '';
        }

        textArea.value = '';
        
    }

    function edit(e) {
        publishButton.disabled = false;

        const li = e.target.parentElement;
        li.remove();

        const inputs = Array.from(document.querySelectorAll('input'));
        for (const input of inputs) {
            if (input.id === 'form-btn') {
                continue;
            }
            input.value = data[input.id];
        }

        const textArea = document.getElementById('story');
        textArea.value = data['story'];

    }

    function save(e) {
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
