function storeProvision(stock, ordered) {
    let dict = {};
    for (let i = 0; i < stock.length; i = i + 2) {
        dict[stock[i]] = parseInt(stock[i + 1]);
    }

    for (let i = 0; i < ordered.length; i = i + 2) {
        if (ordered[i] in dict) {
            dict[ordered[i]] += parseInt(ordered[i + 1]);
        } else {
            dict[ordered[i]] = parseInt(ordered[i + 1]);
        }
    }

    let output = [];
    for (let key in dict) {
        output.push(`${key} -> ${dict[key]}`);
    }
    return output.join('\n');
}


console.log(storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]))