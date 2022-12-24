import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { GetStaticProps } from "next";
import { getSortedFilmsData } from "../../lib/films";
import directors from "../../data/topTenDirectors.json";
import DirectorsList from "../../components/directorsList";

export default function Directors({
  data,
}: {
  data: {
    totalFilms: number;
    totalPosts: number;
    totalDirectors: number;
  };
}) {
  return (
    <Layout home {...data}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <DirectorsList data={directors} />
      </main>
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
