function spiceMustFlow(num) {
    let days = 0;
    let total_spices = 0;

    while (num >= 100) {
        days++;
        total_spices += num - 26;
        num -= 10;
    }

    if (total_spices >= 26) {
        total_spices -= 26;
    }

    console.log(days);
    console.log(total_spices);

}