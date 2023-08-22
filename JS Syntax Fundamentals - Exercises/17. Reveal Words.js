function revealWords(words, templates) {
    let separatedWords = words.split(", ")
    let temps = templates.split(" ")
    let result = []

    for (let tmp of temps) {
        let wordsLen = 0
        if (tmp.startsWith("*")) {
            for (let i = 0; i < tmp.length; i++) {
                wordsLen += 1
            }
            for (let w of separatedWords) {
                if (w.length == wordsLen) {
                    tmp = w
                    break;
                }
            }
        }
        result.push(tmp)
    }
    return result.join(" ")
}

console.log(revealWords('great', 'softuni is ***** place for learning new programming languages'))