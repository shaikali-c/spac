import {
  CircleUserRound,
  Ellipsis,
  Heart,
  MessageCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import PostInteraction from "./interaction";
import SpaceImage from "@/public/assets/img.jpg";
import Link from "next/link";

export default function Post({
  previewMode = false,
  likes = 768,
  comments = 124,
  data = {
    userName: "ShaikALi",
    content:
      "The Atmospheric Limb Tracker for Investigation of the Upcoming Stratosphere (Altius) mission.",
    imageLink: "",
  },
}) {
  return (
    <div
      className={`p-5 w-full max-w-150 border-neutral-900 flex flex-col ${
        !previewMode ? "md:border-x-2 border-b-2 " : ""
      }`}
    >
      <header className="flex justify-between text-neutral-200">
        <div className="flex items-center gap-2">
          <CircleUserRound color="grey" size={20} />
          {data.userName && (
            <Link href={"/discover/tag"} className="hover:underline">
              {data.userName}
            </Link>
          )}
          {!data.userName && <p>Author Name</p>}
        </div>
        <Ellipsis size={20} />
      </header>
      {/* Focus on Image Render Condition */}
      <p className="pt-3 text-neutral-400">
        {data.content ? data.content : "Explain about your post."}
      </p>
      {/* {data.imageLink && (
        <Image
          src={SpaceImage}
          alt="An Image"
          className="rounded-2xl mt-5 object-cover"
        />
      )} */}

      {!previewMode ? (
        <Image
          src={SpaceImage}
          alt="An Image"
          className="rounded-2xl mt-5 object-cover"
        />
      ) : (
        <img
          src={
            !data.imageLink ? "/assets/placeholder_image.svg" : data.imageLink
          }
          onError={(e) => {
            e.currentTarget.src = "/assets/placeholder_image.svg"; // from /public/fallback.png
          }}
          alt="Post Image"
          className="rounded-2xl mt-5 object-cover"
        />
      )}
      <div
        className={`flex ${
          !previewMode ? "justify-between" : "justify-center"
        } items-center w-full pt-5 md:px-5`}
      >
        {/* Custom condition that likes will show only if there's a image link provided, makes sense right? I guess. */}
        <div className="flex items-center pb-0 gap-5 text-neutral-300">
          <PostInteraction amount={likes}>
            <Heart size={20} />
          </PostInteraction>
          <PostInteraction amount={comments}>
            <MessageCircle size={20} />
          </PostInteraction>
        </div>
        {!previewMode && (
          <p className="text-neutral-400 flex items-center gap-1.5">
            <Star fill="#006fff" color="#006fff" size={10} />
            Black hole
          </p>
        )}
      </div>
    </div>
  );
}
