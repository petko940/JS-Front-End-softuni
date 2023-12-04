// window.addEventListener('load', solve);

// function solve() {
//     let articleId = 1;

//     const fields = {
//         title: document.getElementById('title'),
//         description: document.getElementById('description'),
//         label: document.getElementById('label'),
//         points: document.getElementById('points'),
//         assignee: document.getElementById('assignee')
//     }

//     const sections = {   // this write in html
//         tasks: document.getElementById('tasks-section'),
//         points: document.getElementById('total-sprint-points')
//     }

//     const createBtn = document.getElementById('create-task-btn');
//     createBtn.addEventListener('click', onClickHandler);

//     const deleteBtn = document.getElementById('delete-task-btn');
//     deleteBtn.addEventListener('click', onClickHandler);


//     const priorityStyles = {
//         "Feature": {
//             icon: "&#8865;",
//             klass: "feature"
//         },
//         "Low Priority Bug": {
//             icon: "&#9737;",
//             klass: "low-priority"
//         },
//         "High Priority Bug": {
//             icon: "&#9888;",
//             klass: "high-priority"
//         }
//     }

//     const resetFields = () => {
//         Object.values(fields).forEach(element => {
//             element.value = '';
//         });
//     }

//     function createElement(
//         type,
//         textContent = "",
//         klass = [],
//         id = "",
//         value = "",
//         listener = "") {
//         const element = document.createElement(type);
//         if (textContent) {
//             element.textContent = textContent;
//         }

//         if (klass.length) {
//             element.classList.add(...klass);
//         }

//         if (id) {
//             element.id = id;
//         }

//         if (value) {
//             element.value = value;
//         }

//         if (listener) {
//             element.addEventListener('click', listener);
//         }

//         return element;
//     }

//     function onClickHandler(event) {
//         const handlers = {
//             "create task": create,
//             "delete": editTask,  // write delete
//             "delete task": deleteTask,
//         }

//         const buttonName = event.target.type === "button"
//             ? event.target.value.toLowerCase()
//             : event.target.textContent.toLowerCase()

//         handlers[buttonName](event);
//     }

//     function create(event) {
//         if (Object.values(fields).some(x => x.value === '')) {
//             return;
//         }

//         const article = createElement('article', "", ["task-card"], `task-${articleId}`);
//         let labelIcon = priorityStyles[fields.label.value].icon;

//         const labelKlass = priorityStyles[fields.label.value].klass;
//         let featureDiv = (createElement('div', "", ["task-card-label", labelKlass]));
//         featureDiv.innerHTML = `${fields.label.value} ${labelIcon}`;
//         article.appendChild(featureDiv);
//         article.appendChild(createElement('h3', fields.title.value, ["task-card-title"]));
//         article.appendChild(createElement('p', fields.description.value, ["task-card-description"]));
//         article.appendChild(createElement('div', `Estimated at ${fields.points.value} pts`, ["task-card-points"]));
//         article.appendChild(createElement('div', `Assigned to: ${fields.assignee.value}`, ["task-card-assignee"]));

//         const divButtons = createElement('div', "", ["task-card-actions"]);
//         divButtons.appendChild(createElement('button', "Delete", [], "", "", onClickHandler))
//         article.appendChild(divButtons);

//         sections.tasks.appendChild(article);
//         changePoints("add", fields.points.value);
//         resetFields();
//         articleId++;
//     }

//     function changePoints(command, value) {
//         let text = sections.points.textContent.trim();
//         let regex = /\d+/;
//         let totalPoints = Number(text.match(regex));

//         if (command === 'add') {
//             totalPoints += Number(value);
//         } else {
//             totalPoints -= Number(value);
//         }

//         sections.points.textContent = `Total Points ${totalPoints}pts`;
//     }

//     function editTask(event) {
//         createBtn.disabled = true;
//         deleteBtn.disabled = false;

//         const article = event.target.parentElement.parentElement;
//         const [label, title, description, points, assignee, _] = article.children;

//         document.getElementById("task-id").value = article.id;

//         fields.label.value = label.textContent.split(' ')[0];
//         fields.title.value = title.textContent;
//         fields.description.value = description.textContent;
//         fields.points.value = points.textContent.split(' ')[2];
//         fields.assignee.value = assignee.textContent.split("Assigned to: ")[1];

//         Object.values(fields).forEach(element => {
//             element.disabled = true
//         });

//     }

//     function deleteTask(event) {
//         const [...articles] = Array.from(sections.tasks.querySelectorAll('article'));
//         const deleteArticleID = document.getElementById("task-id").value;
//         articles.forEach(article => {
//             if (article.id === deleteArticleID) {
//                 changePoints("subtract", fields.points.value);
//                 article.remove();
//             }
//         })

