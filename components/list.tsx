import Content from "./content";
import Image from "next/image";
import addLeadingZero from "../utils";
import StreamLink from "./streamLink";

type Films = {
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
  items: Films[][];
}

const List = ({ items }: ListProps) => {
  return (
    <Content>
      <p className="body-1 text-gray-600 mb-8">The ten most suggested films.</p>
      <ol>
        {items.map((group, groupID) => {
          return (
            <li key={groupID} className="mb-8 border-t-2 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 flex flex-col relative">
                  <div className="md:sticky top-4">
                    <div className="heading-2 mb-[.5em]">
                      {addLeadingZero(groupID + 1)}{" "}
                      {group.length > 1 && "(tie)"}
                    </div>
                    <div className="mb-8 hidden md:flex flex-col gap-y-1">
                      {group.map((film, filmID) => {
                        return (
                          <div key={filmID} className="heading-3">
                            <div>{film.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p>Mentioned {group[0].count} times.</p>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8`}
                  >
                    {group.map((film, filmID) => {
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
                          <div className="text-gray-600">
                            Directed by: {film.director}
                          </div>
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

export default List;
