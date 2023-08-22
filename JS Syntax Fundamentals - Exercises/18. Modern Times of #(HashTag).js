function modernHashTag (string) {
    let strings = string.split(" ");
    let result = [];
    for (let str of strings) {
        if (str.startsWith("#")) {
            str = str.replace(str[0], "");
            if (str.length > 0) {
            result.push(str);
        }

    }
    }
    for (const str of result) {
        console.log(str);
    }
}


console.log(modernHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'))
