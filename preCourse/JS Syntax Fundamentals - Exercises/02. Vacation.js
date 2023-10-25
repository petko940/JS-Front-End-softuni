function vacation(people, type_group, day) {
    let dict = {
        "Students": { "Friday": 8.45, "Saturday": 9.8, "Sunday": 10.46 },
        "Business": { "Friday": 10.9, "Saturday": 15.6, "Sunday": 16 },
        "Regular": { "Friday": 15, "Saturday": 20, "Sunday": 22.5 }
    }
    let result = dict[type_group][day];

    let total_price = result * people;

    if (type_group == 'Students' && people >= 30) {
        total_price *= 0.85;
    }
    else if (type_group == 'Business' && people >= 100) {
        total_price = result * (people - 10)
    }
    else if (type_group == 'Regular' && people >= 10 && people <= 20) {
        total_price *= 0.95;
    }

    console.log(`Total price: ${total_price.toFixed(2)}`);
}
