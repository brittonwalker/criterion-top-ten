import Content from './content';

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
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 flex flex-col">
                  <h3 className="text-[48px] leading-[64px] mb-[.5em]">
                    {addLeadingZero(groupID + 1)} {group.length > 1 && '(tie)'}
                  </h3>
                  <div className="mb-8">
                    {group.map((film, filmID) => {
                      return (
                        <div key={filmID} className="text-[1.75rem]">
                          <h4>{film.title}</h4>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-auto">
                    <p>Mentioned {group[0].count} times.</p>
                  </div>
                </div>
                <div className="col-span-8">
                  <div className={`grid grid-cols-3 gap-x-4 gap-y-8`}>
                    {group.map((film, filmID) => {
                      return (
                        <div key={filmID}>
                          <img src={film.image} className="w-full mb-2" />
                          <h4 className="text-[1.75rem]">{film.title}</h4>
                          <p className="text-gray-600">
                            Directed by: {film.director}
                          </p>
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
