function addItem() {

    const menu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    if (text.value == '' || value.value == '') {
        return;
    }

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    menu.appendChild(option);

    text.value = '';
    value.value = '';


}