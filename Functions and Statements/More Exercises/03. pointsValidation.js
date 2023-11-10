function pointValidaton(arr) {
    function isValid(x) {
        if (Number.isInteger(x) && x >= -100 && x <= 100) {
            return "valid";
        } else {
            return "invalid";
        }
    }

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let result1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let result2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let result3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(result1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(result2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(result3)}`);
}

pointValidaton([3, 0, 0, 4])
pointValidaton([2, 1, 1, 1])