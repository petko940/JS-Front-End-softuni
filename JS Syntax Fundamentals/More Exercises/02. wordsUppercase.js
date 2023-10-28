function wordsUppercase(text) {
    const regex = /\w+/g;
    const txt = text.match(regex);
    let result = [];
    for (let i = 0; i < txt.length; i++) {
        result.push(txt[i].toUpperCase());
    }
    return result.join(', ');

}
