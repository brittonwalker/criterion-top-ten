import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
import { getSortedFilmsData } from "../lib/films";
import List from "../components/list";
import Content from "../components/content";
import { GrGithub } from "react-icons/gr";

type film = {
  title: string;
  director: string;
  suggestedBy: string[];
  count: number;
  image: string;
};

type films = film[];

type filmGroup = films[];

export default function Home({
  data,
}: {
  data: {
    sortedFilms: film[];
    totalCount: number;
    totalPosts: number;
    topTenList: filmGroup;
  };
}) {
  const { totalCount, topTenList, totalPosts } = data;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <Content>
          <div className="py-[100px] text-[2.25rem]">
            <h2 className="text-[3.75rem] mb-[.5em]">Criterion Top Ten</h2>
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
                guests that work in or adjecent to the film industry. More
                features coming soon (wink emoji).
              </p>
              <p>
                The data pulls from {totalPosts} posts and features {totalCount}{" "}
                films in total.
              </p>
            </div>
          </div>
        </Content>
        <List items={topTenList} />
      </main>
      <footer className="py-8">
        <Content>
          <div className="flex justify-end items-center gap-4">
            <p>Created by: Britton Walker</p>
            <div className="text-[32px]">
              <a
                href="https://github.com/brittonwalker/criterion-top-ten"
                target="_blank"
                rel="noreferrer nofollow"
                className="text-black"
              >
                <GrGithub />
              </a>
            </div>
          </div>
        </Content>
      </footer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allFilmsData = getSortedFilmsData();

  return {
    props: {
      data: allFilmsData,
    },
  };
};
