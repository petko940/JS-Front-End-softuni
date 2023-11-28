function shoppingList(input) {
    let list = input.shift().split('!');

    while (true) {
        let command = input.shift();
        if (command === "Go Shopping!") {
            break;
        }

        let [cmd, ...items] = command.split(' ');

        if (cmd === "Urgent") {
            let item = items[0];
            if (!list.includes(item)) {
                list.unshift(item);
            }

        } else if (cmd === "Unnecessary") {
            let item = items[0];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }

        } else if (cmd === "Correct") {
            let oldItem = items[0];
            let newItem = items[1];
            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list.splice(index, 1, newItem);
            }

        } else if (cmd === "Rearrange") {
            let item = items[0];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                let temp = list.splice(index, 1);
                list.push(temp)
            }
        }
    }

    console.log(list.join(", "));
}

