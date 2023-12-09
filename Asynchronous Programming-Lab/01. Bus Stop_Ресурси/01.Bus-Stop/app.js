function getInfo() {

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';

    const stopId = document.getElementById('stopId');
    document.getElementById('submit').addEventListener('click', getInfo);

    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    function getInfo() {

        fetch(baseUrl + stopId.value)
            .then(response => response.json())
            .then(data => {
                
                buses.innerHTML = '';
                stopName.textContent = data.name;

                Object.entries(data.buses).forEach(([bus, time]) => {
                    const li = document.createElement('li');
                    li.textContent = `Bus ${bus} arrives in ${time} minutes`;
                    buses.appendChild(li);
                });

            })
            .catch(err => {
                stopName.textContent = 'Error';
            })
    }

}


getInfo()
