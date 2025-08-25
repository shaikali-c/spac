import {
  ArrowUpRight,
  CircleAlert,
  Link,
  Pencil,
  Play,
  WrapText,
} from "lucide-react";
import CreateInput from "../createInput";

export default function CreateCol1({ postData, setPostData }) {
  return (
    <section className="relative">
      <header className="p-8 md:p-10 pb-5 md:pb-5 flex flex-col gap-1.5">
        <h2 className="text-xl">What's on your mind?</h2>
        <p className="text-neutral-400">
          Make it as clear as possible because it's the first thing people will
          see, even before the image.
        </p>
      </header>
      <section className="p-8 md:p-10 md:pt-0 pt-3 flex flex-col gap-5">
        <CreateInput
          placeholder={"Pick your post category"}
          setPostData={setPostData}
          inputValue={postData.category}
          keyValue={"category"}
          postData={postData}
        >
          <Pencil size={18} />
        </CreateInput>
        <CreateInput
          placeholder={"Explain about your post"}
          setPostData={setPostData}
          inputValue={postData.content}
          keyValue={"content"}
          postData={postData}
        >
          <WrapText size={18} />
        </CreateInput>
        <CreateInput
          placeholder={"Drop the image link"}
          setPostData={setPostData}
          inputValue={postData.imageLink}
          keyValue={"imageLink"}
          postData={postData}
        >
          <Link size={18} />
        </CreateInput>
        <p className="text-sm text-neutral-400">
          Your post won’t be shared right away. It’ll first go into pending
          posts and get checked before showing up.
        </p>
        {/* <p className="text-red-500">
          The title is too short, please make it more informative.
        </p> */}
        <button className="bg-neutral-700 w-fit mx-auto p-4.5 rounded-full mt-3 hover:bg-sky-600 cursor-pointer transition-all">
          <ArrowUpRight size={22} />
        </button>
      </section>
      <footer className="fixed bottom-0 right-0 p-10 text-sm text-neutral-400">
        <p>-/ By Marwaan</p>
      </footer>
    </section>
  );
}
