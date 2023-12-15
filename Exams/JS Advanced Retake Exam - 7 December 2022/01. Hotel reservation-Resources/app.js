window.addEventListener('load', solve);

function solve() {
    const data = {
        "first-name": '',
        "last-name": '',
        "date-in": '',
        "date-out": '',
        "people-count": '',
    };

    const inputFirstName = document.getElementById('first-name');
    const inputLastName = document.getElementById('last-name');
    const inputCheckIn = document.getElementById('date-in');
    const inputCheckOut = document.getElementById('date-out');
    const inputNumberPeople = document.getElementById('people-count');

    const dateIn = new Date(inputCheckIn.value);
    const dateOut = new Date(inputCheckOut.value);

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    const reservationInfo = document.getElementsByClassName('info-list')[0];
    const confirmReservation = document.getElementsByClassName('confirm-list')[0];

    const h1Verification = document.getElementById('verification');


    function next(e) {
        e.preventDefault();

        if (inputFirstName.value === '' ||
            inputLastName.value === '' ||
            inputCheckIn.value === '' ||
            inputCheckOut.value === '' ||
            inputNumberPeople.value === '' ||
            dateIn >= dateOut) {
            return;
        }

        data['first-name'] = inputFirstName.value;
        data['last-name'] = inputLastName.value;
        data['date-in'] = inputCheckIn.value;
        data['date-out'] = inputCheckOut.value;
        data['people-count'] = inputNumberPeople.value;

        const li = document.createElement('li');
        li.classList.add('reservation-content');

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${data['first-name']} ${data['last-name']}`;

        const p1 = document.createElement('p');
        p1.textContent = `From date: ${data['date-in']}`;

        const p2 = document.createElement('p');
        p2.textContent = `To date: ${data['date-out']}`;

        const p3 = document.createElement('p');
        p3.textContent = `For ${data['people-count']} people`;

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueReservation);


        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        reservationInfo.appendChild(li);

        inputFirstName.value = '';
        inputLastName.value = '';
        inputCheckIn.value = '';
        inputCheckOut.value = '';
        inputNumberPeople.value = '';

        nextBtn.disabled = true;

    }

    function edit(e) {
        e.preventDefault();

        const li = e.target.parentElement;
        li.remove();

        inputFirstName.value = data['first-name'];
        inputLastName.value = data['last-name'];
        inputCheckIn.value = data['date-in'];
        inputCheckOut.value = data['date-out'];
        inputNumberPeople.value = data['people-count'];

        nextBtn.disabled = false;
    }

    function continueReservation(e) {
        e.preventDefault();
        
        const li = e.target.parentElement;

        li.removeChild(li.children[1]);
        li.removeChild(li.children[1]);

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirm);

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);

        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        li.remove();

        confirmReservation.appendChild(li);

    }

    function confirm(e) {
        const li = e.target.parentElement;
        li.remove();

        nextBtn.disabled = false;

        h1Verification.className = 'reservation-confirmed';
        h1Verification.textContent = 'Confirmed.';
        
    }

    function cancel(e) {

        const li = e.target.parentElement;
        li.remove();

        nextBtn.disabled = false;

        h1Verification.className = 'reservation-cancelled';
        h1Verification.textContent = 'Cancelled.';

    }


}
