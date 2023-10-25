function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    const furmula = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let = isValid = [];

    if (Number.isInteger(Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2))) {
        isValid.push("valid");
    } else {
        isValid.push("invalid");
    }

    if (Number.isInteger(Math.sqrt((x2) ** 2 + (y2) ** 2))) {
        isValid.push("valid");
    } else {
        isValid.push("invalid");
    }

    if (Number.isInteger(furmula)) {
        isValid.push("valid");
    } else {
        isValid.push("invalid");
    }

    let output = [];
    output.push(`{${x1}, ${y1}} to {0, 0} is ${isValid[0]}`);
    output.push(`{${x2}, ${y2}} to {0, 0} is ${isValid[1]}`);
    output.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid[2]}`);

    return output.join("\n");
}

console.log(pointsValidation([3, 0, 0, 4]));
console.log(pointsValidation([2, 1, 1, 1]));