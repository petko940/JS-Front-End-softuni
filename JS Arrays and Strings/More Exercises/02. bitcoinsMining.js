function bitcoinMining(number) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let day = 0;
    let moneyHave = 0;
    let bitCoinsBought = 0;
    let dayOfFirstPurchase = 0;
    for (let currentGold of number) {
        day++;
        if (day % 3 === 0) {
            currentGold -= 0.3 * currentGold
        }
        moneyHave += currentGold * gold;
        if (moneyHave >= bitcoin) {
            while (moneyHave >= bitcoin) {
                moneyHave -= bitcoin;
                bitCoinsBought++;
            }
            if (dayOfFirstPurchase === 0) {
                dayOfFirstPurchase = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitCoinsBought}`)
    if (dayOfFirstPurchase !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`)
    }
    console.log(`Left money: ${moneyHave.toFixed(2)} lv.`)

}
