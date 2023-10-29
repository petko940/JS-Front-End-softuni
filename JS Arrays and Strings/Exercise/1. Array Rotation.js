function arrayRotation(arr, num) {
    let result = arr;
    for (let i = 0; i < num; i++) {
        result.push(arr.shift());
    }
    
    console.log(result.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)