function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = input.shift();
    let typeOfCommand = input.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let currentSong = new Song(type, name, time);
        songs.push(currentSong);

        if (typeOfCommand === 'all') {
            console.log(name);
        } else if (typeOfCommand === type) {
            console.log(name);
        }
    }
}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);