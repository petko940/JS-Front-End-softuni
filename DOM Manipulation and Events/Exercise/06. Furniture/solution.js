function solve() {
    const table = document.querySelector('table > tbody');
    // table.innerHTML = '';

    const buttons = Array.from(document.querySelectorAll('button'));
    const textareas = Array.from(document.querySelectorAll('textarea'));

    const generateButton = buttons[0];
    generateButton.addEventListener('click', generate);
    const inputTextArea = textareas[0];

    const previewTextArea = textareas[1];
    const buyButton = buttons[1];
    buyButton.addEventListener('click', buy);

    function generate(e) {

        const inputData = JSON.parse(inputTextArea.value);
        const tbody = document.createElement('tbody');

        for (let i = 0; i < inputData.length; i++) {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');

            const img = document.createElement('img');
            img.src = inputData[i].img;
            td1.appendChild(img);

            td2.textContent = inputData[i].name;
            td3.textContent = inputData[i].price;
            td4.textContent = inputData[i].decFactor;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            td5.appendChild(checkbox);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            tbody.appendChild(tr);

        }
        const tableElement = document.querySelector('table');
        tableElement.appendChild(tbody);
    }


    function buy(e) {

        const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

        let furnitures = [];
        let totalPrice = 0;
        let decoration = 0;

        checkedBoxes.forEach(element => {
            furnitures.push(element.parentElement.parentElement.children[1].textContent);
            totalPrice += Number(element.parentElement.parentElement.children[2].textContent);
            decoration += Number(element.parentElement.parentElement.children[3].textContent);
        });

        let averageDecoration = decoration / furnitures.length;
        if (!furnitures.length) {
            return;
        }
        previewTextArea.value += `Bought furniture: ${furnitures.join(', ')}\n`;
        previewTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        previewTextArea.value += `Average decoration factor: ${averageDecoration}`
    }
}