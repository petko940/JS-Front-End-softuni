function orders(product, quantity) {
    const dict = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }
    console.log((dict[product] * quantity).toFixed(2));
}