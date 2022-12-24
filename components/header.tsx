import Content from "./content";

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
        <div className="pt-4 lg:pt-8 body-1 lg:display-1">
          <h1 className="heading-1">Criterion Top Ten</h1>
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
          </div>
        </div>
      </Content>
    </header>
  );
};

export default Header;
