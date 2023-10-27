function sameNumbers(num) {
    let strNum = String(num);
    let sum = 0;
    let areSame = true;
    let firstNum = strNum[0];
    for (let i = 0; i < strNum.length; i++) {
        sum += parseInt(strNum[i]);
        if (firstNum !== strNum[i]) {
            areSame = false;
        } 
    }
    
    console.log(areSame);
    console.log(sum);
}

