function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberToString = number.toString();
    for (const num of numberToString) {
        if (Number(num) % 2 === 0) {
            evenSum += Number(num);
        } else {
            oddSum += Number(num);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

