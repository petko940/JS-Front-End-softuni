function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let restaurants = {};
        const inputs = document.querySelector('textarea').value;
        let restaurantsData = JSON.parse(inputs);

        restaurantsData.forEach(element => {

            let [restaurant, workers] = element.split(' - ');
            if (!restaurants.hasOwnProperty()) {
                restaurants[restaurant] = {
                    averageSalary: 0,
                    bestSalary: -1,
                    workers: {},
                }
            }

            let totalSalary = 0;
            for (const iterator of workers.split(", ")) {
                let [name, salary] = iterator.split(" ")
                totalSalary += Number(salary)
                restaurants[restaurant].workers[name] = Number(salary)
                if (Number(salary) > restaurants[restaurant].bestSalary) {
                    restaurants[restaurant].bestSalary = Number(salary);
                }
            }
            restaurants[restaurant].averageSalary = totalSalary / workers.split(", ").length;
        });

        let bestRestaurant = {
            name: "",
            averageSalary: 0,
            bestSalary: -1,
            workers: {},
        };

        Object.entries(restaurants).forEach(element => {
            const restaurantsData = element[1];
            if (restaurantsData.averageSalary > bestRestaurant.averageSalary) {
                bestRestaurant.name = element[0];
                bestRestaurant.averageSalary = restaurantsData.averageSalary;
                bestRestaurant.bestSalary = restaurantsData.bestSalary;
                bestRestaurant.workers = restaurantsData.workers;
            }
            console.log(restaurantsData);
        });

        let outputBestRestaurant = document.querySelector("#bestRestaurant p");
        outputBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
    
        let outputWorkers = document.querySelector("#workers p");

        Object.entries(bestRestaurant.workers).forEach(element => {
            outputWorkers.textContent += `Name: ${element[0]} With Salary: ${element[1]} `
        })
    }
}

