function order(product, price) {
    const dict = {
        "coffee": 1.5,
        "water": 1,
        "coke": 1.4,
        "snacks": 2
    }
    let output = dict[product] * price
    return output.toFixed(2)
}

console.log(order("water", 5))
console.log(order("coffee", 2))