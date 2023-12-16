function exam(input) {

    let data = {};

    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {

        const [baristaName, shift, coffees] = input.shift().split(' ');
        const [...coffee] = coffees.split(',');

        data[baristaName] = {
            shift,
            coffee
        }

    }

    while (true) {

        const command = input.shift();
        if (command === 'Closed') {
            break;
        }

        const [cmd, ...args] = command.split(' / ');

        if (cmd === 'Prepare') {

            const [baristaName, shift, coffeeType] = args;

            if (shift === data[baristaName].shift && data[baristaName].coffee.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }

        } else if (cmd === 'Change Shift') {

            const [baristaName, newShift] = args;

            data[baristaName].shift = newShift;

            console.log(`${baristaName} has updated his shift to: ${newShift}`);

        } else if (cmd === 'Learn') {

            const [baristaName, newCoffeeType] = args;

            if (data[baristaName].coffee.includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            } else {

                data[baristaName].coffee.push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }

    }

    Object.entries(data).forEach(([key, value]) => {
        console.log(`Barista: ${key}, Shift: ${value.shift}, Drinks: ${value.coffee.join(', ')}`);
    });

}



