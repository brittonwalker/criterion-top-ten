import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
import { getSortedFilmsData } from "../lib/films";
import List from "../components/list";
import topTenList from "../data/topTenFilms.json";
import topTenDirectors from "../data/topTenDirectors.json";
import topTenCountries from "../data/topTenCountries.json";
import DirectorsList from "../components/directorsList";
import SiteLinks from "../components/siteLinks";
import CountryList from "../components/countryList";

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
  const [listSelection, setListSelection] = useState("films");
  return (
    <Layout home {...data}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SiteLinks activeLink={listSelection} setSiteLink={setListSelection} />
      <main>
        {listSelection === "films" && <List items={topTenList} />}
        {listSelection === "directors" && (
          <DirectorsList data={topTenDirectors} />
        )}
        {listSelection === "countries" && (
          <CountryList data={topTenCountries} />
        )}
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
