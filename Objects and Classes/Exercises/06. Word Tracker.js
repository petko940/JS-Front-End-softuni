function wordsTracker(arr) {
    firstWords = arr[0].split(" ");

    data = {};
    firstWords.forEach(element => {
        data[element] = 0
        for (let i = 1; i < arr.length; i++) {
            if (element === arr[i]) {
                data[element] += 1
            }
        };
    });
    
    let sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}


