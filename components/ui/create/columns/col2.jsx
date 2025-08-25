import PreviewPost from "../previewPost";

export default function CreateCol2({ postData }) {
  return (
    <div className="bg-neutral-800 hidden md:block">
      <header className="border-b-2 border-neutral-700 pb-10">
        <h2 className="text-xl pl-10 pt-10">Preview</h2>
        <p className="text-sm px-10 py-0.5 text-neutral-400">
          Start writing to preview your post.
        </p>
      </header>
      <div className="py-3">
        <PreviewPost postData={postData} />
      </div>
    </div>
  );
}
