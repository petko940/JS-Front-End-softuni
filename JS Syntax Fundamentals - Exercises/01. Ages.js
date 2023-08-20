function age(number) {
    let result;
    if (number >= 0 && number <= 2) {
        result = "baby";
    } else if (number >= 3 && number <= 13) {
        result = "child";
    } else if (number >= 14 && number <= 19) {
        return "teenager";
    } else if (number >= 20 && number <= 65) {
        result = "adult";
    } else if (number >= 66) {
        result = "elder";
    } else {
        result = "out of bounds";
    }
    console.log(result);
}

