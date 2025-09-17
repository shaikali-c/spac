import {
  Aperture,
  CircleStar,
  Clock,
  Dice3,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import TopNav from "./topNav";

export default function Searchbar() {
  return (
    <header className="sticky top-0 left-0 z-100 flex flex-col">
      <div className="flex h-16">
        <div className="w-18 h-full bg-neutral-950 border-r-2 border-neutral-900 border-b-2 flex items-center justify-center md:hidden">
          <Star className="text-neutral-200" size={22} fill="#e5e5e5" />
        </div>
        <input
          type="text"
          placeholder="Search anything..."
          className="h-16 border-b-2 border-neutral-900 w-full outline-0 px-6 bg-neutral-950"
        />
      </div>
      <TopNav />
    </header>
  );
}
