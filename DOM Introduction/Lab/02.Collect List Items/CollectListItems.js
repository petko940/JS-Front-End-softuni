function extractText(event) {
    let items = document.getElementById('items').textContent;
    let text = document.getElementById('result');
    text.value = items;
}