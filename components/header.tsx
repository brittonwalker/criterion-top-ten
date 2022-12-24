import Content from "./content";
import SiteLinks from "./siteLinks";

interface HeaderProps {
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
}

const Header = ({
  totalFilms,
  totalPosts,
  totalDirectors,
}: HeaderProps): JSX.Element => {
  return (
    <header>
      <Content>
        <div className="pt-8 text-[2.25rem] leading-[3rem]">
          <h1 className="text-[3.75rem] leading-[4.375rem] mb-[.5em] font-radio tracking-wide">
            Criterion Top Ten
          </h1>
          <div className="max-w-[1200px]">
            <p className="mb-[1em]">
              This site is the analysis of the top ten films from{" "}
              <a
                href="https://www.criterion.com/current/top-10-lists"
                target="_blank"
                rel="noreferrer nofollow"
              >
                The Criterion Collection&apos;s Top Ten Lists
              </a>
              , a verticle of their website that lists the top ten films from
              guests that work in or adjecent to the film industry.
            </p>
            <p className="mb-[1em]">
              The data pulls from {totalPosts} posts featuring {totalFilms}{" "}
              films and {totalDirectors} directors.
            </p>
            <div className="mb-8">
              <SiteLinks />
            </div>
          </div>
        </div>
      </Content>
    </header>
  );
};

export default Header;
