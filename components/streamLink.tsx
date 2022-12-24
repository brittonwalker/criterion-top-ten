import { RxExternalLink } from "react-icons/rx";

const StreamLink = ({ url }: { url: string }) => {
  return (
    <div className="my-2">
      <a
        href={url}
        target="_blank"
        rel="noreferrer nofollow"
        className="text-sm bg-black rounded-md px-2 py-1 text-white inline-flex items-center gap-2"
        aria-label="Streaming link"
      >
        Criterion Channel
        <RxExternalLink className="text-current fill-current" />
      </a>
    </div>
  );
};

export default StreamLink;
