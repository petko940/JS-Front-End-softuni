function matrix(number) {
    let result = [];
    for (let i = 0; i < number; i++) {
        let row = [];
        for (let j = 0; j < number; j++) {
            row.push(number);
        }
        result.push(row.join(' '));
    }
    return result.join('\n');
}

console.log(matrix(3));