import {
  Aperture,
  CircleStar,
  Clock,
  Dice3,
  Ellipsis,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function Searchbar() {
  return (
    <header className="sticky top-0 left-0 z-100 flex flex-col">
      <div className="flex h-16">
        <div className="w-18 h-full bg-neutral-950 border-r-2 border-neutral-900 border-b-2 flex items-center justify-center md:hidden">
          <Aperture className="text-neutral-200" />
        </div>
        <input
          type="text"
          placeholder="Search anything..."
          className="h-16 border-b-2 border-neutral-900 w-full outline-0 px-6 bg-neutral-950"
        />
      </div>
      <div className="w-full bg-neutral-950 h-14 border-b-2 border-neutral-900 flex justify-around text-sm max-w-screen overflow-x-auto md:hidden">
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
    </header>
  );
}
