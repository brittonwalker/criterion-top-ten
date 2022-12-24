const fs = require("fs");

const topTenDirectors = (directors) => {
  const topTen = directors.sort((a, b) => b.count - a.count).slice(0, 10);

  fs.writeFile("./data/topTenDirectors.json", JSON.stringify(topTen), (err) => {
    if (err) {
      throw err;
    }
    console.log(
      "The top ten directors have been written to file successfully."
    );
  });
};

const groupFilmsByCount = (films) => {
  const groupedFilms = films.reduce((acc, film) => {
    const key = film.count;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(film);
    return acc;
  }, {});
  return groupedFilms;
};

const topTenFilms = (films) => {
  const groupedByCount = groupFilmsByCount(films);
  const highestCountFilms = Object.keys(groupedByCount)
    .sort((a, b) => Number(b) - Number(a))
    .slice(0, 10)
    .map((count) => {
      return groupedByCount[count];
    });

  fs.writeFile(
    "./data/topTenFilms.json",
    JSON.stringify(highestCountFilms),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("The top ten films have been written to file successfully.");
    }
  );
};

module.exports = { topTenDirectors, topTenFilms };
