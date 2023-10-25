function sameNumbers(number) {
    let strNum = number.toString();
    let sum = 0;
    let firstNum = strNum[0];
    let notSame = false;
    for (let i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i]);
        if (firstNum == strNum[i]) {
            firstNum = strNum[i];
        } else {
            notSame = true;
        }
    }
    if (notSame) {
        console.log("false");
    } else {
        console.log("true");
    }
    console.log(sum);
}


