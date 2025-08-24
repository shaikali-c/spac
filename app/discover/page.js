import Post from "@/components/ui/post/post";
import Thought from "@/components/ui/thoughts/thought";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const thoughts = [
  "The James Webb Space Telescope is an orbiting infrared observatory that will look to the beginning of time and to hunt for the unobserved formation of the first galaxies, as well as to look inside dust clouds where stars and planetary systems are forming today.",
  "Much closer to home, NASA has sent five robotic vehicles, called rovers, to Mars. Rovers help scientists in their quest to understand what different parts of the planet are made of. ",
  "Much closer to home, NASA has sent five robotic vehicles, called rovers, to Mars. Rovers help scientists in their quest to understand what different parts of the planet are made of. ",
];

export default function Discover() {
  return (
    <main className="w-full">
      <section className="flex justify-center flex-row">
        <div className="flex items-center justify-center flex-col">
          <Post />
          <Post />
          <Post />
        </div>
        <section className="hidden lg:block sticky top-0 h-screen max-w-140 border-r-2 border-neutral-900  overflow-y-auto">
          <header className="p-5 pb-0 flex items-center gap-1.5">
            <Sparkles size={20} className="text-sky-600" />
            <h2 className="text-lg">Space thoughts</h2>
          </header>

          <section className="flex flex-col mt-5 gap-10 justify-center">
            {thoughts.map((elem, index) => (
              <Thought content={elem} key={index} />
            ))}
            <Link
              aria-label="About thoughts page"
              href={"/create"}
              className="text-center text-neutral-50 flex gap-1 justify-center items-center bg-sky-600 w-fit mx-auto p-3 px-5 rounded-full hover:underline mb-10"
            >
              Post a thought
              <ArrowUpRight size={18} />
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
