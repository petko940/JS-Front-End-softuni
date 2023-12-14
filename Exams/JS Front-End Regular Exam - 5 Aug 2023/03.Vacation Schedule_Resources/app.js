// function exam() {

//     const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

//     const loadVacationsBtn = document.getElementById('load-vacations');
//     loadVacationsBtn.addEventListener('click', loadVacations);

//     const addVacationBtn = document.getElementById('add-vacation');
//     addVacationBtn.addEventListener('click', addVacation);

//     const editVacationBtn = document.getElementById('edit-vacation');
//     editVacationBtn.addEventListener('click', editedVacation);

//     const listVacations = document.getElementById('list');
//     listVacations.innerHTML = '';

//     const inputName = document.getElementById('name');
//     const inputNumberOfDays = document.getElementById('num-days');
//     const inputFromDate = document.getElementById('from-date');

//     let editID;

//     async function loadVacations() {
//         listVacations.innerHTML = '';

//         const response = await fetch(baseUrl);
//         const data = await response.json();

//         Object.values(data).forEach(element => {

//             const container = document.createElement('div');
//             container.classList.add('container');
//             container.id = element._id;

//             const h2 = document.createElement('h2');
//             h2.textContent = element.name;

//             const h3date = document.createElement('h3');
//             h3date.textContent = element.date;

//             const h3days = document.createElement('h3');
//             h3days.textContent = element.days;

//             const changeBtn = document.createElement('button');
//             changeBtn.classList.add('change-btn');
//             changeBtn.textContent = 'Change';
//             changeBtn.addEventListener('click', changeVacation);

//             const doneBtn = document.createElement('button');
//             doneBtn.classList.add('done-btn');
//             doneBtn.textContent = 'Done';
//             doneBtn.addEventListener('click', doneVacation);

//             container.appendChild(h2);
//             container.appendChild(h3date);
//             container.appendChild(h3days);
//             container.appendChild(changeBtn);
//             container.appendChild(doneBtn);

//             listVacations.appendChild(container);

//             editVacationBtn.setAttribute('disabled', 'true');

//         });

//     }

//     async function addVacation() {

//         if (inputName.value === '' || inputFromDate.value === '' || inputNumberOfDays.value === '') {
//             return;
//         }

//         const name = inputName.value;
//         const date = inputFromDate.value;
//         const days = inputNumberOfDays.value;

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name,
//                 date,
//                 days
//             })
//         }

//         await fetch(baseUrl, options);

//         await loadVacations();

//         inputName.value = '';
//         inputFromDate.value = '';
//         inputNumberOfDays.value = '';

//     }

//     function changeVacation(e) {

//         editID = e.target.parentElement.id;
//         const data = e.target.parentElement;
//         data.remove();

//         inputName.value = data.children[0].textContent;
//         inputFromDate.value = data.children[1].textContent;
//         inputNumberOfDays.value = data.children[2].textContent;

//         addVacationBtn.disabled = true;
//         editVacationBtn.removeAttribute('disabled');

//     }

//     async function editedVacation(e) {

//         const options = {
//             method: "PUT",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: inputName.value,
//                 date: inputFromDate.value,
//                 days: inputNumberOfDays.value
//             })
//         }

//         await fetch(baseUrl + editID, options);

//         await loadVacations();

//         inputName.value = '';
//         inputFromDate.value = '';
//         inputNumberOfDays.value = '';

//     }

//     async function doneVacation(e) {
//         const id = e.target.parentElement.id;
//         const options = {
//             method: 'DELETE',
//         }

//         await fetch(baseUrl + id, options);
//         await loadVacations();
//     }

// }

// exam();


const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const inputName = document.getElementById('name');
const inputDays = document.getElementById('num-days');
const inputDate = document.getElementById('from-date');

const loadVacations = document.getElementById('load-vacations');
loadVacations.addEventListener('click', load);

const listVacations = document.getElementById('list');
listVacations.innerHTML = '';

const addVacationBtn = document.getElementById('add-vacation');
addVacationBtn.addEventListener('click', add);
const editVacationBtn = document.getElementById('edit-vacation');
editVacationBtn.addEventListener('click', edit);

let editID;

async function load() {
    listVacations.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    Object.values(data).forEach(element => {

        const div = document.createElement('div');
        div.classList.add('container');
        div.id = element._id;

        const h2 = document.createElement('h2');
        h2.textContent = element.name;

        const h3date = document.createElement('h3');
        h3date.textContent = element.date;

        const h3days = document.createElement('h3');
        h3days.textContent = element.days;

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', fillInputs);

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', done);

        div.appendChild(h2);
        div.appendChild(h3date);
        div.appendChild(h3days);
        div.appendChild(changeBtn);
        div.appendChild(doneBtn);

        listVacations.appendChild(div);

    })

}

async function add(e) {
    e.preventDefault();

    if (inputName.value === '' || inputDate.value === '' || inputDays.value === '') {
        return;
    }

    const name = inputName.value;
    const date = inputDate.value;
    const days = inputDays.value;

    const options = {
        method: 'POST',
        body: JSON.stringify({
            name,
            date,
            days
        })
    }

    inputName.value = '';
    inputDate.value = '';
    inputDays.value = '';

    await fetch(baseUrl, options);
    await load();

}

function fillInputs(e) {

    const div = e.target.parentElement;
    editID = div.id;

    div.remove();

    inputName.value = div.children[0].textContent;
    inputDate.value = div.children[1].textContent;
    inputDays.value = div.children[2].textContent;

    addVacationBtn.disabled = true;
    editVacationBtn.disabled = false;

}

async function edit(e) {
    e.preventDefault();

    const options = {
        method: "PUT",
        body: JSON.stringify({
            name: inputName.value,
            days: inputDays.value,
            date: inputDate.value,
        })
    }

    inputName.value = '';
    inputDate.value = '';
    inputDays.value = '';

    await fetch(baseUrl + editID, options);
    await load();

}

async function done(e) {
    e.preventDefault();
    const id = e.target.parentElement.id;

    const options = {
        method: 'DELETE',
    }

    await fetch(baseUrl + id, options);
    await load();

}