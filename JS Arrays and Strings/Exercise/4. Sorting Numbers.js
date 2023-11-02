function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];
    while (sortedArr.length) {
        let first = sortedArr.shift();
        let last = sortedArr.pop();
        result.push(first, last);
    }
    return result
}

