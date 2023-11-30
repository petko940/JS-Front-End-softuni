function deleteByEmail() {

    const email = document.getElementsByName('email')[0].value;
    const rows = Array.from(document.querySelectorAll('tbody tr td'));
    const result = document.getElementById('result');

    for (const row of rows) {
        if (row.textContent === email) {
            result.textContent = 'Deleted.'
            row.parentElement.remove();
            break;
        } else {
            result.textContent = 'Not found.'
        }
    };

}