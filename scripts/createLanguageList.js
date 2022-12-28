const fs = require("fs");
const films = require("../data/films.json");

// rename film.meta.country to film.meta.countries, an array of strings split on comma
// const revisedFilms = films.map((film) => {
//   film.meta.countries = film.meta.country.split(", ");
//   film.meta.languages = film.meta.language.split(", ");
//   delete film.meta.language;
//   delete film.meta.country;
//   return film;
// });

// fs.writeFile("./data/films.json", JSON.stringify(revisedFilms), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Countries and languages have been updated.");
// });

// create a nested list of countries and the films that are from each country, include a count of films from each country
const countries = [];
films.forEach((film) => {
  film.meta.countries.forEach((country) => {
    const countryIndex = countries.findIndex((c) => c.name === country);
    if (countryIndex === -1) {
      countries.push({
        name: country,
        films: [film],
      });
    } else {
      countries[countryIndex].films.push(film);
    }
  });
});

countries.map((country) => {
  country.count = country.films.length;
  return country;
});

// get the top 10 countries by number of films
const top10Countries = countries
  .filter((country) => country.name !== "")
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

fs.writeFile("./data/countries.json", JSON.stringify(countries), (err) => {
  if (err) {
    throw err;
  }
  console.log("Top ten Countries have been written to file successfully.");
});

fs.writeFile(
  "./data/topTenCountries.json",
  JSON.stringify(top10Countries),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Top 10 countries have been written to file successfully.");
  }
);

// // create a nested list of languages and the films that are in each language, include a count of films in each language
const languages = [];
films.forEach((film) => {
  film.meta.languages.forEach((language) => {
    const languageIndex = languages.findIndex((l) => l.name === language);
    if (languageIndex === -1) {
      languages.push({
        name: language,
        films: [film],
      });
    } else {
      languages[languageIndex].films.push(film);
    }
  });
});

languages.forEach((language) => {
  language.count = language.films.length;
});

const top10Languages = languages.sort((a, b) => b.count - a.count).slice(0, 10);

fs.writeFile("./data/languages.json", JSON.stringify(languages), (err) => {
  if (err) {
    throw err;
  }
  console.log("Languages have been written to file successfully.");
});

fs.writeFile(
  "./data/topTenLanguages.json",
  JSON.stringify(top10Languages),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Top 10 languages have been written to file successfully.");
  }
);
