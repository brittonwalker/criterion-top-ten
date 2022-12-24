import Content from "./content";

interface SiteLinksProps {
  activeLink: string;
  setSiteLink: (siteLink: string) => void;
}

const SiteLinks = ({
  activeLink,
  setSiteLink,
}: SiteLinksProps): JSX.Element => {
  const linkClasses = {
    active: "bg-black text-white",
    default: "bg-white text-black hover:bg-black hover:text-white",
  };
  return (
    <Content>
      <div className="flex gap-4 mb-8">
        <button
          className={`button ${
            activeLink === "films" ? linkClasses.active : linkClasses.default
          }`}
          onClick={() => setSiteLink("films")}
          value="films"
        >
          Films
        </button>
        <button
          className={`button ${
            activeLink === "directors"
              ? linkClasses.active
              : linkClasses.default
          }`}
          onClick={() => setSiteLink("directors")}
          value="directors"
        >
          Directors
        </button>
      </div>
    </Content>
  );
};

export default SiteLinks;
