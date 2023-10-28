function gladiator(lost_fight, helmet_price, sword_price, shield_price, armor_price) {
    let expenses = 0;
    let shieldBrokenTimes = 0;
    for (let i = 1; i <= lost_fight; i++) {
        if (i % 2 === 0) {
            expenses += helmet_price;
        }
        if (i % 3 === 0) {
            expenses += sword_price;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shield_price;
            shieldBrokenTimes++;
        }
        if (shieldBrokenTimes % 2 === 0 && shieldBrokenTimes !== 0) {
            expenses += armor_price;
            shieldBrokenTimes = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

