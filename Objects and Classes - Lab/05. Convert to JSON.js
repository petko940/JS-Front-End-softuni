function convertToJSON(name, lastName, hairColor) {
    let person = {
        "name": name,
        "lastName": lastName,
        "hairColor": hairColor
    }

    console.log(JSON.stringify(person))
}

