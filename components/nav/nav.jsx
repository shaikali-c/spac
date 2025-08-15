import {
  Bolt,
  ChartNoAxesCombined,
  Earth,
  Moon,
  Sparkles,
  Telescope,
} from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-17 border-r-1 bg-black border-neutral-800 text-neutral-300 flex flex-col justify-between h-dvh">
      <section>
        <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center border-b-1 border-neutral-800">
          <Moon />
        </div>
        <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center">
          <Telescope />
        </div>

        <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center">
          <Sparkles />
        </div>
        <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center">
          <ChartNoAxesCombined />
        </div>

        <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center">
          <Earth />
        </div>
      </section>
      <div className="cursor-pointer w-17 h-17 hover:bg-sky-600 flex items-center justify-center border-t-1 border-neutral-800">
        <Bolt />
      </div>
    </nav>
  );
}
