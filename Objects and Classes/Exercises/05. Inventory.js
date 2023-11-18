function inventory(arr) {
    let heroes = [];

    arr.forEach(element => {
        [heroName, heroLevel, ...items] = element.split(' / ');
        let hero = {
            "Hero": heroName,
            "level": Number(heroLevel),
            "items": items
        }
        heroes.push(hero);
    });

    let sorted = Object.values(heroes).sort((a, b) => a.level - b.level);
    sorted.forEach(element => {
        items = element.items.join(', ');
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${items}`);
    });
}


