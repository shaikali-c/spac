import { CircleStar, Clock, Dice3, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TopNav({ pcMode = false }) {
  return (
    <div
      className={`w-full flex bg-neutral-950 h-14 border-b-2 border-neutral-900 justify-around text-sm max-w-screen overflow-x-auto scrollbar-hide ${
        pcMode ? "flex" : "md:hidden"
      }`}
    >
      <Link
        href={"/discover"}
        className="h-full flex justify-center items-center w-fit gap-2 px-5  border-b-2 border-sky-600 text-neutral-100"
      >
        <CircleStar size={18} />
        Top
      </Link>
      <Link
        href={"/discover/tag"}
        className="h-full flex justify-center items-center w-fit gap-2 px-5 text-neutral-400"
      >
        <TrendingUp size={18} />
        Trending
      </Link>
      <Link
        href={"/discover/tag"}
        className="h-full flex justify-center items-center w-fit gap-2 px-5 text-neutral-400"
      >
        <Clock size={18} />
        Newest
      </Link>
      <Link
        href={"/discover/tag"}
        className="h-full flex justify-center items-center w-fit gap-2 px-5 text-neutral-400"
      >
        <Dice3 size={18} />
        Random
      </Link>
    </div>
  );
}
