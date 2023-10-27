function age(number) {
    let result;
    if (0 <= age <= 2) {
        result = "baby";
    } else if (3 <= number <= 13) {
        result = "child";
    } else if (14 <= number <= 19) {
        return "teenager";
    } else if (20 <= number <= 65) {
        result = "adult";
    } else if (66 <= number) {
        result = "elder";
    } else {
        result = "out of bounds";
    }
    console.log(result);
}
