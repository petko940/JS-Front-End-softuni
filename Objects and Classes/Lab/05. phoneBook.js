function phoneBook(arr) {
    let phoneInfo = {};
    for (const x of arr) {
        let [name, phone] = x.split(' ');
        phoneInfo[name] = phone;
    }

    for (const key in phoneInfo) {
        console.log(`${key} -> ${phoneInfo[key]}`);
    }

}
