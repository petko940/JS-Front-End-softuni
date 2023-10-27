function roadRadar(speed, area) {
    const areas = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    const status = {
        20: 'speeding',
        40: 'excessive speeding',
        41: 'reckless driving'
    }
    let result;
    let difference = speed - areas[area];
    if (areas[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`)
    } else {
        if (difference <= 20) {
            result = status[20];
        } else if (difference <= 40) {
            result = status[40];
        } else {
            result = status[41];
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[area]} - ${result}`)
    }
}

