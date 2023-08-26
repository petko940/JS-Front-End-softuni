function addressBook(arr) {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {
        let [name, address] = arr[i].split(":")
        dict[name] = address
    }
    let keyValueArray = Object.entries(dict);

    keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));

    let sortedDict = {};
    for (let [name, address] of keyValueArray) {
        sortedDict[name] = address;
    }

    let output = [];
    for (let key in sortedDict) {
        output.push(`${key} -> ${dict[key]}`)
    }
    return output.join('\n')
}


console.log(addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
)