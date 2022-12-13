function movies(movies) {

    let moviesList = [];

    for (const line of movies) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            moviesList.push({ name });
        } else if (line.includes('directedBy')) {
            let [movieName, directorName] = line.split(' directedBy ');
            let movie = moviesList.find(element => element.name === movieName)
            if (movie) {
                movie.director = directorName;
            }
        } else if (line.includes('onDate')) {
            let [movieName, date] = line.split(' onDate ');
            let movie = moviesList.find(element => element.name === movieName)
            if (movie) {
                movie.date = date;
            }
        }


    }

    moviesList.forEach(element => {
        if (element.name && element.director && element.date)
            console.log(JSON.stringify(element));
    });
}


movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]

);