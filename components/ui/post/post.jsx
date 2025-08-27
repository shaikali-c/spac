import { CircleUserRound, Dot, Ellipsis, MessageCircle } from "lucide-react";
import Image from "next/image";
import PostInteraction from "./interaction";
import SpaceImage from "@/public/assets/img.jpg";
import Link from "next/link";
import ILike from "./iLike";

export default function Post({
  previewMode = false,
  likes = 768,
  comments = 124,
  data = {
    userName: "ShaikALi",
    time: "2h",
    content:
      "The Atmospheric Limb Tracker for Investigation of the Upcoming Stratosphere (Altius) mission.",
    imageLink: "",
  },
}) {
  return (
    <div
      className={`p-5 w-full max-w-140 border-neutral-900 flex flex-col ${
        !previewMode ? "md:border-x-2 border-b-2 " : ""
      }`}
    >
      <header className="flex justify-between text-neutral-200">
        <div className="flex items-center gap-2">
          <CircleUserRound color="grey" size={20} />
          <Link href={"/discover/tag"} className="flex items-center w-full">
            <span className="hover:underline ">
              {data.userName ? data.userName : "Astronout"}
            </span>
            <span className="flex text-neutral-400">
              <Dot />
              {data.time}
            </span>
          </Link>
        </div>
        <Ellipsis size={20} />
      </header>
      {/* Focus on Image Render Condition */}

      {/* {data.imageLink && (
        <Image
          src={SpaceImage}
          alt="An Image"
          className="rounded-2xl mt-5 object-cover"
        />
      )} */}

      {!previewMode ? (
        <div className="relative w-full h-100 mb-5">
          <Image
            src={
              "https://cdn.esahubble.org/archives/images/screen/heic0702a.jpg"
            }
            alt="An Image"
            className="rounded-2xl mt-5 object-cover"
            // placeholder="blur"
            fill
          />
        </div>
      ) : (
        <div>
          <img
            src={
              !data.imageLink ? "/assets/placeholder_image.svg" : data.imageLink
            }
            onError={(e) => {
              e.currentTarget.src = "/assets/placeholder_image.svg"; // from /public/fallback.png
            }}
            alt="Post Image"
            className="rounded-2xl mt-5 object-cover h-full w-full max-h-80"
          />
        </div>
      )}

      <div className={`flex items-center w-full pt-5`}>
        {/* Custom condition that likes will show only if there's a image link provided, makes sense right? I guess. */}
        <div className="flex items-center pb-0 gap-5 text-neutral-300">
          <ILike amount={likes} />
          <PostInteraction amount={comments}>
            <MessageCircle size={20} />
          </PostInteraction>
        </div>
      </div>
      <p className="pt-3 text-neutral-400">
        {data.content ? data.content : "Once upon a time..."}
      </p>
    </div>
  );
}
