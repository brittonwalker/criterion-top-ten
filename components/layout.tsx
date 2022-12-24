import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Content from "./content";
import { GrGithub } from "react-icons/gr";

export const siteTitle = "Criterion Top Ten";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
  totalFilms: number;
  totalPosts: number;
  totalDirectors: number;
}

export default function Layout({
  children,
  home,
  totalFilms,
  totalPosts,
  totalDirectors,
}: LayoutProps) {
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
      <header>
        <Content>
          <div className="pt-8 pb-[100px] text-[2.25rem] leading-[3.15rem]">
            <h2 className="text-[3.75rem] leading-[4.375rem] mb-[.5em]">
              Criterion Top Ten
            </h2>
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
                The data pulls from {totalPosts} posts featuring {totalFilms}{" "}
                films and {totalDirectors} directors.
              </p>
            </div>
          </div>
        </Content>
      </header>
      <main>{children}</main>
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
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
