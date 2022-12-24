const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const data = require("../data/initialPosts.json");
const { topTenFilms } = require("./topTenFunctions");

const createFilmList = async () => {
  const filmList = [];

  for (let i = 0; i < data.length; i++) {
    const { link } = data[i];

    const response = await axios.get(link, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    const $ = cheerio.load(response.data);

    $(".editorial-film-listitem").each((_idx, el) => {
      const film = {
        title: $(".editorial-film-listitem__title", el).text().trim(),
        director: $(".editorial-film-listitem__director", el).text().trim(),
        count: 1,
        suggestedBy: [data[i].title.replace(`’s Top 10`, "")],
        image: $("img", el).attr("src"),
        productPage: $(".editorial-film-listitem__thumbnail-img > a", el).attr(
          "href"
        ),
      };

      if (filmList.some((f) => f.title === film.title)) {
        filmList.forEach((f) => {
          if (f.title === film.title) {
            f.count += 1;
            f.suggestedBy.push(data[i].title.replace(`’s Top 10`, ""));
          }
        });

        return;
      }
      filmList.push(film);
    });
    console.log(`${i + 1} out of ${data.length}`);
  }

  fs.writeFile("./data/films.json", JSON.stringify(filmList), (err) => {
    if (err) {
      throw err;
    }
    console.log("Data has been written to file successfully.");
  });

  topTenFilms(filmList);
};

createFilmList();
