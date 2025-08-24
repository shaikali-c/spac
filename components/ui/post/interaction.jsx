"use client";
export default function PostInteraction({ children }) {
  const handleClick = () => {
    console.log("Alright.");
  };
  return (
    <div
      className="flex gap-1.5 items-center hover:text-rose-600 cursor-pointer select-none"
      onClick={handleClick}
    >
      {children}
      <p>203</p>
    </div>
  );
}
