import Searchbar from "@/components/ui/searchbar";
import Sidebar from "@/components/ui/sidebar/sidebar";
import TopNav from "@/components/ui/topNav";

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
          <section className="hidden lg:flex flex-col sticky top-0 h-screen border-r-2 border-neutral-900 overflow-y-auto bg-neutral-950">
            <TopNav pcMode="true" />
            <header>
              <h2>Top rated researches</h2>
            </header>
          </section>
        </section>
      </section>
    </section>
  );
}
