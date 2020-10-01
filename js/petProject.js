const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt("number of watched films ?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("number of watched films ?", "");
        }
    },

    writeYourGenres: () => {
        for (let index = 0; index < 1; index++) {
            let userGanre = prompt(
                `Your favorite genres separated by coma`, '').toLowerCase();
            if (userGanre == null ||
                userGanre == '') {
                index--; 
            } else { 
                personalMovieDB.genres = userGanre.split(', '); 
                personalMovieDB.genres.sort();
            }
        }
    },

    showYourGenres: () => {
        personalMovieDB.genres.forEach((element, index) => {
            console.log(`Favorite genre #${index+1} - ${element}`);
        });
    },

    toggleVisebleMyDB: () => {
        personalMovieDB.privat = !(personalMovieDB.privat);
    },

    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    rememberMyFilm: () => {

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
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert("You watched a small amaunt of films");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert("You typical viewer");
        } else if (personalMovieDB.count > 30) {
            alert("Woww you such a big lover of cinema");
        } else {
            alert("Error");
        }
    },
};
personalMovieDB.writeYourGenres();
personalMovieDB.showYourGenres();
console.log(personalMovieDB);