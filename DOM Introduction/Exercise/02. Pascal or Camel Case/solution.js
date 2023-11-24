function solve() {
    let text = document.getElementById('text').value.toLowerCase();;
    let typeText = document.getElementById("naming-convention");
    let resultText = document.getElementById('result');

    let editedText = text.split(" ");

    let result = [];
    if (typeText.value === "Camel Case") {
        result.push(editedText[0]);
        for (let i = 1; i < editedText.length; i++) {
            result.push(editedText[i].charAt(0).toUpperCase() + editedText[i].slice(1));
        }
        result = result.join("");
        resultText.textContent = result
    } else if (typeText.value === "Pascal Case") {
        for (let i = 0; i < editedText.length; i++) {
            result.push(editedText[i].charAt(0).toUpperCase() + editedText[i].slice(1));
        }
        result = result.join("");
        resultText.textContent = result
    } else {
        resultText.textContent = "Error!"
    }

}