import Content from "./content";

interface SiteLinksProps {
  activeLink: string;
  setSiteLink: (siteLink: string) => void;
}

const SiteLinks = ({ activeLink, setSiteLink }: SiteLinksProps) => {
  const linkClasses = {
    active: "bg-black text-white",
    default: "bg-white text-black hover:bg-black hover:text-white",
  };
  return (
    <Content>
      <div className="flex gap-4 mb-8 flex-wrap">
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
        <button
          className={`button ${
            activeLink === "countries"
              ? linkClasses.active
              : linkClasses.default
          }`}
          onClick={() => setSiteLink("countries")}
          value="countries"
        >
          Countries
        </button>
        <button
          className={`button ${
            activeLink === "languages"
              ? linkClasses.active
              : linkClasses.default
          }`}
          onClick={() => setSiteLink("languages")}
          value="languages"
        >
          Languages
        </button>
      </div>
    </Content>
  );
};

export default SiteLinks;
