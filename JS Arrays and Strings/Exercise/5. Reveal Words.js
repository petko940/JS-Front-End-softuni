function revealWords(words, text) {
    let result = [];
    let txt = text.split(" ");
    let wordsSplit = words.split(", ");
    for (let i = 0; i < txt.length; i++) {
        const element = txt[i];
        if (element.startsWith("*")) {
            let len = element.length;
            for (let j of wordsSplit) {
                if (j.length == len) {
                    txt[i] = j;
                    break;
                }
            }
        }
    }
    console.log(txt.join(" "));
}


revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)