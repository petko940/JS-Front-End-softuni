function catalogue(input) {
    let catalogue = {}

    for (const iterator of input) {
        [productName, productPrice] = iterator.split(' : ')
        let startLetter = productName[0]

        if (catalogue[startLetter]) {
            catalogue[startLetter].push({
                productName,
                productPrice
            })
        } else {
            catalogue[startLetter] = [{
                productName,
                productPrice
            }]
        }
    }

    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]))
    let output = [];

    sorted.forEach(element => {
        output.push(element[0]);
        for (const iterator of element[1].sort((a, b) => a.productName.localeCompare(b.productName))) {
            output.push(`  ${iterator.productName}: ${iterator.productPrice}`);
        }
    });

    console.log(output.join('\n'));
}

