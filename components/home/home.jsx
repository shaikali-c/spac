import Link from "next/link";
import HomeTitle from "./title";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <section className="w-screen h-screen flex items-center justify-center flex-col relative">
      <HomeTitle text={"Astronomy"} />
      <HomeTitle text={"Space"} />
      <p className="text-neutral-400 my-4 md:w-100 w-fit px-10 text-center">
        Space stuff all in one place with posts, videos, thoughts, and
        discoveries.
      </p>
      <Link
        className="p-4 border-1 border-neutral-800 rounded-full mt-4 hover:bg-neutral-800 flex items-center gap-2"
        href={"/discover"}
      >
        <ArrowUpRight />
      </Link>
      <footer className="absolute bottom-4 text-neutral-400">
        <p>
          -/ By{" "}
          <a href="https://github.com/shaikali-c" className="hover:underline">
            ShaikALi
          </a>
        </p>
      </footer>
    </section>
  );
}
