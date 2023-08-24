function perfectNumber(number) {
    let halfNumber = number / 2;
    let sum = 0;
    for (let i = 1; i <= halfNumber; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number) {
        return "We have a perfect number!";
    } else {
        return "It's not so perfect.";
    }
}

