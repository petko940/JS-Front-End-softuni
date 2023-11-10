function numberModification(number) {
    let strNumber = String(number)
    while (true) {
        let average = 0;
        for (let i = 0; i < strNumber.length; i++) {
            average += Number(strNumber[i])
        }
        if (average / strNumber.length < 5) {
            strNumber += 9
        } else {
            console.log(strNumber);
            break
        }
    }
}
