function printEveryNElement(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr[i]);
    }
    return result
}

