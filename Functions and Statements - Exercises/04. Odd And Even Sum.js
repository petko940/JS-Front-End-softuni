function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let strNumber = number.toString();
    for (let num in strNumber) {
        check = parseInt(strNumber[num]);
        if (check % 2 === 0) {
            evenSum += check;
        } else {
            oddSum += check;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddAndEvenSum(1000435));