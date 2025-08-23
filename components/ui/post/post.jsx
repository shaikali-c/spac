import {
  CircleUserRound,
  Ellipsis,
  Heart,
  MessageCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import SpaceImage from "@/assets/img.jpg";
import PostInteraction from "./interaction";
import Link from "next/link";

export default function Post() {
  return (
    <div className="p-5 w-fit max-w-150 border-b-1 border-neutral-900 md:border-x-1 flex flex-col">
      <header className="flex justify-between text-neutral-200">
        <div className="flex items-center gap-2">
          <CircleUserRound color="grey" size={20} />
          <Link href={"/"} className="hover:underline">
            Shaik Ali
          </Link>
        </div>
        <Ellipsis size={20} />
      </header>
      {/* Information */}
      <p className="pt-3 text-neutral-400">
        The Atmospheric Limb Tracker for Investigation of the Upcoming
        Stratosphere (Altius) mission.
      </p>
      <Image
        src={SpaceImage}
        alt="An Image"
        className="rounded-2xl mt-5 object-cover"
      />
      <div className="flex justify-between items-center w-full pt-5 md:px-5">
        <div className="flex items-center pb-0 gap-5 text-neutral-300">
          <PostInteraction>
            <Heart size={20} />
          </PostInteraction>
          <PostInteraction>
            <MessageCircle size={20} />
          </PostInteraction>
        </div>
        <p className="text-neutral-400 flex items-center gap-1.5">
          <Star fill="#006fff" color="#006fff" size={10} />
          Black hole
        </p>
      </div>
    </div>
  );
}
