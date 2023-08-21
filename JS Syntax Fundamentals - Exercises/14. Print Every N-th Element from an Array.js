function solve(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i = i + number) {
        result.push(arr[i]);
    }
    
    return result
}
