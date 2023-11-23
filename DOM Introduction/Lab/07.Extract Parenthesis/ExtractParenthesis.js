function extract(content) {
    const text = document.getElementById(content);
    let match = text.textContent.match(/\(([^)]+)\)/g);
    
    let result = [];
    for (const iterator of match) {
        result.push(iterator.slice(1, -1));
    }
    return result.join('; ');
}