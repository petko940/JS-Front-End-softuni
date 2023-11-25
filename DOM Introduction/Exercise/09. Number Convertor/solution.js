function solve() {

    function addOptions(value, text) {
        const toOptions = document.getElementById('selectMenuTo');
        const options = document.createElement('option');
        options.value = value;
        options.textContent = text;
        toOptions.appendChild(options);
    }

    addOptions("binary", "Binary");
    addOptions("hexadecimal", "Hexadecimal");
    
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function () {
        const input = document.getElementById('input');
        let toNumber = Number(input.value);

        const selectMenuTo = document.getElementById('selectMenuTo');
        const result = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            toNumber = toNumber.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            toNumber = toNumber.toString(16).toUpperCase();
        }

        result.value = toNumber;
    });
}


