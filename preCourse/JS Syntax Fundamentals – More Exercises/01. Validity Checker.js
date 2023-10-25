function validatyChecker(x1,y1,x2,y2) {
    function isInteger(value) {
        return Number.isInteger(value)
    }

    const distance1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    const distance2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    const distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    if (isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}



validatyChecker(3, 0, 0, 4)
validatyChecker(2, 1, 1, 1)