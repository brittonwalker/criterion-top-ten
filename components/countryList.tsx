import Content from "./content";
import addLeadingZero from "../utils";
import FilmItem from "./film";

type Film = {
  title: string;
  director: string;
  count: number;
  suggestedBy: string[];
  image: string;
  productPage?: string;
  meta?: {
    releaseDate: string;
    streamingLink: string;
    countries: string[];
    languages: string[];
  };
};

interface ListProps {
  data: { name: string; count: number; films: Film[] }[];
}

const CountryList = (props: ListProps) => {
  const { data } = props;
  return (
    <Content>
      <p className="body-1 text-gray-600 mb-8">
        The top ten countries of origin and their top ten films.
      </p>
      <ol>
        {data.map((director, idx) => {
          return (
            <li key={idx} className="mb-8 border-t-2 pt-8">
              <div className="md:grid md:grid-cols-12 gap-8">
                <div className="col-span-4 flex flex-col relative">
                  <div className="md:sticky top-4">
                    <div className="heading-2">{addLeadingZero(idx + 1)}</div>
                    <div className="mb-8">
                      <div className="heading-2">
                        <div className="mb-2">{director.name}</div>
                        <div className="text-sm text-gray-500">
                          {director.count} films mentioned.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div
                    className={`grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8`}
                  >
                    {director.films
                      .sort((a, b) => b.count - a.count)
                      .slice(0, 10)
                      .map((film, filmID) => {
                        return (
                          <div key={filmID}>
                            <FilmItem film={film} />
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
