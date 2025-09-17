import Searchbar from "@/components/ui/searchbar";
import Sidebar from "@/components/ui/sidebar/sidebar";
import TopNav from "@/components/ui/topNav";
import { Brush, Sparkles } from "lucide-react";

export default function DiscoverLayout({ children }) {
  return (
    <section className="bg-black flex min-h-screen">
      <Sidebar />
      <section className="md:ml-16 flex flex-1 flex-col">
        <Searchbar />
        <section className="flex justify-center">
          <div className="md:min-w-120 md:border-x-2 border-neutral-900">
            {children}
          </div>
          <section className="hidden w-120 lg:flex flex-col sticky top-0 h-screen  border-r-2 border-neutral-900 overflow-y-auto bg-neutral-950">
            <TopNav pcMode="true" />
            <section className="p-8 border-b-2 border-neutral-900">
              <button className="w-full bg-sky-600 px-5 py-3 rounded-xl flex gap-2 items-center justify-center">
                <Sparkles size={18} />
                Customize your feed
              </button>
              <p className="text-sm text-neutral-400 pt-5">
                Added explicit feed customization, giving users full control
                over content preferences beyond automated curation.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
