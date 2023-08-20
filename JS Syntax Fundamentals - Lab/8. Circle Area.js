function circle_area (r) {
    let input_type = typeof(r);
    let result;

    if (input_type != "number") {
        result = `We can not calculate the circle area, because we receive a ${input_type}.`
        console.log(result);
    }
    else {
        result = Math.PI * r * r;
        console.log(result.toFixed(2));
    }
}
