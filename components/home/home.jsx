import Link from "next/link";
import HomeTitle from "./title";

import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <section className="w-screen h-screen flex items-center justify-center flex-col relative bg-neutral-950 text-neutral-50">
      <HomeTitle text={"Astronomy"} />
      <HomeTitle text={"Space"} />
      <p className="text-neutral-400 my-4 md:w-100 w-fit px-10 text-center">
        Space stuff all in one place with posts, videos, thoughts, and
        discoveries.
      </p>
      <Link
        className="p-4 border-1 border-neutral-800 rounded-full mt-4 hover:bg-neutral-800 flex items-center gap-2"
        href={"/discover"}
        aria-label="EXPLORE"
      >
        <ArrowUpRight />
      </Link>
      <footer className="absolute bottom-4 text-neutral-400">
        <p>
          -/
          <a
            href="https://github.com/shaikali-c"
            className="hover:underline hover:text-neutral-200 transition-all"
          >
            {" "}
            By ShaikALi
          </a>
        </p>
      </footer>
    </section>
  );
}
