import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { GetStaticProps } from "next";
import { getSortedFilmsData } from "../../lib/films";
import List from "../../components/list";
import films from "../../data/films.json";
import AllFilms from "../../components/allFilms";

export default function Home({
  data,
}: {
  data: {
    totalFilms: number;
    totalPosts: number;
    totalDirectors: number;
    totalCountries: number;
  };
}) {
  return (
    <Layout home {...data}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <AllFilms films={films} />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allFilmsData = getSortedFilmsData();

  return {
    props: {
      data: allFilmsData,
    },
  };
};
