type film = {
  title: string;
  director: string;
  suggestedBy: string[];
  count: number;
};

const groupFilmsByCount = (films: film[]) => {
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

const topTenFilms = (films: film[]) => {
  const groupedByCount = groupFilmsByCount(films);
  const highestCountFilms = Object.keys(groupedByCount)
    .sort((a, b) => Number(b) - Number(a))
    .slice(0, 10)
    .map((count) => {
      return groupedByCount[count];
    });
  return highestCountFilms;
};

export default topTenFilms;
