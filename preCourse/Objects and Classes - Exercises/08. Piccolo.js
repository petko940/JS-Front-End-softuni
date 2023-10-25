function piccolo(array) {
    let list = [];
    for (let arr of array) {
        let direction = arr.split(', ')[0];
        let carNumber = arr.split(', ')[1];
        if (direction === 'IN' && !list.includes(carNumber)) {
            list.push(carNumber);
        } else if (direction === 'OUT' && list.includes(carNumber)) {
            list = list.filter(x => x != carNumber);
        }
    }
    if (list.length == 0) {
        return "Parking Lot is Empty";
    }

    list.sort((a, b) => a.localeCompare(b));
    return list.join('\n');
}

