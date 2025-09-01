import { Aperture, Ellipsis, Search, Star } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex  sticky top-0 left-0 z-100">
      <div className="w-18 h-full bg-neutral-950 border-r-2 border-neutral-900 border-b-2 flex items-center justify-center md:hidden">
        <Aperture className="text-neutral-200" />
      </div>
      <input
        type="text"
        placeholder="Search anything..."
        className="h-16 border-b-2 border-neutral-900 w-full outline-0 px-6 bg-neutral-950"
      />
    </div>
  );
}
