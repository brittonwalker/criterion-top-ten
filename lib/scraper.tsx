import * as cheerio from 'cheerio';
import axios from 'axios';
import posts from '../data/initialPosts.json';
const fs = require('fs');

const getCurrentPosts = async (url: string) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const films = $('.pk-c-tout');
    const filmList = [];
    films.each(function () {
      const title = $(this).find('.pk-c-tout__title').text();
      const link = $(this).find('.pk-c-tout__title-link').attr('href');
      filmList.push({
        title,
        link,
      });
    });
    return filmList;
  } catch (error) {
    throw error;
  }
};

const getFilmsFromPost = async (url: string) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const films = $('.editorial-film-listitem');
    const filmList = [];
    films.each(function () {
      const title = $(this).find('.editorial-film-listitem__title').text();
      const director = $(this)
        .find('.editorial-film-listitem__director')
        .text();
      const link = $(this).find('a').attr('href');
      filmList.push({
        title,
        director,
        link,
      });
    });
    return filmList;
  } catch (error) {
    throw error;
  }
};

const scrape = async () => {
  const urls = [];
  const data = [];

  for (const post of posts) {
    urls.push(post.link);
  }

  for (const url of urls) {
    const films = await getFilmsFromPost(url);
    data.push(...films);
  }
  fs.writeFileSync('data/films.json', JSON.stringify(data));
};

export default scrape;
