function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/tasks/';

    const addWeatherBtn = document.getElementById('add-weather');
    addWeatherBtn.addEventListener('click', addWeather);

    const editWeatherBtn = document.getElementById('edit-weather');
    editWeatherBtn.addEventListener('click', editWeather);

    const loadHistoryBtn = document.getElementById('load-history');
    loadHistoryBtn.addEventListener('click', loadHistory);

    const weatherList = document.getElementById('list');
    weatherList.innerHTML = '';

    let editID = "";

    async function loadHistory() {

        const response = await fetch(url);
        const data = await response.json();

        weatherList.innerHTML = '';

        Object.values(data).forEach(element => {

            const div = document.createElement('div');
            div.classList.add('container');
            div.id = element._id;

            const h2 = document.createElement('h2');
            h2.textContent = element.location;

            const h3 = document.createElement('h3');
            h3.textContent = element.date;

            const h3Temp = document.createElement('h3');
            h3Temp.id = 'celsius';
            h3Temp.textContent = element.temperature;

            const divButtons = document.createElement('div');
            divButtons.classList.add('buttons-container');

            const changeBtn = document.createElement('button');
            changeBtn.classList.add('change-btn');
            changeBtn.textContent = 'Change';
            changeBtn.addEventListener('click', loadDataToForm);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteWeather);

            divButtons.appendChild(changeBtn);
            divButtons.appendChild(deleteBtn);

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h3Temp);
            div.appendChild(divButtons);

            weatherList.appendChild(div);


        });

    }

    async function addWeather() {

        editWeatherBtn.addEventListener('click', editWeather);

        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const temperature = document.getElementById('temperature').value;

        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                date,
                temperature
            })
        }

        document.getElementById('location').value = '';
        document.getElementById('date').value = '';
        document.getElementById('temperature').value = '';

        await fetch(url, options);

        await loadHistory();

    }

    function loadDataToForm(e) {

        addWeatherBtn.disabled = true;
        editWeatherBtn.disabled = false;

        const div = e.target.parentElement.parentElement;
        div.remove();

        editID = div.id;

        const loc = document.getElementById('location');
        const temp = document.getElementById('temperature');
        const dat = document.getElementById('date');

        loc.value = div.children[0].textContent;
        temp.value = div.children[2].textContent;
        dat.value = div.children[1].textContent;


    }

    async function editWeather() {

        const location = document.getElementById('location');
        const temperature = document.getElementById('temperature');
        const date = document.getElementById('date');

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "location": location.value,
                "date": date.value,
                "temperature": temperature.value
            })
        }

        await fetch(url + editID, options);
        editID = "";
        await loadHistory();

        location.value = '';
        date.value = '';
        temperature.value = '';

        addWeatherBtn.disabled = false;
        editWeatherBtn.disabled = true;

    }

    async function deleteWeather(e) {

        const div = e.target.parentElement.parentElement;
        const id = div.id;

        const options = {
            method: 'DELETE'
        }

        await fetch(url + id, options);

        await loadHistory();

    }

}

attachEvents();