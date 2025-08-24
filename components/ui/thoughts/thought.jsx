import { Heart, Star } from "lucide-react";

export default function Thought({ content }) {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl px-6 border-1 border-neutral-900 hover:border-neutral-800 mx-8 flex flex-col gap-2">
      <h2 className="text-sm text-neutral-400">Jupiter</h2>
      <p className="leading-7">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Heart
            size={18}
            className="text-rose-500"
            fill="oklch(64.5% 0.246 16.439)"
          />
          <p>20</p>
        </div>
      </div>
    </div>
  );
}