//         createBtn.disabled = false;
//         deleteBtn.disabled = true;

//         Object.values(fields).forEach(element => {
//             element.value = '';
//             element.disabled = false
//         });

//     }

// }


window.addEventListener('load', solve);

function solve() {

    let taskNumber = 1;

    const createTaskBtn = document.getElementById('create-task-btn');
    createTaskBtn.addEventListener('click', createTask);
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    deleteTaskBtn.addEventListener('click', deleteTask);

    const sectionTasks = document.getElementById('tasks-section');

    let totalPoints = 0;
    const totalSprintPoints = document.getElementById('total-sprint-points');
    totalSprintPoints.textContent = 'Total Points ' + totalPoints + ' pts';

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const label = document.getElementById('label');
    const points = document.getElementById('points');
    const assignee = document.getElementById('assignee');


    const hiddenTaskId = document.getElementById('task-id');

    function createTask(e) {
        e.preventDefault();

        if (title.value === '' || description.value === '' || label.value === '' || points.value === '' || assignee.value === '') {
            return;
        }

        const article = document.createElement('article');
        article.id = 'task-' + taskNumber;
        article.className = 'task-card';
        hiddenTaskId.value = article.id;


        const features = {
            'Feature': ['&#8865', 'feature', 'Feature'],
            'Low Priority Bug': ['&#9737', "low-priority", 'Low Priority Bug'],
            'High Priority Bug': ['&#9888', "high-priority", 'High Priority Bug'],
        }

        const feature = document.createElement('div');
        feature.classList.add('task-card-label');
        feature.classList.add(features[label.value][1]);
        feature.innerHTML = features[label.value][2] + ' ' + features[label.value][0];

        const h3 = document.createElement('h3');
        h3.className = 'task-card-title';
        h3.textContent = title.value;

        const p = document.createElement('p');
        p.className = 'task-card-description';
        p.textContent = description.value;

        const div2 = document.createElement('div');
        div2.className = 'task-card-points';
        div2.textContent = 'Estimated at ' + points.value + ' pts';
        totalPoints += Number(points.value);
        totalSprintPoints.textContent = 'Total Points ' + totalPoints + ' pts';

        const div3 = document.createElement('div');
        div3.className = 'task-card-assignee';
        div3.textContent = 'Assigned to: ' + assignee.value;

        const divButton = document.createElement('div');
        divButton.className = 'task-card-actions';

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', loadConfirmDelete);


        article.appendChild(feature);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(div2);
        article.appendChild(div3);
        article.appendChild(divButton);

        divButton.appendChild(button);

        sectionTasks.appendChild(article);


        title.value = '';
        description.value = '';
        label.value = '';
        points.value = '';
        assignee.value = '';

        taskNumber++;

        hiddenTaskId.value = '';
        console.log(article.id);
    }


    function loadConfirmDelete(e) {
        createTaskBtn.disabled = true;
        deleteTaskBtn.disabled = false;

        const article = e.currentTarget.parentElement.parentElement;

        const tText = article.children[1].textContent;
        const dText = article.children[2].textContent;
        const featureText = article.children[0].textContent.split(' ')[0];
        const pText = article.children[3].textContent.split(' ')[2];
        const aText = article.children[4].textContent.split('Assigned to: ')[1];

        title.value = tText;
        title.disabled = true;
        description.value = dText;
        description.disabled = true;
        label.value = featureText;
        label.disabled = true;
        points.value = pText;
        points.disabled = true;
        assignee.value = aText;
        assignee.disabled = true;

        hiddenTaskId.value = article.id;
    }

    function deleteTask() {
        const taskId = hiddenTaskId.value;
        const taskElement = document.getElementById(taskId);
    
        // Extract estimation points from the task card
        const estimationPointsText = taskElement.querySelector('.task-card-points').textContent;
        const deletedPoints = Number(estimationPointsText.split(' ')[3]);
    
        // Subtract the estimation points of the deleted task from total points
        totalPoints -= deletedPoints;
        totalSprintPoints.textContent = 'Total Points ' + totalPoints + ' pts';
    
        // Remove the element from the DOM
        taskElement.remove();
    
        // Clear out all fields
        title.value = '';
        description.value = '';
        label.value = '';
        points.value = '';
        assignee.value = '';
    
        // Enable input fields and buttons
        title.disabled = false;
        description.disabled = false;
        label.disabled = false;
        points.disabled = false;
        assignee.disabled = false;
        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;
    
        hiddenTaskId.value = '';
    }
    
}
