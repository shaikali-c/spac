"use client";
import { CircleUserRound, Dot, Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PostSave from "./save";
import PostInteraction from "./interaction";
import PostCaption from "./caption";

export default function Post({
  previewMode = false,
  likes = 768,
  comments = 124,
  data = {
    userName: "ShaikALi",
    time: "2h",
    caption:
      "The Atmospheric Limb Tracker for Investigation of the Upcoming Stratosphere (Altius) mission.",
    imageLink: "",
  },
}) {
  return (
    <div
      className={`p-6 md:p-5 w-full max-w-120 border-neutral-900 flex flex-col ${
        !previewMode ? "border-b-2 " : "border-x-0"
      }`}
    >
      <header className="flex justify-between text-neutral-200">
        <div className="flex items-center gap-2">
          <CircleUserRound color="grey" size={20} />
          <Link href={"/discover/user"} className="flex items-center w-full">
            <span className="hover:underline font-medium">
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
      {!previewMode ? (
        <div className="relative w-full h-90 md:h-110 mb-5">
          <Image
            src={
              data.imageLink
                ? data.imageLink
                : "https://cdn.esahubble.org/archives/images/screen/heic0702a.jpg"
            }
            alt="An Image"
            className="rounded-2xl mt-5 object-cover"
            fill
          />
        </div>
      ) : (
        <div>
          <div className="h-70 my-5 mb-0 rounded-2xl w-full bg-neutral-700 relative overflow-hidden">
            <img
              src={data.imageLink || "/assets/placeholder_image.svg"}
              onError={(e) => {
                e.currentTarget.src = "/assets/placeholder_image.svg";
              }}
              alt="Post Image"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </div>
      )}
      <div className="flex items-center w-full pt-5 justify-between text-neutral-300">
        <PostInteraction likes={likes} comments={comments} />
        <PostSave />
      </div>
      <PostCaption
        caption={data.caption}
        userName={data.userName ? data.userName : "Astronaut"}
      />
    </div>
  );
}
