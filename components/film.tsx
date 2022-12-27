import Image from "next/image";
import StreamLink from "./streamLink";
import { Film } from "../types/filmTypes";

const FilmItem = ({ item }: { item: Film }) => {
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
      </a>
      {item?.meta?.streamingLink && (
        <StreamLink url={item.meta.streamingLink} />
      )}
    </div>
  );
};

export default FilmItem;
