function charactersInRange(char1, char2) {
    let start = char1.charCodeAt();
    let end = char2.charCodeAt();
    if (start > end) {
        [start, end] = [end, start];
    }
    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}
