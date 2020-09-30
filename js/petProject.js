let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.count = start();
rememberMyFilm();
writeYourGenres();
showMyDB();
detectPersonalLevel();



function writeYourGenres() {
    for (let index = 0; index < 3; index++) {
        personalMovieDB.genres[index] = prompt(
            `Your favorite genre on number ${index+1}`);
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function start() {
    numberOfFilms = +prompt("number of watched films ?", "");
    while (numberOfFilms == '' || numberOfFilms == null ||
        isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("number of watched films ?", "");
    }
    return numberOfFilms;
}

function rememberMyFilm() {

    let bool = true,
        lastFilm = "",
        rateOfLastFilm = "";

    while (bool != false) {

        lastFilm = prompt(
            "What the last film you watched", "");
        rateOfLastFilm = prompt(
            "Please rate your last film", "");

        bool = (lastFilm == "") ? true :
            (lastFilm.length <= 50 && lastFilm != null) ? false : true;
    }

    personalMovieDB.movies[lastFilm] = rateOfLastFilm;
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You watched a small amaunt of films");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("You typical viewer");
    } else if (personalMovieDB.count > 30) {
        alert("Woww you such a big lover of cinema");
    } else {
        alert("Error");
    }
}