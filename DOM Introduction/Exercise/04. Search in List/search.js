function search() {
    const info = document.getElementsByTagName('li')

    const matches = document.getElementById('searchText').value;

    let townsFoundCount = 0;
    for (const iterator of info) {
        if (iterator.textContent.includes(matches) && matches !== '') {
            iterator.style.textDecoration = 'underline';
            iterator.style.fontWeight = 'bold';
            townsFoundCount++;
        } else {
            iterator.style.textDecoration = 'none';
            iterator.style.fontWeight = 'normal';
        }
    }

    const result = document.getElementById('result');
    result.textContent = `${townsFoundCount} matches found`;

}
