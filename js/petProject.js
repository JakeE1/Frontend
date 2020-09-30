let numberOfFilms = +prompt(
    "How much Films Did you saw", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastWatchingFilm = prompt(git 
        "What the last film you watched", ""),
    rateOfLastFilm = prompt(
        "Please rate your last film", ""),
    lastWatchingFilmSecond = prompt(
        "What the last film you watched", ""),
    rateOfLastFilmSecond = prompt(
        "Please rate your last film", "");

personalMovieDB.movies[lastWatchingFilm] = rateOfLastFilm;
personalMovieDB.movies[lastWatchingFilmSecond] = rateOfLastFilmSecond;

console.log(personalMovieDB);