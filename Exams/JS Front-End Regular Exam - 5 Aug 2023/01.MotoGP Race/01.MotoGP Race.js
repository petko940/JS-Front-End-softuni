function motoGP(arr) {
    let data = {};
    let riderCount = Number(arr.shift());

    for (let index = 0; index < riderCount; index++) {
        let [name, fuelCapacity, position] = arr.shift().split("|");
        fuelCapacity = Number(fuelCapacity);
        position = Number(position);
        data[name] = {
            fuelCapacity,
            position
        }
    }

    while (true) {
        let command = arr.shift();
        if (command === "Finish") {
            break;
        }

        let [cmd, ...args] = command.split(" - ");
        if (cmd === "StopForFuel") {
            let [rider, minFuel, changedPosition] = args;
            minFuel = Number(minFuel);
            changedPosition = Number(changedPosition);

            if (data[rider].fuelCapacity <= minFuel) {
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                data[rider].position = changedPosition;
                data[rider].fuelCapacity = 100;

            } else {
                console.log(`${rider} does not need to stop for fuel!`);
                data[rider].fuelCapacity -= minFuel;
            }

        } else if (cmd === "Overtaking") {
            let [firstRider, secondRider] = args;
            let firstPosition = data[firstRider].position;
            let secondPosition = data[secondRider].position;

            if (firstPosition > secondPosition) {
                continue
            }
            data[firstRider].position = secondPosition;
            data[secondRider].position = firstPosition;

            console.log(`${firstRider} overtook ${secondRider}!`);

        } else if (cmd === "EngineFail") {
            let [rider, lapsLeft] = args;
            delete data[rider];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }
    }

    Object.entries(data).forEach(element => {
        let key = element[0];
        let value = element[1];
        console.log(key);
        console.log(`  Final position: ${value.position}`);
    });
}
