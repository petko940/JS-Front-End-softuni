window.addEventListener('load', solve);

function solve() {

    const data = {
        'car-model': '',
        'car-year': '',
        'part-name': '',
        'part-number': '',
        'condition': '',
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    const infoListUL = document.getElementsByClassName('info-list')[0];
    const confirmListUL = document.getElementsByClassName('confirm-list')[0];

    function next(e) {
        e.preventDefault();

        data['car-model'] = document.getElementById('car-model').value;
        data['car-year'] = document.getElementById('car-year').value;
        data['part-name'] = document.getElementById('part-name').value;
        data['part-number'] = document.getElementById('part-number').value;
        data['condition'] = document.getElementById('condition').value;

        if (data['car-model'] === '' || data['car-year'] === '' || data['part-name'] === '' || data['part-number'] === '' || data['condition'] === '' || data['car-year'] < 1980 || data['car-year'] > 2023) {
            return;
        }

        // document.getElementById('complete-img').hidden = true;
        document.getElementById('complete-text').value = '';

        const li = document.createElement('li');
        li.classList.add('part-content');

        const article = document.createElement('article');
        const p1 = document.createElement('p');
        p1.textContent = "Car Model: " + data['car-model'];

        const p2 = document.createElement('p');
        p2.textContent = "Car Year: " + data['car-year'];

        const p3 = document.createElement('p');
        p3.textContent = "Part Name: " + data['part-name'];

        const p4 = document.createElement('p');
        p4.textContent = "Part Number: " + data['part-number'];

        const p5 = document.createElement('p');
        p5.textContent = "Condition: " + data['condition'];

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-btn');
        buttonEdit.textContent = 'Edit';
        buttonEdit.addEventListener('click', edit);

        const buttonContinue = document.createElement('button');
        buttonContinue.classList.add('continue-btn');
        buttonContinue.textContent = 'Continue';
        buttonContinue.addEventListener('click', continueFunc);

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        article.appendChild(p5);

        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);


        infoListUL.appendChild(li);


        document.getElementById('car-model').value = '';
        document.getElementById('car-year').value = '';
        document.getElementById('part-name').value = '';
        document.getElementById('part-number').value = '';
        document.getElementById('condition').value = '';
        document.getElementById('next-btn').disabled = true;

    }

    function edit(e) {

        const li = e.target.parentElement;
        li.remove();

        document.getElementById('car-model').value = data['car-model'];
        document.getElementById('car-year').value = data['car-year'];
        document.getElementById('part-name').value = data['part-name'];
        document.getElementById('part-number').value = data['part-number'];
        document.getElementById('condition').value = data['condition'];

        document.getElementById('next-btn').disabled = false;



    }

    function continueFunc(e) {

        const li = e.target.parentElement;
        li.remove();

        Array.from(li.querySelectorAll('button')).forEach(element => {
            element.remove();
        })

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

        confirmListUL.appendChild(li);

    }

    function confirm(e) {

        const li = e.target.parentElement;
        li.remove();

        nextBtn.disabled = false;

        document.getElementById('complete-img').style = 'visibility: visible';
        document.getElementById('complete-text').textContent = 'Part is Ordered!';

    }

    function cancel(e) {

        const li = e.target.parentElement;
        li.remove();

        nextBtn.disabled = false;

    }
}
