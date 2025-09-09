export default function Tag({ text, children }) {
  return (
    <div className="px-5 py-2 rounded-full bg-neutral-800 w-fit text-sm hover:bg-neutral-600">
      <p className="flex items-center gap-2">
        {children} {text}
      </p>
    </div>
  );
}
