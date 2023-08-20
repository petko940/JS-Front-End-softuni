function solve (n, array) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(array[i]);
    }
    let output = [];
    for (let i = result.length; i > 0; i--) {
        output.push(result[i - 1]);
    }
    
    output = output.join(" ");
    console.log(output);
}

