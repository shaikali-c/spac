import { ArrowUpRight, CircleAlert } from "lucide-react";

export default function Create() {
  return (
    <section className="w-screen h-screen justify-center flex items-center p-5 md:p-0">
      <div className="w-full h-170 max-w-230 bg-neutral-900 rounded-2xl grid md:grid-cols-[2fr_1fr] grid-cols-1 overflow-hidden">
        <section className="relative">
          <header className="p-10 pb-5 flex flex-col gap-1.5">
            <h2 className="text-xl">What's on your mind?</h2>
            <p className="text-neutral-400">
              Make it as clear as possible because it's the first thing people
              will see, even before the image.
            </p>
          </header>
          <section className="p-10 pt-0 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Pick a post title"
              className="w-full p-5 outline-0 border-b-2 border-neutral-800 focus:border-sky-600 transition-all"
            />
            <input
              type="text"
              placeholder="Explain your post"
              className="w-full p-5 outline-0 border-b-2 border-neutral-800 focus:border-sky-600 transition-all"
            />
            <p className="text-red-500 flex items-center gap-2 mt-3">
              <CircleAlert size={15} />
              The title is too short, please make it more informative.
            </p>
            <button className="bg-neutral-700 w-fit mx-auto p-5 rounded-full mt-3 hover:bg-sky-600 cursor-pointer transition-all">
              <ArrowUpRight size={22} />
            </button>
          </section>
          <footer className="absolute bottom-0 right-0 p-10 text-sm text-neutral-400">
            <p>-/ By ShaikALi</p>
          </footer>
        </section>
        <div className="bg-neutral-800 hidden md:block">
          <header>
            <h2 className="text-xl pl-10 pt-10">Preview</h2>
          </header>
        </div>
      </div>
    </section>
  );
}
