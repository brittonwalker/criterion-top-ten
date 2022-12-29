import Image from "next/image";
import StreamLink from "./streamLink";

const FilmItem = ({
  item,
  includeCount,
  includeDirector,
}: {
  item: Film;
  includeCount?: boolean;
  includeDirector?: boolean;
}) => {
  return (
    <div>
      <a
        href={item.productPage}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black no-underline hover:no-underline"
      >
        <Image
          src={item.image}
          width={384}
          height={476}
          alt={`Criterion cover art for ${item.title}`}
          className="w-full mb-2"
        />
        <div className="heading-3">{item.title}</div>
        {includeDirector && (
          <div className="text-gray-600">Director: {item.director}</div>
        )}
      </a>
      {item?.meta?.streamingLink && (
        <StreamLink url={item.meta.streamingLink} />
      )}
      {includeCount && <div>Mentioned {item.count} times.</div>}
    </div>
  );
};

export default FilmItem;
