function focused() {
    
    const text = document.getElementsByTagName('input');
    
    for (const txt of text) {
        txt.addEventListener('focus', highlight);
        txt.addEventListener('blur', unhighlight);
    }

    function highlight(e) {
        e.currentTarget.parentElement.className = 'focused';
    }

    function unhighlight(e) {
        e.target.parentElement.className = '';
    }
}