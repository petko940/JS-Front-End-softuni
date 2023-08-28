function piccolo(array) {
    let list = [];
    for (let arr of array) {
        let direction = arr.split(', ')[0];
        let carNumber = arr.split(', ')[1];
        if (direction == 'IN') {
            list.push(carNumber);
        } else {
            list = list.filter(x => x != carNumber);
        }
    }
    if (list.length == 0) {
        return "Parking Lot is Empty";
    }

    list.sort();
    return list.join('\n');
}

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']))

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']))