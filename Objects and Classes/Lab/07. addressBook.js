function addressBook(arr) {
    let person = {};
    for (const iterator of arr) {
        let [name, address] = iterator.split(':');
        person[name] = address;
    }

    let sorted = Object.entries(person).sort((a, b) => a[0].localeCompare(b[0]));
    for (const iterator of sorted) {
        let [personName, personAddress] = iterator;
        console.log(`${personName} -> ${personAddress}`);
    }
}

