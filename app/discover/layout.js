import Sidebar from "@/components/ui/sidebar/sidebar";

export default function DiscoverLayout({ children }) {
  return (
    <section className="bg-black flex min-h-screen">
      <Sidebar />
      <section className="ml-16 flex flex-1">{children}</section>
    </section>
  );
}
