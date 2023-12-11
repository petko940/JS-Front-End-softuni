function solve() {

    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

    const info = document.getElementsByClassName('info')[0];

    const departBtn = document.getElementById('depart');
    departBtn.addEventListener('click', depart);

    const arriveBtn = document.getElementById('arrive');
    arriveBtn.addEventListener('click', arrive);


    let departID = 'depot';
    let arriveName = '';

    function depart() {
        fetch(baseUrl + departID)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                info.textContent = `Next stop ${data.name}`
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                departID = data.next;
                arriveName = data.name;
            })
            .catch((err) => {
                info.textContent = 'Error';
            })

    }

    async function arrive() {

        departBtn.disabled = false;
        arriveBtn.disabled = true;
        info.textContent = `Arriving at ${arriveName}`

    }

    return {
        depart,
        arrive
    };
}

let result = solve();