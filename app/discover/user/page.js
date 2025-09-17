"use client";
import Tag from "@/components/ui/user/tag";
import {
  Atom,
  Blend,
  Camera,
  Gamepad,
  Plane,
  Sparkle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function User() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <section className="md:w-120">
      <header className="flex justify-between items-center p-8 pb-5">
        <div className="flex items-center gap-3">
          <Image
            src={
              "https://cdn.esahubble.org/archives/images/screen/heic1105a.jpg"
            }
            width={30}
            height={30}
            className=" rounded-full"
            alt="Profile Photo"
          />
          <h2 className="font-medium">Shaik ALI</h2>
        </div>
        <p className="text-sm text-neutral-400">Joined a month ago.</p>
      </header>

      <p className="p-5 pt-0 pb-5 px-8 text-neutral-400 ">
        Born in Wapakoneta, Ohio, Armstrong earned a degree in Aeronautical
        Engineering from Purdue University. He served as a naval aviator before
        joining NASA as a test pilot.
      </p>
      <section className="p-8 pt-0 border-b-2 border-neutral-900">
        <section className="flex flex-wrap gap-4">
          <Tag text={"Photography"}>
            <Camera size={18} />
          </Tag>
          <Tag text={"Physics"}>
            <Atom size={18} />
          </Tag>
          <Tag text={"Gaming"}>
            <Gamepad size={18} />
          </Tag>
          <Tag text={"Aeronotics Engineer"}>
            <Plane size={18} />
          </Tag>
        </section>
      </section>
      <section className="w-full flex justify-center mt-20 text-neutral-400">
        <p className="flex gap-2 items-center">
          <Blend size={19} />
          No posts here.
        </p>
      </section>
    </section>
  );
}
