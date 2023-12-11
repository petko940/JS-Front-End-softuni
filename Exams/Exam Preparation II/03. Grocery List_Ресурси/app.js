function solve() {

    const baseUrl = 'http://localhost:3030/jsonstore/grocery/';

    const addProductBtn = document.getElementById('add-product');
    addProductBtn.addEventListener('click', addProduct);

    const updateProductBtn = document.getElementById('update-product');
    updateProductBtn.addEventListener('click', updateProduct);

    const loadProductsBtn = document.getElementById('load-product');
    loadProductsBtn.addEventListener('click', loadProducts);

    const tbody = document.getElementById('tbody');

    let productID;

    const inputProductName = document.getElementById('product');
    const inputCount = document.getElementById('count');
    const inputPrice = document.getElementById('price');


    async function loadProducts(e) {
        e.preventDefault();
        tbody.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(element => {

            const tr = document.createElement('tr');
            tr.id = element._id;

            const nameTd = document.createElement('td');
            nameTd.classList.add('name');
            nameTd.textContent = element.product;

            const countTd = document.createElement('td');
            countTd.classList.add('count-product');
            countTd.textContent = element.count;

            const priceTd = document.createElement('td');
            priceTd.classList.add('product-price');
            priceTd.textContent = element.price;

            const btnsTd = document.createElement('td');
            btnsTd.classList.add('btn');

            const updateBtn = document.createElement('button');
            updateBtn.classList.add('update');
            updateBtn.textContent = 'Update';
            updateBtn.addEventListener('click', fillInputs);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteProduct);

            btnsTd.appendChild(updateBtn);
            btnsTd.appendChild(deleteBtn);

            tr.appendChild(nameTd);
            tr.appendChild(countTd);
            tr.appendChild(priceTd);
            tr.appendChild(btnsTd);

            tbody.appendChild(tr);


        });

    }

    async function addProduct(e) {
        e.preventDefault();

        const product = inputProductName.value;
        const count = inputCount.value;
        const price = inputPrice.value;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                product,
                count,
                price
            })
        };

        if (product === '' || count === '' || price === '') {
            return;
        }

        inputProductName.value = '';
        inputCount.value = '';
        inputPrice.value = '';

        await fetch(baseUrl, options);
        await loadProducts();

    }

    async function deleteProduct(e) {
        const tr = e.target.parentElement.parentElement;
        tr.remove();
        productID = tr.id;

        const options = {
            method: 'DELETE'
        }

        await fetch(baseUrl + productID, options);
        await loadProducts();

    }

    function fillInputs(e) {
        const tr = e.target.parentElement.parentElement;
        productID = tr.id;

        inputProductName.value = tr.children[0].textContent;
        inputCount.value = tr.children[1].textContent;
        inputPrice.value = tr.children[2].textContent;

        addProductBtn.disabled = true;
        updateProductBtn.disabled = false;

    }

    async function updateProduct() {

        const product = inputProductName.value;
        const count = inputCount.value;
        const price = inputPrice.value;

        const options = {
            method: 'PATCH',
            body: JSON.stringify({
                product,
                count,
                price
            })
        };

        if (product === '' || count === '' || price === '') {
            return;
        }

        inputProductName.value = '';
        inputCount.value = '';
        inputPrice.value = '';

        await fetch(baseUrl + productID, options);
        await loadProducts();

    }

}


solve()