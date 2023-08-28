function oddOccurrence(string) {
    dict = {};
    for (let str of string.split(" ")) {
        str = str.toLowerCase();
        if (str in dict) {
            dict[str] += 1
        } else {
            dict[str] = 1
        }
    }
    output = [];
    for (let key in dict) {
        if (dict[key] % 2 !== 0) {
            output.push(key);
        }
    }
    return output.join(" ");
}


console.log(oddOccurrence(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
))