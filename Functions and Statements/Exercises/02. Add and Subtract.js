function addAndSubtract(number1, number2, number3) {
    function sum() {
        return number1 + number2;
    }
    function substract() {
        return sum() - number3;
    }
    return substract();

}

