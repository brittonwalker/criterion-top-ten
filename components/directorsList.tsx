import Content from "./content";
import Image from "next/image";

interface DirectorsListProps {
  data: {
    name: string;
    count: number;
    films: {
      title: string;
      count: number;
      image: string;
      suggestedBy: string[];
    }[];
  }[];
}

const DirectorsList = (props: DirectorsListProps) => {
  const addLeadingZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <Content>
      <ol>
        {props.data.map((director, idx) => {
          return (
            <li key={idx} className="mb-8 border-t-2 pt-8">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="col-span-4 flex flex-col relative">
                  <div className="md:sticky top-4">
                    <h3 className="text-[48px] leading-[64px] mb-[.5em]">
                      {addLeadingZero(idx + 1)}
                    </h3>
                    <div className="mb-8 hidden md:block">
                      <div className="text-[1.5rem] leading-[1.875rem]">
                        <h4>{director.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8`}
                  >
                    {director.films.map((film, filmID) => {
                      return (
                        <div key={filmID}>
                          <Image
                            src={film.image}
                            width={384}
                            height={476}
                            alt={`Criterion cover art for ${film.title}`}
                            className="w-full mb-2"
                          />
                          <h4 className="text-[1.5rem] leading-[1.875rem]">
                            {film.title}
                          </h4>
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
