import { CircleUserRound, Ellipsis } from "lucide-react";
import Image from "next/image";
import SpaceImage from "@/assets/img.jpg";
import Profile from "@/assets/pfp.png";

export default function Post() {
  return (
    <div className="p-5 w-fit max-w-150 border-b-1 border-neutral-900 md:border-x-1">
      <header className="flex justify-between text-neutral-200">
        <div className="flex items-center gap-2">
          <CircleUserRound color="grey" size={20} />
          <h2>Shaik Ali</h2>
        </div>
        <Ellipsis size={20} />
      </header>
      <h2 className="pt-3 text-neutral-400">
        The Atmospheric Limb Tracker for Investigation of the Upcoming
        Stratosphere (Altius) mission.
      </h2>
      <Image
        src={SpaceImage}
        alt="An Image"
        className="rounded-2xl mt-5 object-cover"
      />
    </div>
  );
}
