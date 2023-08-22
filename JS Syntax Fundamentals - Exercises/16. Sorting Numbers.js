function customSort(arr) {
    arr.sort((a, b) => a - b);

    const result = [];

    while (arr.length > 0) {
        result.push(arr.shift());
        if (arr.length > 0) {
            result.push(arr.pop());
        }
    }

    return result;
}

console.log(customSort([1,
    65, 3, 52, 48, 63, 31, 3, 18, 56]))