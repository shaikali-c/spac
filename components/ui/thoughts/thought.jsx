export default function Thought({ content }) {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl px-6 border-1 border-neutral-900 hover:border-neutral-800 mx-8">
      <p className="leading-7">{content}</p>
    </div>
  );
}
