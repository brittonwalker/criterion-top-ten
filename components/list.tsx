import Content from "./content";
import Image from "next/image";

type film = {
  title: string;
  director: string;
  suggestedBy: string[];
  count: number;
  image: string;
};

type filmGroup = film[][];

const List = ({ items }: { items: filmGroup }) => {
  const addLeadingZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <Content>
      <ol>
        {items.map((group, groupID) => {
          return (
            <li key={groupID} className="mb-8 border-t-2 pt-8">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="col-span-4 flex flex-col relative">
                  <div className="md:sticky top-4">
                    <div className="text-[48px] leading-[64px] mb-[.5em]">
                      {addLeadingZero(groupID + 1)}{" "}
                      {group.length > 1 && "(tie)"}
                    </div>
                    <div className="mb-8 hidden md:flex flex-col gap-y-1">
                      {group.map((film, filmID) => {
                        return (
                          <div
                            key={filmID}
                            className="text-[1.5rem] leading-[1.875rem]"
                          >
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
                <div className="col-span-8">
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
                          <div className="text-[1.5rem] leading-[1.875rem]">
                            {film.title}
                          </div>
                          <div className="text-gray-600">
                            Directed by: {film.director}
                          </div>
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
