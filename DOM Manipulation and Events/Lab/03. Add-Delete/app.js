function addItem() {
    const text = document.getElementById('newItemText').value;
    const li = document.createElement('li')

    const del = document.createElement('a');
    del.textContent = '[Delete]';
    del.href = '#';
    
    li.appendChild(document.createTextNode(text))
    li.appendChild(del);

    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

    del.addEventListener('click', deleteItem)
    
    function deleteItem(e) {
        e.currentTarget.parentElement.remove();
    }
}
