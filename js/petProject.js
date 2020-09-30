function getLastFilm() {

    let bool = true;

    while (bool != false) {

        let lastWatchingFilm = prompt(
            "What the last film you watched", "");

        let bool = (lastWatchingFilm == "") ? true :
            (lastWatchingFilm.length > 0 && lastWatchingFilm.length <= 50) ? false : true;
    }

    return lastWatchingFilm;
}

let numberOfFilms = +prompt("number of watched films ?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

 
const lastWatchingFilm = getLastFilm();
    let rateOfLastFilm = prompt(
        "Please rate your last film", "");

const lastSecondWatchingFilm = getLastFilm(); 
    let rateOfLastFilmSecond = prompt(
        "Please rate your last film", "");

personalMovieDB.movies[lastWatchingFilm] = rateOfLastFilm;
personalMovieDB.movies[lastSecondWatchingFilm] = rateOfLastFilmSecond;

switch(personalMovieDB.count) {
    case (personalMovieDB.count<10) : 
    alert("You watched a small amaunt of films"); break;
    case (personalMovieDB.count>10 && personalMovieDB.count<=30) : 
    alert("You typical viewer"); break;
    case (personalMovieDB.count>30) : 
    alert("Woww you such a big lover of cinema"); break;
    default: alert("Error"); break;
}

console.log(personalMovieDB);