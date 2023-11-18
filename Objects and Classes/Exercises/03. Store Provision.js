function storeProvision(stock, products) {
    let store = {};
    for (let i = 0; i < stock.length; i += 2) {
        store[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < products.length; i += 2) {
        if (store.hasOwnProperty(products[i])) {
            store[products[i]] += Number(products[i + 1]);
        } else {
            store[products[i]] = Number(products[i + 1]);
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

}