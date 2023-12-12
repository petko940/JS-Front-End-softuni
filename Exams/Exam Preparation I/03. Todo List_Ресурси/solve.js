function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    const loadAllBtn = document.getElementById('load-button');
    loadAllBtn.addEventListener('click', loadAllTasks);

    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', addTask);

    const inputTitle = document.getElementById('title');

    const todoListUL = document.getElementById('todo-list')


    async function loadAllTasks(e) {
       
        e.preventDefault();

        todoListUL.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        Object.values(data).forEach(element => {
            addFaster(element);
        });
    }

    function addFaster(element) {
        const li = document.createElement('li');
        li.id = element._id;

        const span = document.createElement('span');
        span.textContent = element.name;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', removeTask);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editTask);

        li.appendChild(span);
        li.appendChild(removeBtn);
        li.appendChild(editBtn);

        todoListUL.appendChild(li);
    }

    async function loadAfterAdd() {
        todoListUL.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(element => {
            addFaster(element);
        });
    }

    async function addTask(e) {
        e.preventDefault();

        const name = inputTitle.value;

        if (name == '') {
            return;
        }

        inputTitle.value = '';

        const options = {
            method: 'POST',
            body: JSON.stringify({
                name
            })
        };

        await fetch(baseUrl, options);
        await loadAfterAdd();

    }

    async function removeTask(e) {
        
        const id = e.target.parentElement.id;

        const options = {
            method: 'DELETE'
        }

        await fetch(baseUrl + id, options);
        await loadAfterAdd();

    }

    function editTask(e) {

        const li = e.target.parentElement;

        const input = document.createElement('input');
        input.value = li.children[0].textContent;

        const editBtn = li.children[2];
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', submitEdit);

        li.replaceChild(input, li.children[0]);
        li.replaceChild(submitBtn, editBtn);

    }

    async function submitEdit(e) {

        const li = e.target.parentElement;
        const id = li.id;

        const name = li.children[0].value;

        const options = {
            method: 'PATCH',
            body: JSON.stringify({
                name
            })
        }

        await fetch(baseUrl + id, options);
        await loadAfterAdd();

    }

}



attachEvents();
