import { Heart } from "lucide-react";

export default function ILike({ amount }) {
  return (
    <div className="flex gap-1.5 items-center hover:text-rose-600 cursor-pointer select-none">
      <Heart size={20} />
      <p className="text-neutral-300">{amount}</p>
    </div>
  );
}
