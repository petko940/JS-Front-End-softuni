function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadTasks);

    const taskTitleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description')
    const addTaskBtn = document.getElementById('create-task-btn');
    addTaskBtn.addEventListener('click', addTask)

    const toDo = document.querySelector('#todo-section .task-list')
    const inProgress = document.querySelector('#in-progress-section .task-list')
    const codeReview = document.querySelector('#code-review-section .task-list')
    const done = document.querySelector('#done-section .task-list')


    async function loadTasks() {

        const response = await fetch(baseUrl);
        const data = await response.json();

        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        codeReview.innerHTML = '';
        done.innerHTML = '';

        Object.values(data).forEach(element => {
            const li = document.createElement('li');
            li.classList.add('task')
            li.id = element._id;

            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const button = document.createElement('button');

            h3.textContent = element.title;
            p.textContent = element.description;

            li.appendChild(h3)
            li.appendChild(p)
            li.appendChild(button)


            if (element.status === "ToDo") {
                toDo.appendChild(li);
                button.textContent = "Move to In Progress"
                button.addEventListener('click', moveTask)

            } else if (element.status === "In Progress") {
                inProgress.appendChild(li);
                button.textContent = 'Move to Code Review'
                button.addEventListener('click', moveTask)

            } else if (element.status === "Code Review") {
                codeReview.appendChild(li);
                button.textContent = "Move to Done"
                button.addEventListener('click', moveTask)

            } else if (element.status === "Done") {
                done.appendChild(li);
                button.textContent = "Close";
                button.addEventListener('click', deleteTask)
            }

        });

    }

    async function addTask() {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: taskTitleInput.value,
                description: descriptionInput.value,
                status: "ToDo"
            })
        }

        taskTitleInput.value = '';
        descriptionInput.value = '';

        await fetch(baseUrl, options)

        await loadTasks()


    }

    async function moveTask(e) {

        let btnName = e.target.textContent.split(' ');
        btnName = btnName[btnName.length - 1];

        const statusMap = {
            "Progress": "In Progress",
            "Review": "Code Review",
            "Done": "Done"
        }

        const status = statusMap[btnName];
        const liID = e.target.parentElement.id;

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status,
            })
        }

        await fetch(baseUrl + liID, options);

        await loadTasks()
    }

    async function deleteTask(e) {

        const liID = e.target.parentElement.id;

        const options = {
            method: "DELETE",
        }

        await fetch(baseUrl + liID, options);

        await loadTasks()
       
    }

}

attachEvents();
