import films from "../data/films.json";
import posts from "../data/initialPosts.json";
import directors from "../data/directors.json";
import languages from "../data/languages.json";
import countries from "../data/countries.json";

export function getSortedFilmsData(): {
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
  totalLanguages: number;
  totalCountries: number;
} {
  const totalFilms = films.length;
  const totalPosts = posts.length;
  const totalDirectors = directors.length;
  const totalLanguages = languages.length;
  const totalCountries = countries.length;

  return {
    totalFilms,
    totalPosts,
    totalDirectors,
    totalLanguages,
    totalCountries,
  };
}
