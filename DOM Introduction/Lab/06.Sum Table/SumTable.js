function sumTable() {
    const data = document.getElementsByTagName('td');
    let sum = 0;

    for (let index = 1; index < data.length; index += 2) {
        sum += Number(data[index].textContent)
    }

    const result = document.getElementById("sum");
    result.textContent = sum;
}