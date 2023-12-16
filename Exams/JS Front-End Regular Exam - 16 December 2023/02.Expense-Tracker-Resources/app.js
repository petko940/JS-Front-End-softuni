window.addEventListener("load", solve);

function solve() {
    // values in inputs 
    let data = {
        "expense": "",
        "amount": "",
        "date": "",
    }

    // inputs
    const inputExpense = document.getElementById('expense');
    const inputAmount = document.getElementById('amount');
    const inputDate = document.getElementById('date');

    // buttons
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    const deleteBtn = document.getElementsByClassName('delete');
    deleteBtn[0].addEventListener('click', () => location.reload());

    // containers
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');


    function add(e) {
        e.preventDefault();

        if (inputExpense.value == '' || inputAmount.value == '' || inputDate.value == '') {
            return;
        }
        data['expense'] = inputExpense.value;
        data['amount'] = inputAmount.value;
        data['date'] = inputDate.value;

        const li = document.createElement('li');
        li.classList.add('expense-item');

        const article = document.createElement('article');

        const p1 = document.createElement('p');
        p1.textContent = `Type: ${data['expense']}`;

        const p2 = document.createElement('p');
        p2.textContent = `Amount: ${data['amount']}$`;

        const p3 = document.createElement('p');
        p3.textContent = `Date: ${data['date']}`;

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);


        const divBtns = document.createElement('div');
        divBtns.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'edit');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', edit);

        const okBtn = document.createElement('button');
        okBtn.classList.add('btn', 'ok');
        okBtn.textContent = 'ok';
        okBtn.addEventListener('click', okFunc);

        divBtns.appendChild(editBtn);
        divBtns.appendChild(okBtn);

        li.appendChild(article);
        li.appendChild(divBtns);

        previewList.appendChild(li);


        addBtn.disabled = true;

        inputExpense.value = '';
        inputAmount.value = '';
        inputDate.value = '';

    }

    function edit(e) {

        const li = e.target.parentElement.parentElement;
        li.remove();

        inputExpense.value = data['expense'];
        inputAmount.value = data['amount'];
        inputDate.value = data['date'];

        addBtn.disabled = false;

    }

    function okFunc(e) {

        const li = e.target.parentElement.parentElement;
        li.remove();

        li.removeChild(li.lastElementChild);
        expensesList.appendChild(li);

        addBtn.disabled = false;

    }


}