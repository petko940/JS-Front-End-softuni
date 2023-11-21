function garage(arr) {
    let data = {};

    for (const iterator of arr) {
        let [key, value] = iterator.split(' - ');
        if (!data.hasOwnProperty(key)) {
            data[key] = [];
            data[key].push(value);
        } else {
            data[key].push(value);
        }
    }

    Object.entries(data).forEach(element => {
        console.log(`Garage № ${element[0]}`);
        let result = [];
        element[1].forEach(el => {
            let edited = el.replace(/:/g, ' -');
            result.push(edited);
        })
        console.log(`--- ${result.join('\n--- ').replace(':', ' -')}`);
    });
}


garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])