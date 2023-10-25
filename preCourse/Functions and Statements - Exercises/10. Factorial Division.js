function factorialDivision(num1, num2) {
    let fact1 = 1;
    for (let i = 1; i <= num1; i++) {
        fact1 *= i;
    }
    let fact2 = 1;
    for (let i = 1; i <= num2; i++) {
        fact2 *= i;
    }
    let result = fact1 / fact2;
    return result.toFixed(2);
}

console.log(factorialDivision(6, 2));
