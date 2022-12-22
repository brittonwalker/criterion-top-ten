import films from '../data/films.json';
import topTenFilms from '../utils/topTenFunctions';
import posts from '../data/initialPosts.json';

export function getSortedFilmsData() {
  const sortedFilms = films.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  const totalCount = films.length;

  const topTenList = topTenFilms(sortedFilms);

  const totalPosts = posts.length;

  return {
    sortedFilms,
    totalCount,
    topTenList,
    totalPosts,
  };
}
