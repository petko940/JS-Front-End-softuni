function wordTracker(arr) {
    let words = arr[0].split(" ");
    let dict = {};
    for (let word of words) {
        dict[word] = 0
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] in dict) {
            dict[arr[i]] += 1
        }
    }
    
    let sortedArray = Object.entries(dict).sort((a, b) => b[1] - a[1]);

    result = [];
    for (let [key, value] of sortedArray) {
        result.push(`${key} - ${value}`);
    }
    return result.join('\n');
}

console.log(wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]))