function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let typeList = arr.pop();

    let songs = []
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeList === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        for (const iterator of songs) {
            if (iterator.typeList === typeList) {
                console.log(iterator.name);
            }
        }
    }

}
