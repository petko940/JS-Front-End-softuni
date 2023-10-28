function calculator(num1, operator, num2) {
    const dict = {
        "+": (num1, num2) => num1 + num2,
        "-": (num1, num2) => num1 - num2,
        "*": (num1, num2) => num1 * num2,
        "/": (num1, num2) => num1 / num2
    }
    let result = dict[operator](num1, num2);
    console.log(result.toFixed(2));
    
}

