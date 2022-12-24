import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
import { getSortedFilmsData } from "../lib/films";
import List from "../components/list";
import topTenList from "../data/topTenFilms.json";

export default function Home({
  data,
}: {
  data: {
    totalCount: number;
    totalPosts: number;
    totalDirectors: number;
  };
}) {
  const { totalCount, totalPosts } = data;

  return (
    <Layout home totalCount={totalCount} totalPosts={totalPosts}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <List items={topTenList} />
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
