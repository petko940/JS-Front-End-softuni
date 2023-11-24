function subtract() {
    let firstNumber = document.getElementById("firstNumber")
    let secondNumber = document.getElementById("secondNumber")

    let num1 = Number(firstNumber.value)
    let num2 = Number(secondNumber.value)
    let result = num1 - num2;

    let divResult = document.getElementById('result')
    divResult.textContent = result
}