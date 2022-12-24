import films from "../data/films.json";
import posts from "../data/initialPosts.json";
import directors from "../data/directors.json";

export function getSortedFilmsData(): {
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
} {
  const totalFilms = films.length;
  const totalPosts = posts.length;
  const totalDirectors = directors.length;

  return {
    totalFilms,
    totalPosts,
    totalDirectors,
  };
}
