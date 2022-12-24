import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "Criterion Top Ten";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
  totalLanguages: number;
  totalCountries: number;
}

export default function Layout({
  children,
  home,
  totalFilms,
  totalPosts,
  totalDirectors,
  totalLanguages,
  totalCountries,
}: LayoutProps) {
  const headerProps = {
    totalFilms,
    totalPosts,
    totalDirectors,
    totalLanguages,
    totalCountries,
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Find the best films from The Criterion Collection's Top Ten Lists"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
