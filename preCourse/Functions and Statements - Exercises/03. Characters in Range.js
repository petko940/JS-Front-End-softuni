function charactersInRange(char1, char2) {
    let chr1 = char1.charCodeAt();
    let chr2 = char2.charCodeAt();

    if (chr1 > chr2) {
        let temp = chr1;
        chr1 = chr2;
        chr2 = temp;
    }
    let result = [];

    for (let i = chr1 + 1; i < chr2; i++) {
        result.push(String.fromCharCode(i));
    }
    return result.join(" ");
}

