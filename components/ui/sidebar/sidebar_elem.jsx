import Link from "next/link";

export default function SidebarElem({ children, style = {} }) {
  return (
    <Link
      href={"/"}
      className={`w-full h-16 flex justify-center items-center hover:bg-sky-600 transition-colors hover:text-neutral-50 cursor-pointer ${style}`}
    >
      {children}
    </Link>
  );
}
