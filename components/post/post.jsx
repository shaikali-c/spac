import { Ellipsis } from "lucide-react";
import Image from "next/image";
import SpaceImage from "@/assets/img.jpg";

export default function Post() {
  return (
    <div className="p-5">
      <header className="flex justify-between text-neutral-200">
        <h2>Shaik Ali</h2>
        <Ellipsis />
      </header>
      <Image src={SpaceImage} alt="An Image" className="rounded-2xl mt-5" />
    </div>
  );
}
