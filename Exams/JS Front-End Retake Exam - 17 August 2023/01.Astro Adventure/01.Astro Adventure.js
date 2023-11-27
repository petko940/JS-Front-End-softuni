function astro(arr) {
    let number = Number(arr.shift());
    let austronauts = {};

    for (let index = 0; index < number; index++) {
        let [name, oxygen, energy] = arr.shift().split(" ")
        oxygen = Number(oxygen);
        energy = Number(energy);
        austronauts[name] = {
            oxygen,
            energy
        }
    }

    while (true) {
        let command = arr.shift();
        if (command.includes("End")) {
            break;
        }
        let [cmd, name, number] = command.split(" - ")
        number = Number(number)

        if (cmd === "Explore") {
            if (austronauts[name].energy >= number) {
                austronauts[name].energy -= number
                console.log(`${name} has successfully explored a new area and now has ${austronauts[name].energy} energy!`);
            } else {
                console.log(name + " does not have enough energy to explore!");
            }
        } else if (cmd === "Refuel") {
            let amountRecovered = number;
            austronauts[name].energy += number;

            if (austronauts[name].energy > 200) {
                amountRecovered = 200 - (austronauts[name].energy - number)
                austronauts[name].energy = 200;
            }
            console.log(`${name} refueled their energy by ${amountRecovered}!`);

        } else {
            let amountRecovered = number;
            austronauts[name].oxygen += number;

            if (austronauts[name].oxygen > 100) {
                amountRecovered = 100 - (austronauts[name].oxygen - number)
                austronauts[name].oxygen = 100;
            }
            console.log(`${name} took a breath and recovered ${amountRecovered} oxygen!`);
        }
    }

    Object.entries(austronauts).forEach(element => {
        console.log(`Astronaut: ${element[0]}, Oxygen: ${element[1].oxygen}, Energy: ${element[1].energy}`)
    });

}

