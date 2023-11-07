function simpleCalculator(num1, num2, operator) {
    const dict = {
        "add": (num1, num2) => num1 + num2,
        "subtract": (num1, num2) => num1 - num2,
        "multiply": (num1, num2) => num1 * num2,
        "divide": (num1, num2) => num1 / num2
    }
    console.log(dict[operator](num1, num2))
}

