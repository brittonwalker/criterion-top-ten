import films from "../data/films.json";
import posts from "../data/initialPosts.json";
import directors from "../data/directors.json";
import countries from "../data/countries.json";

export function getSortedFilmsData(): {
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
  totalCountries: number;
} {
  const totalFilms = films.length;
  const totalPosts = posts.length;
  const totalDirectors = directors.length;
  const totalCountries = countries.length;

  return {
    totalFilms,
    totalPosts,
    totalDirectors,
    totalCountries,
  };
}
