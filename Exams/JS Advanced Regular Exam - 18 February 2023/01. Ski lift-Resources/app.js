window.addEventListener('load', solve);

function solve() {
    let data = {
        'first-name': '',
        'last-name': '',
        'people-count': '',
        'from-date': '',
        'days-count': '',
    }

    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStep);

    const inputFirstName = document.getElementById('first-name');
    const inputLastName = document.getElementById('last-name');
    const inputPeopleCount = document.getElementById('people-count');
    const inputFromDate = document.getElementById('from-date');
    const inputDaysCount = document.getElementById('days-count');

    const ticketInfoListUL = document.getElementsByClassName('ticket-info-list')[0];

    const confirmTicketUL = document.getElementsByClassName('confirm-ticket')[0];


    function nextStep(e) {
        e.preventDefault();

        if (inputFirstName.value === '' || inputLastName.value === '' || inputPeopleCount.value === '' || inputFromDate.value === '' || inputDaysCount.value === '') {
            return;
        }

        data['first-name'] = inputFirstName.value;
        data['last-name'] = inputLastName.value;
        data['people-count'] = inputPeopleCount.value;
        data['from-date'] = inputFromDate.value;
        data['days-count'] = inputDaysCount.value;

        const li = document.createElement('li');
        li.classList.add('ticket');

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${inputFirstName.value} ${inputLastName.value}`;

        const p1 = document.createElement('p');
        p1.textContent = `From date: ${inputFromDate.value}`;

        const p2 = document.createElement('p');
        p2.textContent = `For ${inputDaysCount.value} days`;

        const p3 = document.createElement('p');
        p3.textContent = `For ${inputPeopleCount.value} people`;

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueFunc);


        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        ticketInfoListUL.appendChild(li);

        inputFirstName.value = '';
        inputLastName.value = '';
        inputPeopleCount.value = '';
        inputFromDate.value = '';
        inputDaysCount.value = '';

        nextStepBtn.disabled = true;

    }

    function edit(e) {

        const li = e.target.parentElement;
        li.remove();

        nextStepBtn.disabled = false;

        inputFirstName.value = data['first-name'];
        inputLastName.value = data['last-name'];
        inputPeopleCount.value = data['people-count'];
        inputFromDate.value = data['from-date'];
        inputDaysCount.value = data['days-count'];

    }

    function continueFunc(e) {

        const oldLi = e.target.parentElement;
        oldLi.remove();

        const li = document.createElement('li');
        li.classList.add('ticket-content');

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${data['first-name']} ${data['last-name']}`;

        const p1 = document.createElement('p');
        p1.textContent = `From date: ${data['from-date']}`;

        const p2 = document.createElement('p');
        p2.textContent = `For ${data['days-count']} days`;

        const p3 = document.createElement('p');
        p3.textContent = `For ${data['people-count']} people`;

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirm);

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);


        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        confirmTicketUL.appendChild(li);


    }

    function cancel(e) {

        const li = e.target.parentElement;
        li.remove();

        nextStepBtn.disabled = false;

    }

    function confirm(e) {

        const divMain = document.getElementById('main');
        divMain.remove();

        const h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = "Thank you, have a nice day!";

        const button = document.createElement('button');
        button.id = 'back-btn';
        button.textContent = 'Back';
        button.addEventListener('click', () => {
            window.location.reload();
        })

        document.body.appendChild(h1);
        document.body.appendChild(button);

    }

}






