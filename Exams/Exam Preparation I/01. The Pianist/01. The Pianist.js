function pianist(array) {
    const data = {};

    const number = parseInt(array.shift(), 10);
    for (let i = 0; i < number; i++) {
        const [piece, composer, key] = array.shift().split("|");
        data[piece] = {
            "composer": composer,
            "key": key
        };
    }

    while (true) {
        const command = array.shift();
        if (command === "Stop") {
            break;
        }

        const [cmd, ...args] = command.split("|");
        if (cmd === "Add") {
            const [piece, composer, key] = args;
            if (piece in data) {
                console.log(`${piece} is already in the collection!`);
            } else {
                data[piece] = {
                    "composer": composer,
                    "key": key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (cmd === "Remove") {
            const piece = args[0];
            if (!(piece in data)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete data[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (cmd === "ChangeKey") {
            const [piece, newKey] = args;
            if (!(piece in data)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                data[piece]["key"] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    }

    for (const [key, value] of Object.entries(data)) {
        console.log(`${key} -> Composer: ${value["composer"]}, Key: ${value["key"]}`);
    }
}