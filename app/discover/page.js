import Post from "@/components/ui/post/post";
import Searchbar from "@/components/ui/searchbar";
import Thought from "@/components/ui/thoughts/thought";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Discover() {
  return (
    <main className="w-full">
      {/* Invisible element prevents input auto-focus. The worst ever browser by-default I've seen. */}
      <span
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      />

      <Searchbar />
      <section className="flex justify-center flex-row">
        <div className="flex items-center justify-center flex-col">
          <Post />
          <Post />
          <Post />
        </div>
        <section className="hidden lg:block sticky top-0 h-screen max-w-140 border-r-1 border-neutral-900">
          <header className="p-5 pb-0 flex items-center gap-1.5">
            <Sparkles size={20} className="text-sky-600" />
            <h2 className="text-lg">Space thoughts</h2>
          </header>

          <section className="flex flex-col mt-5 gap-10 justify-center">
            <Thought
              content={
                "The James Webb Space Telescope is an orbiting infrared observatory that will look to the beginning of time and to hunt for the unobserved formation of the first galaxies, as well as to look inside dust clouds where stars and planetary systems are forming today."
              }
            />
            <Thought
              content={
                "Presented here are a collection of hand-picked stories that showcase the aviation technology NASA is working"
              }
            />
            <Thought
              content={
                "Much closer to home, NASA has sent five robotic vehicles, called rovers, to Mars. Rovers help scientists in their quest to understand what different parts of the planet are made of. "
              }
            />
            <Thought
              content={
                "Four astronauts will venture around the Moon on Artemis II, the first crewed mission on NASA's path to establishing a long-term presence at the Moon for science and exploration.C"
              }
            />
            <Link
              href={"/"}
              className="text-center text-neutral-50 flex gap-1 justify-center items-center bg-sky-600 w-fit mx-auto p-3 px-5 rounded-full hover:underline"
            >
              More on thoughts
              <ArrowUpRight size={18} />
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
