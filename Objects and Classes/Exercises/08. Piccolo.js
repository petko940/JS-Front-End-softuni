function piccolo(arr) {
    let parkingLot = [];
    arr.forEach(element => {
        [direction, carNumber] = element.split(", ")
        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber)
        } else if (direction === 'OUT' && parkingLot.includes(carNumber)) {
            const elementToRemove = carNumber;
            const indexToRemove = parkingLot.indexOf(elementToRemove);
            parkingLot.splice(indexToRemove, 1)
        }
    });

    if (!parkingLot.length) {
        console.log("Parking Lot is Empty");
    } else {
        let sorted = parkingLot.sort((a, b) => a.localeCompare(b));
        sorted.forEach(element => {
            console.log(element);
        });
    }
}

