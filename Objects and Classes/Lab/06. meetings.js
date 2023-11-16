function meetings(arr) {
    let meetings = {};
    for (const iterator of arr) {
        let [day, name] = iterator.split(' ');
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const x of Object.entries(meetings)) {
        console.log(`${x[0]} -> ${x[1]}`);
    }
}
