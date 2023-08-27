function towns (arr) {
    let output = [];
    for (let x of arr) {
        let [town, latitude, longitude] = x.split(' | ');
        output.push(`{ town: '${town}', latitude: '${parseFloat(latitude).toFixed(2)}', longitude: '${parseFloat(longitude).toFixed(2)}' }`);
    }
    return output.join('\n');
}

console.log(towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']))
