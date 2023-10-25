function phoneBook(data) {
    let dict = {};
    for (let i = 0; i < data.length; i++) {
        let [name, phone] = data[i].split(" ");
        dict[name] = phone
    }
    let output = []
    for (let key in dict) {
        output.push(`${key} -> ${dict[key]}`)
    }
    return output.join('\n')
}


console.log(phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']))