function cookingByNumbers(num, ...args) {
    let number = Number(num);
    const operations = {
        chop: (number) => number / 2,
        dice: (number) => Math.sqrt(number),
        spice: (number) => number + 1,
        bake: (number) => number * 3,
        fillet: (number) => number * 0.8
    }
    for (let i = 0; i < args.length; i++) {
        console.log(operations[args[i]](number));
        number = operations[args[i]](number);
    }
    
}

