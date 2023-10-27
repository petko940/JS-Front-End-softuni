function fruit(type_fruit, grams, price_per_gram) {
    let weight = grams / 1000;
    let money = weight * price_per_gram;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type_fruit}.`)
}

