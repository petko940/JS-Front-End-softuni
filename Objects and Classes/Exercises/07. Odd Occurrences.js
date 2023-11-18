function oddOccurrences(input) {
    const words = {};
    const order = [];

    input.split(" ").forEach(element => {
        const lowercasedElement = element.toLowerCase();

        if (words.hasOwnProperty(lowercasedElement)) {
            words[lowercasedElement] += 1;
        } else {
            words[lowercasedElement] = 1;
            order.push(lowercasedElement);
        }
    });

    output = "";
    for (const word of order) {
        if (words[word] % 2 !== 0) {
            output += word + " ";
        }
    }
    return output
}

