import Content from "./content";
import addLeadingZero from "../utils";
import FilmItem from "./film";

type Director = {
  name: string;
  count: number;
  films: {
    title: string;
    count: number;
    suggestedBy: string[];
    image: string;
    productPage?: string;
    meta?: {
      countries: string[];
      languages: string[];
      releaseDate: string;
      streamingLink: string;
    };
  }[];
};

const DirectorsList = ({ data }: { data: Director[] }) => {
  return (
    <Content>
      <p className="body-1 text-gray-600 mb-8">
        The top ten directors mentioned and their films on the list.
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
                        <div>{director.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div
                    className={`grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8`}
                  >
                    {director.films.map((film, filmID) => {
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

export default DirectorsList;
