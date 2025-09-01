import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NextButton({ path, label = "next" }) {
  return (
    <Link
      className="p-4 border-1 border-neutral-800 rounded-full mt-4 hover:bg-neutral-800 flex items-center gap-2 md:bg-transparent bg-neutral-800"
      href={path}
      aria-label="EXPLORE"
    >
      <ArrowUpRight />
    </Link>
  );
}
