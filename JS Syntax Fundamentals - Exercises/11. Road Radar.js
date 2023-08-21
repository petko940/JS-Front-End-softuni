function roadRadar(speed, area) {
    const dict = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }
    let result;
    let status;
    if (dict[area] >= speed) {
        result = `Driving ${speed} km/h in a ${dict[area]} zone`
        console.log(result);
    }
    else if (speed - dict[area] <= 20) {
        status = 'speeding';
        console.log(`The speed is ${speed - dict[area]} km/h faster than the allowed speed of ${dict[area]} - ${status}`)
    } else if (speed - dict[area] <= 40) {
        status = 'excessive speeding';
        console.log(`The speed is ${speed - dict[area]} km/h faster than the allowed speed of ${dict[area]} - ${status}`)
    } else {
        status = 'reckless driving';
        console.log(`The speed is ${speed - dict[area]} km/h faster than the allowed speed of ${dict[area]} - ${status}`)
    }
}

