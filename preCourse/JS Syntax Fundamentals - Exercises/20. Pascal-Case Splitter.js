function pascalCaseSplitter (string) {
    let result = [string[0]];
    let x = 0;
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
           result.push(string[i]);
           x++;
           continue;
       } else {
           result[x] += string[i];
       }
    }
    return result.join(", ")
}

console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'))