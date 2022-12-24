import Content from "./content";
import Image from "next/image";
import addLeadingZero from "../utils";
import StreamLink from "./streamLink";

interface CountryListProps {
  data: {
    name: string;
    count: number;
    films: {
      title: string;
      count: number;
      image: string;
      suggestedBy: string[];
      meta: {
        country: string;
        releaseDate: string;
        language: string;
        streamingLink: string;
      };
    }[];
  }[];
}

const CountryList = (props: CountryListProps) => {
  return (
    <Content>
      <ol>
        {props.data.map((director, idx) => {
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
                            <Image
                              src={film.image}
                              width={384}
                              height={476}
                              alt={`Criterion cover art for ${film.title}`}
                              className="w-full mb-2"
                            />
                            <div className="heading-3">{film.title}</div>
                            {film.meta.streamingLink && (
                              <StreamLink url={film.meta.streamingLink} />
                            )}
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
