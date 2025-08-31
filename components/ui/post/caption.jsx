export default function PostCaption({ userName, caption }) {
  return (
    <p className="pt-3 text-neutral-400">
      <span className="font-bold text-neutral-200 mr-2">{userName}</span>
      {caption ? caption : "Caption your post"}
    </p>
  );
}
