function meeting(arr) {
    let dict = {}
    let data = []
    for (let i = 0; i < arr.length; i++) {
        let [day, name] = arr[i].split(" ")
        if (day in dict) {
            data.push(`Conflict on ${day}!`)
            continue;
        }
        data.push(`Scheduled for ${day}`)
        dict[day] = name
    }

    let output = [];
    for (let x of data) {
        output.push(x)
    }
    for (let key in dict) {
        output.push(`${key} -> ${dict[key]}`)
    }
    return output.join('\n')

}

console.log(meeting(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
)

