function sumDigits(number) {
    let sum = 0;
    number = number.toString();
    for (let i = 0; i <= number.length - 1; i++) {
        sum += parseInt(number[i]);
    }
    console.log(sum);
}

