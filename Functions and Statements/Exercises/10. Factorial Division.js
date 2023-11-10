function factorialDivision(num1, num2) {
    function factCalculation(x) {
        let fact = 1;
        for (let i = 1; i <= x; i++) {
            fact *= i
        }
        return fact
    }
    let result = factCalculation(num1) / factCalculation(num2);
    console.log(result.toFixed(2));
}
