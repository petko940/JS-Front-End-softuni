function solve() {
    const input = document.getElementById('input').value;

    let output = document.getElementById('output');

    let sentences = input.split(".");

    sentences = sentences
        .filter(x => x.length > 0)
        .map(x => x + ".");

    while (sentences.length > 0) {

        let p = document.createElement('p');
        p.textContent = sentences.splice(0, 3).join(' ');

        output.appendChild(p);
    }
}