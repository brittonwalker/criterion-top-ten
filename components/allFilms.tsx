import { useState, useRef, useEffect } from "react";
import Content from "./content";
import FilmItem from "./film";

const AllFilms = ({ films }: { films: Film[] }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("count-desc");
  const [streamingOnly, setStreamingOnly] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const sortFn = () => {
    switch (sortBy) {
      case "title-asc":
        return sortTitleAsc;
      case "title-desc":
        return sortTitleDesc;
      case "count-asc":
        return sortCountAsc;
      case "count-desc":
        return sortCountDesc;
      default:
        return sortCountDesc;
    }
  };

  const sortTitleAsc = (a: Film, b: Film) => {
    const aTitle = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const bTitle = b.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (aTitle < bTitle) {
      return -1;
    }
    if (aTitle > bTitle) {
      return 1;
    }
    return 0;
  };

  const sortTitleDesc = (a: Film, b: Film) => {
    const aTitle = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const bTitle = b.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (aTitle > bTitle) {
      return -1;
    }
    if (aTitle < bTitle) {
      return 1;
    }
    return 0;
  };

  const sortCountAsc = (a: Film, b: Film) => {
    if (a.count < b.count) {
      return -1;
    }
    if (a.count > b.count) {
      return 1;
    }
    return 0;
  };

  const sortCountDesc = (a: Film, b: Film) => {
    if (a.count > b.count) {
      return -1;
    }
    if (a.count < b.count) {
      return 1;
    }
    return 0;
  };

  const filteredFilms = films
    .filter((film) => {
      if (streamingOnly) {
        return film.meta.streamingLink;
      }
      return true;
    })
    .filter((film) => {
      if (search) {
        return film.title.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    })
    .sort(sortFn());

  return (
    <Content>
      <div className="mb-8 border-b-2">
        <div className="flex gap-4 items-center pb-8">
          <input
            type="text"
            placeholder="Search Title..."
            ref={inputRef}
            className="border rounded-lg px-4 py-2"
            onChange={() => {
              setSearch(inputRef.current.value);
            }}
          />
          <select
            className="border border-black rounded-lg px-4 py-2 ml-4"
            onChange={selectChange}
            defaultValue={sortBy}
          >
            <option value="title-asc">Title A..Z</option>
            <option value="title-desc">Title Z..A</option>
            <option value="count-desc">Count (Highest to lowest)</option>
            <option value="count-asc">Count (Lowest to highest)</option>
          </select>
          {/* streaming only checkbox */}
          <div className="flex items-center ml-4">
            <input
              type="checkbox"
              id="streamingOnly"
              onChange={(value) => {
                setStreamingOnly(value.target.checked);
              }}
            />
            <label className="ml-2" htmlFor="streamingOnly">
              Streaming only
            </label>
          </div>
        </div>
        <p className="mr-auto mb-4">
          {filteredFilms.length} <span className="text-gray-400">Results</span>
        </p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {filteredFilms
          .sort(sortFn())
          .filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((film, idx) => (
            <div key={idx}>
              <FilmItem item={film} includeCount includeDirector />
            </div>
          ))}
      </div>
    </Content>
  );
};

export default AllFilms;
