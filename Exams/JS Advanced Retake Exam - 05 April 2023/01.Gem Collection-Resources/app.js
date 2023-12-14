window.addEventListener("load", solve);

function solve() {
    const data = {
        'gem-name': '',
        'color': '',
        'carats': '',
        'price': '',
        'type': ''
    }

    const inputGemstone = document.getElementById('gem-name');
    const inputColor = document.getElementById('color');
    const inputCarats = document.getElementById('carats');
    const inputPrice = document.getElementById('price');
    const inputType = document.getElementById('type');

    const addGemBtn = document.getElementById('add-btn');
    addGemBtn.addEventListener('click', addGem);

    const previewList = document.getElementById('preview-list');
    const collection = document.getElementById('collection');


    function addGem(e) {
        e.preventDefault();

        const name = inputGemstone.value;
        const color = inputColor.value;
        const carats = Number(inputCarats.value);
        const price = Number(inputPrice.value);
        const type = inputType.value;

        data['gem-name'] = name;
        data['color'] = color;
        data['carats'] = carats;
        data['price'] = price;
        data['type'] = type;

        if (name === '' || color === '' || carats === '' || price === '' || type === '') {
            return;
        }

        const li = document.createElement('li');
        li.classList.add('gem-info');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = name;

        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${color}`;

        const pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${carats}`;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${price}$`;

        const pType = document.createElement('p');
        pType.textContent = `Type: ${type}`;

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save to Collection';
        saveBtn.addEventListener('click', saveInfo);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Information';
        editBtn.addEventListener('click', editInfo);

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelInfo);


        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);

        previewList.appendChild(li);


        inputGemstone.value = '';
        inputColor.value = '';
        inputCarats.value = '';
        inputPrice.value = '';
        inputType.value = '';

        addGemBtn.disabled = true;

    }

    function editInfo(e) {
        
        const li = e.target.parentElement;
        li.remove();

        inputGemstone.value = data['gem-name'];
        inputColor.value = data['color'];
        inputCarats.value = data['carats'];
        inputPrice.value = data['price'];
        inputType.value = data['type'];
        
        addGemBtn.disabled = false;

    }

    function saveInfo(e) {

        const li = e.target.parentElement;
        li.remove();

        const newLi = document.createElement('li');

        const p = document.createElement('p');
        p.classList.add('collection-item');
        p.textContent = `${data['gem-name']} - Color: ${data['color']}/ Carats: ${data['carats']}/ Price: ${data['price']}$/ Type: ${data['type']}`;

        newLi.appendChild(p);
        collection.appendChild(newLi);

        addGemBtn.disabled = false;

    }

    function cancelInfo(e) {

        const li = e.target.parentElement;
        li.remove();

        addGemBtn.disabled = false;

    }

}
