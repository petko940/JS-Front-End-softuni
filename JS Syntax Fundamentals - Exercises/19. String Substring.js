function stringSubstring (word, text) {
    let wrd = word.toLowerCase();
    let strings = text.split(" ")

    for (let str of strings) {
        if (str.toLowerCase() == wrd) {
            return word
        }
    }
    return `${word} not found!`

}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'))
console.log(stringSubstring('python', 'JavaScript is the best programming language'))

