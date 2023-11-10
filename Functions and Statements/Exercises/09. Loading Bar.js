function loadingBar(number) {
    if (number === 100) {
        console.log(`100% Complete!`)
        console.log(`[${'%'.repeat(10)}]`);
    } else {
        let percentCount = number / 10;
        let dotsCount = 10 - percentCount;
        console.log(`${number}% [${'%'.repeat(percentCount)}${'.'.repeat(dotsCount)}]`);
        console.log("Still loading...");
    }
}
