function loadingBar(number) {
    let result = ["["];
    for (let i = 1; i <= number; i += 10) {
        result.push("%");
    }
    for (let i = number + 1; i <= 100; i += 10) {
        result.push(".");
    }
    result.push("]");

    if (number === 100) {
        let output = "100% Complete!\n"
        output += result.join("");
        return output;
    } else {
        let output = `${number}% `
        output += result.join("") + "\n";
        output += "Still loading..."
        return output
    }
}

