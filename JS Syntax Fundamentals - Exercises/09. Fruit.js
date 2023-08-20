function fruit(type_fruit, weight, price_per_kilogram) {
    let money;
    let kilogram = weight / 1000;
    money = kilogram * price_per_kilogram;

    console.log(`I need $${money.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${type_fruit}.`)
}
