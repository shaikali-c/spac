export default function PostInteraction({ children }) {
  return (
    <div className="flex gap-1.5 items-center hover:text-rose-600">
      {children}
      <p>{Math.floor(Math.random() * 50)}</p>
    </div>
  );
}
