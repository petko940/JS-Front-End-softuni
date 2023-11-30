function solve() {

    let items = {
        'Bread': 0.8,
        'Milk': 1.09,
        'Tomatoes': 0.99,
    }
    let price = 0;
    let boughtItems = new Set();

    const textarea = document.querySelector('textarea');
    const btns = Array.from(document.querySelectorAll('.add-product'));

    const checkoutButton = document.getElementsByClassName('checkout')[0];

    checkoutButton.addEventListener('click', checkout);

    btns.forEach(element => {
        element.addEventListener('click', addItem);
    });

    function addItem(e) {
        const name = e.currentTarget.parentNode.parentNode.querySelector('.product-title').textContent;
        textarea.value += `Added ${name} for ${items[name].toFixed(2)} to the cart.\n`;
        boughtItems.add(name);
        price += items[name];
    }

    function checkout() {
        let boughtItemsArray = Array.from(boughtItems);
        let outputPrice = price.toFixed(2);

        textarea.value += `You bought ${boughtItemsArray.join(', ')} for ${outputPrice}.`

        btns.forEach(element => {
            element.disabled = true;
        })

        price = 0;
        checkoutButton.disabled = true;

    }

}