import Sidebar from "@/components/ui/sidebar/sidebar";

export default function DiscoverLayout({ children }) {
  return (
    <section className="bg-black">
      <Sidebar />
      {children}
    </section>
  );
}
