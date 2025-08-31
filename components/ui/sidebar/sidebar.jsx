import {
  Aperture,
  House,
  Image,
  MoonStar,
  Settings,
  Star,
  WandSparkles,
} from "lucide-react";
import SidebarElem from "./sidebar_elem";

export default function Sidebar() {
  return (
    <div className="h-dvh w-16 border-r-2 bg-black border-neutral-900 flex-col justify-between fixed top-0 left-0 hidden md:flex">
      <div>
        <div className="w-full h-16 flex justify-center items-center border-b-2 border-neutral-900">
          <Star size={20} fill="#fff" />
        </div>
        <SidebarElem>
          <House size={20} />
        </SidebarElem>
        <SidebarElem>
          <Aperture size={20} />
        </SidebarElem>
        <SidebarElem path="/create">
          <WandSparkles size={20} />
        </SidebarElem>
        <SidebarElem>
          <Image size={20} />
        </SidebarElem>
      </div>
      <SidebarElem style={"border-t-2 border-neutral-900"}>
        <Settings />
      </SidebarElem>
    </div>
  );
}
