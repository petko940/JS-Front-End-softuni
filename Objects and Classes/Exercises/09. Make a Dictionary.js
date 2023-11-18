function makeDictionary(arr) {
    let dictionary = {};

    arr.forEach(jsonString => {
        let obj = JSON.parse(jsonString);
        for (const key in obj) {
            dictionary[key] = obj[key];
        }
    });

    let sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}

