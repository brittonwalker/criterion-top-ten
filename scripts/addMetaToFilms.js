const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const addMetaToFilms = async () => {
  const films = require("../data/films.json");
  const filmList = [];
  for (let i = 0; i < films.length; i++) {
    const { productPage } = films[i];
    const response = await axios.get(productPage, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const $ = cheerio.load(response.data);
    const film = {
      ...films[i],
      meta: {
        country: $(`[itemprop="countryOfOrigin"]`).text().trim(),
        language: $(`[itemprop="inLanguage"]`).text().trim(),
        releaseDate: $(`[itemprop="datePublished"]`).text().trim(),
        streamingLink: $(`.film-streaming__channel-link`)?.attr("href") || "",
      },
    };
    filmList.push(film);
    console.log(`${i + 1} out of ${films.length}`);
  }
  fs.writeFile("./data/films.json", JSON.stringify(filmList), (err) => {
    if (err) {
      throw err;
    }
    console.log("Data has been written to file successfully.");
  });
};

addMetaToFilms();
