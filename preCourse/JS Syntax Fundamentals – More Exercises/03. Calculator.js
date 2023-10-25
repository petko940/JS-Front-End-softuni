function calculator(num1, operator, num2) {
    const dict = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b
    }
    return dict[operator](num1, num2).toFixed(2);
}
