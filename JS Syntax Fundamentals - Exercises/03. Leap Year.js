function leapYear(year) {
    let is_leap;
    if (year % 4 == 0 && year % 100 != 0 ||
        year % 400 == 0) {
        is_leap = "yes";
    } else {
        is_leap = "no";
    }
    console.log(is_leap);
}
