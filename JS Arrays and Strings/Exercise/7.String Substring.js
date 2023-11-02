function stringSubstring(word, text) {
    let result = `${word} not found!`;
    text = text.toLowerCase().split(' ');

    for (const txt of text) {
        if (txt === word) {
            result = `${word}`;
            break;
        }
    }
    console.log(result);
}
