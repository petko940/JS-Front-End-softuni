function numberModification (number) {
    let digits = number.toString();
    let sumDigits = 0;
    for (let i = 0; i < digits.length; i++) {
        sumDigits += parseInt(digits[i]);
    }
    if (sumDigits / digits.length <= 5) {
        return numberModification(digits + 9);
    }
    else {
        return number;       
    }

}

console.log(numberModification(101))