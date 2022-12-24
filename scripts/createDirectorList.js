const films = require("../data/films.json");
const fs = require("fs");
const { topTenDirectors } = require("./topTenFunctions");

const createDirectorList = (directors) => {
  const directorList = [];

  films.forEach((film) => {
    const { director, ...rest } = film;

    console.log(`${directorList.length} out of ${films.length}`);

    if (directorList.some((d) => d.name === director)) {
      directorList.forEach((d) => {
        if (d.name === director) {
          d.count += 1;
          d.films.push({ ...rest });
        }
      });

      return;
    }

    directorList.push({
      name: director,
      count: 1,
      films: [{ ...rest }],
    });
  });

  // sort directorList alphabetically
  directorList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  fs.writeFile("./data/directors.json", JSON.stringify(directorList), (err) => {
    if (err) {
      throw err;
    }
    console.log("The directors list has been written to file successfully.");
  });

  topTenDirectors(directorList);
};

createDirectorList();
