function exam() {

    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    // inputs
    const food = document.getElementById('food');
    const time = document.getElementById('time');
    const calories = document.getElementById('calories');


    const loadMealsBtn = document.getElementById('load-meals');
    loadMealsBtn.addEventListener('click', loadMeals);

    const addMealBtn = document.getElementById('add-meal');
    addMealBtn.addEventListener('click', addMeal);

    const editMealBtn = document.getElementById('edit-meal');
    editMealBtn.addEventListener('click', editMeal);


    const meals = document.getElementById('list');
    meals.innerHTML = '';

    let editID;

    async function loadMeals() {
        meals.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        console.log(data);
        Object.values(data).forEach(element => {

            const divMeal = document.createElement('div');
            divMeal.classList.add('meal');
            divMeal.id = element._id;

            const h2 = document.createElement('h2');
            h2.textContent = element.food;

            const h3Time = document.createElement('h3');
            h3Time.textContent = element.time;

            const h3Calories = document.createElement('h3');
            h3Calories.textContent = element.calories;

            const divBtns = document.createElement('div');
            divBtns.id = 'meal-buttons';

            const changeBtn = document.createElement('button');
            changeBtn.classList.add('change-meal');
            changeBtn.textContent = 'Change';
            changeBtn.addEventListener('click', changeMealFillInputs);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-meal');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteMeal);

            divBtns.appendChild(changeBtn);
            divBtns.appendChild(deleteBtn);

            divMeal.appendChild(h2);
            divMeal.appendChild(h3Time);
            divMeal.appendChild(h3Calories);
            divMeal.appendChild(divBtns);

            meals.appendChild(divMeal);

        })

    }

    async function addMeal(e) {
        e.preventDefault();
        if (food.value == '' || time.value == '' || calories.value == '') {
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                food: food.value,
                time: time.value,
                calories: calories.value
            })
        }

        food.value = '';
        time.value = '';
        calories.value = '';

        await fetch(baseUrl, options);
        await loadMeals();

    }

    function changeMealFillInputs(e) {

        const div = e.target.parentElement.parentElement;
        editID = div.id;
        console.log(editID);

        food.value = div.children[0].textContent;
        time.value = div.children[1].textContent;
        calories.value = div.children[2].textContent;

        div.remove();

        addMealBtn.disabled = true;
        editMealBtn.disabled = false;

    }

    async function editMeal(e) {
        e.preventDefault();

        if (food.value == '' || time.value == '' || calories.value == '') {
            return;
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                food: food.value,
                calories: calories.value,
                time: time.value,
                _id: editID,
            })
        }

        food.value = '';
        time.value = '';
        calories.value = '';

        await fetch(baseUrl + editID, options);
        await loadMeals();

    }

    async function deleteMeal(e) {

        const div = e.target.parentElement.parentElement;
        editID = div.id;

        const options = {
            method: 'DELETE'
        }

        await fetch(baseUrl + editID, options);
        await loadMeals();

    }

}


exam()