function movies(arr) {
    let dict = {}
    for (let x of arr) {
        if (x.includes("addMovie ")) {
            dict[x.split("addMovie ")[1]] = {}
            dict[x.split("addMovie ")[1]].name = x.split(" ")[1]
        } else if (x.includes("directedBy")) {
            let movie = x.split(" directedBy ")[0];
            let director = x.split(" directedBy ")[1];

            if (movie in dict) {
                dict[movie].director = director;
            }
        } else if (x.includes("onDate")) {
            let movie = x.split(" onDate ")[0];
            let date = x.split(" onDate ")[1];

            if (movie in dict) {
                dict[movie].date = date;
            }
        }
    }

    for (let key in dict) {
        if (dict[key].director && dict[key].date && dict[key].name) {
            console.log(JSON.stringify(dict[key]));
        }
    }
}

