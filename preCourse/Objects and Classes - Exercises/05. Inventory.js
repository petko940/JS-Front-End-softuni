function inventory(arr) {
    data = [];
    for (let x of arr) {
        let heroName = x.split(" / ")[0];
        let heroLevel = x.split(" / ")[1];
        let heroItems = x.split(" / ")[2];
        data.push({ name: heroName, level: heroLevel, items: heroItems });
    }

    data.sort((a, b) => a.level - b.level);

    output = [];
    for (let x of data) {
        output.push(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`);
    }
    return output.join("\n");
}

