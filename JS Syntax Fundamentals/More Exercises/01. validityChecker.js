function validacityChecker(x1, y1, x2, y2) {
    function isValid(res) {
        if (Number.isInteger(res)) {
            return 'valid'
        } else {
            return 'invalid'
        }
    }

    let result1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let result2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let result3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(result1)}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(result2)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(result3)}`)
}

