function sumDigits(number) {
    let numToString = number.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        sum += parseInt(numToString[i]);
    }
    console.log(sum);
}

