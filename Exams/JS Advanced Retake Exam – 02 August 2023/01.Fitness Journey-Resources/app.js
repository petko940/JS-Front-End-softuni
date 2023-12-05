window.addEventListener('load', solve);

function solve() {

    const fields = {
        'name': '',
        'email': '',
        'contact-number': '',
        'class-type': '',
        'class-time': '',
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    const previewLI = document.getElementsByClassName('class-info')[0];
    const continueLI = document.getElementsByClassName('confirm-class')[0];

    function next(e) {
        e.preventDefault();

        fields['name'] = document.getElementById('name').value;
        fields['email'] = document.getElementById('email').value;
        fields['contact-number'] = document.getElementById('contact-number').value;
        fields['class-type'] = document.getElementById('class-type').value;
        fields['class-time'] = document.getElementById('class-time').value;

        if (fields['name'] === '' || fields['email'] === '' || fields['contact-number'] === '' || fields['class-type'] === '' || fields['class-time'] === '') {
            return;
        }

        const li = document.createElement('li');
        li.classList.add('info-item');

        const article = document.createElement('article');
        article.classList.add('personal-info');

        const p1 = document.createElement('p');
        p1.textContent = fields['name'];

        const p2 = document.createElement('p');
        p2.textContent = fields['email'];

        const p3 = document.createElement('p');
        p3.textContent = fields['contact-number'];

        const p4 = document.createElement('p');
        p4.textContent = fields['class-type'];

        const p5 = document.createElement('p');
        p5.textContent = fields['class-time'];

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-btn');
        buttonEdit.textContent = 'Edit';
        buttonEdit.addEventListener('click', edit);

        const buttonContinue = document.createElement('button');
        buttonContinue.classList.add('continue-btn');
        buttonContinue.textContent = 'Continue';
        buttonContinue.addEventListener('click', continueBtn);

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        article.appendChild(p5);

        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);

        previewLI.appendChild(li);


        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contact-number').value = '';
        document.getElementById('class-type').value = '';
        document.getElementById('class-time').value = '';

        nextBtn.disabled = true;


    }

    function edit(e) {

        const li = e.target.parentElement;
        li.remove();

        document.getElementById('name').value = fields['name'];
        document.getElementById('email').value = fields['email'];
        document.getElementById('contact-number').value = fields['contact-number'];
        document.getElementById('class-type').value = fields['class-type'];
        document.getElementById('class-time').value = fields['class-time'];

        nextBtn.disabled = false;

    }

    function continueBtn(e) {

        const li = e.target.parentElement;
        li.remove();

        Array.from(li.querySelectorAll('button')).forEach(element => {
            element.remove();
        });

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancel);

        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirm);

        li.appendChild(cancelBtn);
        li.appendChild(confirmBtn);

        continueLI.appendChild(li);

    }

    function cancel(e) {

        const li = e.target.parentElement;
        li.remove();

        nextBtn.disabled = false;
    }

    function confirm(e) {

        const main = document.getElementById('main');
        main.remove();

        const h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"

        const button = document.createElement('button');
        button.id = 'done-btn';
        button.textContent = 'Done';
        button.addEventListener('click', () => {
            window.location.reload();
        });

        document.body.appendChild(h1);
        document.body.appendChild(button);

    }
}
