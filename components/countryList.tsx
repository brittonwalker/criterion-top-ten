import Content from "./content";
import addLeadingZero from "../utils";
import FilmItem from "./film";

interface CountryListProps {
  data: { name: string; count: number; films: Film[] }[];
}

const CountryList = ({ data }: CountryListProps) => {
  return (
    <Content>
      <p className="body-1 text-gray-600 mb-8">
        The top ten countries of origin and their top ten films.
      </p>
      <ol>
        {data.map((director, idx) => {
          const { name, count, films } = director;
          return (
            <li key={idx} className="mb-8 border-t-2 pt-8">
              <div className="md:grid md:grid-cols-12 gap-8">
                <div className="col-span-4 flex flex-col relative">
                  <div className="md:sticky top-4">
                    <div className="heading-2">{addLeadingZero(idx + 1)}</div>
                    <div className="mb-8">
                      <div className="heading-2">
                        <div className="mb-2">{name}</div>
                        <div className="text-sm text-gray-500">
                          {count} films mentioned.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div
                    className={`grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8`}
                  >
                    {films
                      .sort((a, b) => b.count - a.count)
                      .slice(0, 10)
                      .map((film, filmID) => {
                        return (
                          <div key={filmID}>
                            <FilmItem item={film} />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Content>
  );
};

export default CountryList;
