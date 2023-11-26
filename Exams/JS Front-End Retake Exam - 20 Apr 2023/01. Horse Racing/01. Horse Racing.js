function horseRacing(arr) {
    let horses = [];

    let inputHorses = arr.shift().split('|');

    inputHorses.forEach(element => {
        horses.push(element);
    });

    while (true) {
        let command = arr.shift();
        if (command === 'Finish') {
            break;
        }

        let [cmd, ...args] = command.split(' ');

        if (cmd === 'Retake') {
            let pos1 = args[0];
            let pos2 = args[1];
            let pos1Index = horses.indexOf(pos1);
            let pos2Index = horses.indexOf(pos2);
            if (pos1Index < pos2Index) {
                let temp = horses[pos1Index];
                horses[pos1Index] = horses[pos2Index];
                horses[pos2Index] = temp;
                console.log(`${pos1} retakes ${pos2}.`);
            }

        } else if (cmd === "Trouble") {
            let horseName = args[0];
            let currentHorseIndex = horses.indexOf(horseName);
            if (currentHorseIndex > 0) {
                horses.splice(currentHorseIndex, 1)
                horses.splice(currentHorseIndex - 1, 0, horseName)
                console.log(`Trouble for ${horseName} - drops one position.`);
            }
        } else if (cmd === "Rage") {
            let horseName = args[0];
            let currentHorseIndex = horses.indexOf(horseName);
            if (currentHorseIndex + 2 >= horses.length) {
                let firstHorseIndex = horses.length - 1;
                [horses[currentHorseIndex], horses[firstHorseIndex]] = [horses[firstHorseIndex], horses[currentHorseIndex]]
            } else if (currentHorseIndex + 2 < horses.length) {
                horses.splice(currentHorseIndex, 1);
                horses.splice(currentHorseIndex + 2, 0, horseName);
            }
            console.log(`${horseName} rages 2 positions ahead.`);

        } else if (cmd === "Miracle") {
            let last = horses.shift();
            horses.push(last);
            console.log(`What a miracle - ${last} becomes first.`);
        }
    }
    console.log(horses.join("->"));

    console.log(`The winner is: ${horses[horses.length - 1]}`);
}


