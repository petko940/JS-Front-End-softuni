function movies(arr) {
    let movies = {};

    for (const iterator of arr) {
        if (iterator.includes("addMovie ")) {
            movieName = iterator.split("addMovie ")[1]
            movies[movieName] = {};
            movies[movieName].name = movieName;
        } else if (iterator.includes(" directedBy ")) {
            let [movie, director] = iterator.split(" directedBy ");
            if (movies.hasOwnProperty(movie)) {
                movies[movie].director = director;
            }
        } else {
            let [movie, date] = iterator.split(" onDate ");
            if (movies.hasOwnProperty(movie)) {
                movies[movie].date = date;
            }
        }
    }

    for (const key in movies) {
        if (movies[key].hasOwnProperty("name") && movies[key].hasOwnProperty("director") && movies[key].hasOwnProperty("date")) {
            console.log(JSON.stringify(movies[key]));
        }
    }

}

