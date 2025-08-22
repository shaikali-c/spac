import { Aperture, Image, MoonStar, Star, WandSparkles } from "lucide-react";
import SidebarElem from "./sidebar_elem";

export default function Sidebar() {
  return (
    <div className="h-screen w-16 border-r-1 border-neutral-900 flex flex-col">
      <div className="w-full h-16 flex justify-center items-center border-b-1 border-neutral-900">
        <Star size={20} fill="#fff" />
      </div>
      <SidebarElem>
        <MoonStar size={20} />
      </SidebarElem>
      <SidebarElem>
        <Aperture size={20} />
      </SidebarElem>
      <SidebarElem>
        <WandSparkles size={20} />
      </SidebarElem>
      <SidebarElem>
        <Image size={20} />
      </SidebarElem>
    </div>
  );
}
