function attachEventsListeners() {

    const days = document.getElementById('days');
    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', daysBtnConvert);

    const hours = document.getElementById('hours');
    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', hoursBtnConvert);

    const minutes = document.getElementById('minutes');
    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', minutesBtnConvert);

    const seconds = document.getElementById('seconds');
    const secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', secondsBtnConvert);

    function daysBtnConvert(e) {
        hours.value = days.value * 24;
        minutes.value = days.value * 24 * 60;
        seconds.value = days.value * 24 * 60 * 60;
    }

    function hoursBtnConvert(e) {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 60 * 60;
    }

    function minutesBtnConvert(e) {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }

    function secondsBtnConvert(e) {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    }


}