function towns(array) {
    for (const t of array) {
        let [town, latitude, longitude] = t.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let output = {
            town,
            latitude,
            longitude
        }
        console.log(output);
    }
}
