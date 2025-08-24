import Searchbar from "@/components/ui/searchbar";
import Sidebar from "@/components/ui/sidebar/sidebar";

export default function DiscoverLayout({ children }) {
  return (
    <section className="bg-black flex min-h-screen">
      <Sidebar />
      <section className="ml-16 flex flex-1 flex-col">
        <Searchbar />
        {children}
      </section>
    </section>
  );
}
