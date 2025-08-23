export default function SidebarElem({ children, style = {} }) {
  return (
    <div
      className={`w-full h-16 flex justify-center items-center hover:bg-sky-600 hover:text-neutral-50 cursor-pointer ${style}`}
    >
      {children}
    </div>
  );
}
