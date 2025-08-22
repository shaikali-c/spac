export default function SidebarElem({ children }) {
  return (
    <div className="w-full h-16 flex justify-center items-center hover:bg-sky-500 hover:text-neutral-50 cursor-pointer">
      {children}
    </div>
  );
}
