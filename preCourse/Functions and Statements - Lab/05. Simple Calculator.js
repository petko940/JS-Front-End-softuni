function simpleCalculator(num1, num2, operator) {
    const dict = {
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b,
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b
    }
    return dict[operator](num1, num2);
}

console.log(simpleCalculator(5, 5, "multiply"))