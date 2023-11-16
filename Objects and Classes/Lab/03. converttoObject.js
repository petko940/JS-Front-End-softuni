function convertToObject(string) {
    let person = JSON.parse(string)
    for (const key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}