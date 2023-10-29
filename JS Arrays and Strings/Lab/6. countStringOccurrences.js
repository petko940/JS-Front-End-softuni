function countStringOccurrences(text, word) {
    let count = 0;
    for (let w of text.split(' ')) {
        if (w == word) {
            count++;
        }
    }

    console.log(count);
}

