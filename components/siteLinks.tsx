import Link from "next/link";
import { useRouter } from "next/router";

export default function SiteLinks() {
  const router = useRouter();
  const { pathname } = router;
  const isFilmsPage = pathname === "/";
  return (
    <div className="flex gap-4">
      <Link
        href="/"
        className={`border border-black rounded-full text-[1.5rem] leading-[1.875rem] hover:no-underline px-4 py-1 ${
          isFilmsPage
            ? "bg-black text-white"
            : "hover:bg-black hover:text-white"
        }}`}
      >
        Films
      </Link>
      <Link
        href="/directors"
        className={`border border-black rounded-full text-[1.5rem] leading-[1.875rem] hover:no-underline px-4 py-1 ${
          !isFilmsPage
            ? "bg-black text-white"
            : "hover:bg-black hover:text-white"
        }}`}
      >
        Directors
      </Link>
    </div>
  );
}
