function circleArea(arg) {
    let type = typeof arg;
    if (type === 'number') {
        let result = Math.PI * arg ** 2;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}
