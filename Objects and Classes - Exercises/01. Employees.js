function employee(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let nameLength = arr[i].length;
        output.push(`Name: ${arr[i]} -- Personal Number: ${nameLength}`);
    }
    return output.join('\n');
}

