import HomeTitle from "@/components/ui/home/title";
import NextButton from "@/components/ui/nextBtn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <section className="w-screen h-dvh flex items-center justify-center flex-col relative bg-black text-neutral-50">
      <HomeTitle text={"Astronomy"} />
      <HomeTitle text={"Space"} />
      <p className="text-neutral-400 my-4 md:w-100 w-fit px-10 text-center hidden md:block">
        Space stuff all in one place with posts, videos, thoughts, and
        discoveries.
      </p>
      <NextButton path={"/discover"} label="Explore" />
      <footer className="fixed bottom-5 text-neutral-400">
        <p>
          -/
          <a
            href="https://github.com/shaikali-c"
            className="hover:underline hover:text-neutral-200 transition-all"
          >
            {" "}
            By Marwaan
          </a>
        </p>
      </footer>
    </section>
  );
}
