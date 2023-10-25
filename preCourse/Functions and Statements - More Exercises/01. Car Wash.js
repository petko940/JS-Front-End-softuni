function carWash(arr) {
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.2;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.9;
                break;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`
}


console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
'water']))
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"]))